
import React, { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Monitor, Mic, Square, Download } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

const ScreenCapture = () => {
  const [recording, setRecording] = useState(false);
  const [videoURL, setVideoURL] = useState<string | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const videoRef = useRef<HTMLVideoElement>(null);

  const startRecording = async () => {
    try {
      chunksRef.current = [];
      const displayMediaOptions = {
        video: {
          displaySurface: "browser",
        },
        audio: false
      };
      
      // @ts-ignore - displaySurface is not in the type definition
      const stream = await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      
      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          chunksRef.current.push(event.data);
        }
      };
      
      mediaRecorder.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: 'video/webm' });
        const url = URL.createObjectURL(blob);
        setVideoURL(url);
        
        if (videoRef.current) {
          videoRef.current.srcObject = null;
          videoRef.current.src = url;
        }
      };
      
      // When user stops sharing screen
      stream.getVideoTracks()[0].onended = () => {
        stopRecording();
      };
      
      mediaRecorder.start();
      setRecording(true);
      toast({
        title: "Recording Started",
        description: "Your screen recording has begun.",
      });
    } catch (error) {
      console.error('Error starting screen capture:', error);
      toast({
        variant: "destructive",
        title: "Recording Error",
        description: "Unable to capture screen. Please check permissions.",
      });
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && recording) {
      mediaRecorderRef.current.stop();
      
      // Stop all tracks
      if (mediaRecorderRef.current.stream) {
        mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop());
      }
      
      setRecording(false);
      toast({
        title: "Recording Completed",
        description: "Your recording is ready to download.",
      });
    }
  };

  const downloadVideo = () => {
    if (videoURL) {
      const a = document.createElement('a');
      document.body.appendChild(a);
      a.style.display = 'none';
      a.href = videoURL;
      a.download = `screen-recording-${new Date().toISOString()}.webm`;
      a.click();
      window.URL.revokeObjectURL(videoURL);
      toast({
        title: "Download Started",
        description: "Your video file is downloading.",
      });
    }
  };

  return (
    <div className="w-full max-w-2xl bg-card border rounded-lg shadow-sm overflow-hidden">
      <div className="p-6 space-y-4">
        <div className="relative aspect-video bg-black rounded-md overflow-hidden">
          <video 
            ref={videoRef} 
            autoPlay 
            muted 
            controls={!recording && videoURL !== null}
            className="w-full h-full object-contain"
          >
            Your browser does not support the video element.
          </video>
          
          {!recording && !videoURL && (
            <div className="absolute inset-0 flex items-center justify-center">
              <Monitor className="h-16 w-16 text-muted-foreground opacity-50" />
            </div>
          )}
        </div>
        
        <div className="flex justify-center gap-4">
          {!recording ? (
            <Button 
              onClick={startRecording} 
              disabled={recording}
              className="bg-primary"
            >
              <Monitor className="mr-2 h-4 w-4" />
              Start Recording
            </Button>
          ) : (
            <Button 
              onClick={stopRecording} 
              variant="destructive"
            >
              <Square className="mr-2 h-4 w-4" />
              Stop Recording
            </Button>
          )}
          
          {videoURL && (
            <Button 
              onClick={downloadVideo}
              variant="outline"
            >
              <Download className="mr-2 h-4 w-4" />
              Download
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ScreenCapture;
