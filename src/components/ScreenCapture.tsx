
import React, { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/hooks/use-toast";
import { Camera, Monitor, Layout, MousePointer, Mic, MicOff, Video, VideoOff, Stop, Download } from "lucide-react";

const ScreenCapture = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [recordedBlob, setRecordedBlob] = useState<Blob | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [micEnabled, setMicEnabled] = useState(true);
  const [showRecordingOptions, setShowRecordingOptions] = useState(false);
  const [selectedSource, setSelectedSource] = useState<'screen' | 'window' | 'area'>('screen');
  
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const mediaStreamRef = useRef<MediaStream | null>(null);
  const chunksRef = useRef<BlobPart[]>([]);
  const timerRef = useRef<number | null>(null);

  const handleSelectSource = (source: 'screen' | 'window' | 'area') => {
    setSelectedSource(source);
  };

  const startRecording = async () => {
    chunksRef.current = [];
    
    try {
      // Request display media (screen, window, or specific area)
      const displayMediaOptions: DisplayMediaStreamOptions = {
        video: {
          cursor: "always",
        },
        audio: false
      };
      
      const displayStream = await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
      
      // If microphone is enabled, get audio stream and combine with display stream
      let combinedStream = displayStream;
      
      if (micEnabled) {
        try {
          const audioStream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
          const audioTrack = audioStream.getAudioTracks()[0];
          
          // Combine audio and video tracks
          combinedStream = new MediaStream([
            ...displayStream.getVideoTracks(),
            audioTrack
          ]);
        } catch (err) {
          toast({
            title: "Microphone Access Denied",
            description: "Unable to access your microphone. Recording will continue without audio.",
            variant: "destructive"
          });
          setMicEnabled(false);
        }
      }
      
      mediaStreamRef.current = combinedStream;
      
      // Set up the MediaRecorder
      const mediaRecorder = new MediaRecorder(combinedStream, {
        mimeType: 'video/webm; codecs=vp9'
      });
      
      mediaRecorderRef.current = mediaRecorder;
      
      // Handle data available event
      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          chunksRef.current.push(event.data);
        }
      };
      
      // Handle recording stopped
      mediaRecorder.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: 'video/webm' });
        setRecordedBlob(blob);
        
        const url = URL.createObjectURL(blob);
        setPreviewUrl(url);
        
        // Clean up media stream
        if (mediaStreamRef.current) {
          mediaStreamRef.current.getTracks().forEach(track => track.stop());
        }
        
        setIsRecording(false);
        setIsPaused(false);
        stopTimer();
        
        toast({
          title: "Recording complete",
          description: "Your screen recording has been saved."
        });
      };
      
      // Start recording
      mediaRecorder.start(1000); // Collect data every second
      setIsRecording(true);
      startTimer();
      setShowRecordingOptions(false);
      
      toast({
        title: "Recording started",
        description: `Recording your ${selectedSource === 'screen' ? 'entire screen' : selectedSource === 'window' ? 'selected window' : 'selected area'}.`,
      });
      
      // Listen for the end of sharing
      displayStream.getVideoTracks()[0].onended = () => {
        stopRecording();
      };
      
    } catch (err) {
      console.error("Error starting recording:", err);
      toast({
        title: "Recording Error",
        description: "Failed to start recording. Please try again.",
        variant: "destructive"
      });
    }
  };

  const pauseRecording = () => {
    if (mediaRecorderRef.current && isRecording && !isPaused) {
      mediaRecorderRef.current.pause();
      setIsPaused(true);
      stopTimer();
      
      toast({
        title: "Recording paused",
        description: "Your recording has been paused. Click resume to continue.",
      });
    }
  };

  const resumeRecording = () => {
    if (mediaRecorderRef.current && isRecording && isPaused) {
      mediaRecorderRef.current.resume();
      setIsPaused(false);
      startTimer();
      
      toast({
        title: "Recording resumed",
        description: "Your recording has resumed.",
      });
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      
      // Stop all tracks in the stream
      if (mediaStreamRef.current) {
        mediaStreamRef.current.getTracks().forEach(track => track.stop());
      }
    }
  };

  const downloadRecording = () => {
    if (recordedBlob) {
      const url = URL.createObjectURL(recordedBlob);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      a.download = `screen-recording-${new Date().toISOString()}.webm`;
      document.body.appendChild(a);
      a.click();
      URL.revokeObjectURL(url);
      document.body.removeChild(a);
      
      toast({
        title: "Download started",
        description: "Your recording is being downloaded.",
      });
    }
  };

  const startTimer = () => {
    if (timerRef.current === null) {
      timerRef.current = window.setInterval(() => {
        setRecordingTime(prev => prev + 1);
      }, 1000);
    }
  };

  const stopTimer = () => {
    if (timerRef.current !== null) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const formatTime = (timeInSeconds: number) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;
    
    return [
      hours.toString().padStart(2, '0'),
      minutes.toString().padStart(2, '0'),
      seconds.toString().padStart(2, '0')
    ].join(':');
  };

  const toggleMicrophone = () => {
    setMicEnabled(!micEnabled);
  };

  const openRecordingOptions = () => {
    setShowRecordingOptions(true);
  };

  return (
    <div className="w-full">
      <div className="flex flex-col items-center">
        {!isRecording && !previewUrl && (
          <Button 
            size="lg" 
            onClick={openRecordingOptions} 
            className="bg-primary hover:bg-primary/90 mt-8"
          >
            <Camera className="mr-2 h-5 w-5" />
            Start Recording
          </Button>
        )}
        
        {isRecording && (
          <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 p-4 glass-panel rounded-2xl shadow-lg z-50 flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
              <span className="font-medium">{formatTime(recordingTime)}</span>
            </div>
            
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                className="h-9 w-9 p-0"
                onClick={toggleMicrophone}
              >
                {micEnabled ? <Mic className="h-4 w-4" /> : <MicOff className="h-4 w-4" />}
              </Button>
              
              {isPaused ? (
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={resumeRecording}
                >
                  <Video className="h-4 w-4 mr-2" />
                  Resume
                </Button>
              ) : (
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={pauseRecording}
                >
                  <VideoOff className="h-4 w-4 mr-2" />
                  Pause
                </Button>
              )}
              
              <Button 
                variant="destructive" 
                size="sm" 
                onClick={stopRecording}
              >
                <Stop className="h-4 w-4 mr-2" />
                Stop
              </Button>
            </div>
          </div>
        )}
        
        {previewUrl && (
          <div className="mt-8 w-full max-w-3xl">
            <h3 className="text-xl font-semibold mb-4">Recording Preview</h3>
            <div className="rounded-lg overflow-hidden border border-border mb-4">
              <video src={previewUrl} controls className="w-full"></video>
            </div>
            <div className="flex justify-between">
              <Button variant="outline" onClick={() => {
                setPreviewUrl(null);
                setRecordedBlob(null);
                setRecordingTime(0);
              }}>
                Discard
              </Button>
              <Button onClick={downloadRecording}>
                <Download className="mr-2 h-4 w-4" />
                Download
              </Button>
            </div>
          </div>
        )}
      </div>
      
      <Dialog open={showRecordingOptions} onOpenChange={setShowRecordingOptions}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Start Recording</DialogTitle>
            <DialogDescription>
              Choose what you want to capture
            </DialogDescription>
          </DialogHeader>
          
          <Tabs defaultValue="screen" className="mt-4">
            <TabsList className="grid grid-cols-3 mb-4">
              <TabsTrigger value="screen" onClick={() => handleSelectSource('screen')}>
                <Monitor className="h-4 w-4 mr-2" /> Screen
              </TabsTrigger>
              <TabsTrigger value="window" onClick={() => handleSelectSource('window')}>
                <Layout className="h-4 w-4 mr-2" /> Window
              </TabsTrigger>
              <TabsTrigger value="area" onClick={() => handleSelectSource('area')}>
                <MousePointer className="h-4 w-4 mr-2" /> Area
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="screen" className="space-y-4">
              <div className="p-4 rounded-lg bg-muted/50 text-center">
                <Monitor className="h-16 w-16 mx-auto mb-2 text-primary" />
                <h3 className="font-medium">Entire Screen</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Capture everything displayed on your monitor
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="window" className="space-y-4">
              <div className="p-4 rounded-lg bg-muted/50 text-center">
                <Layout className="h-16 w-16 mx-auto mb-2 text-primary" />
                <h3 className="font-medium">Application Window</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Select a specific application window to record
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="area" className="space-y-4">
              <div className="p-4 rounded-lg bg-muted/50 text-center">
                <MousePointer className="h-16 w-16 mx-auto mb-2 text-primary" />
                <h3 className="font-medium">Custom Area</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Select and record a specific area of your screen
                </p>
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="flex items-center gap-4 py-2">
            <Button
              variant="outline"
              size="sm"
              className={micEnabled ? "bg-primary/10 text-primary" : ""}
              onClick={toggleMicrophone}
            >
              {micEnabled ? <Mic className="h-4 w-4 mr-2" /> : <MicOff className="h-4 w-4 mr-2" />}
              {micEnabled ? "Microphone On" : "Microphone Off"}
            </Button>
          </div>
          
          <div className="flex justify-end gap-2 mt-4">
            <Button variant="outline" onClick={() => setShowRecordingOptions(false)}>
              Cancel
            </Button>
            <Button onClick={startRecording}>
              <Camera className="mr-2 h-4 w-4" />
              Start Recording
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ScreenCapture;
