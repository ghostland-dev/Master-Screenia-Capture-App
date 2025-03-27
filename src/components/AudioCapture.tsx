
import React, { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Mic, Square, Download } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

const AudioCapture = () => {
  const [recording, setRecording] = useState(false);
  const [audioURL, setAudioURL] = useState<string | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  const startRecording = async () => {
    try {
      audioChunksRef.current = [];
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      
      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };
      
      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        const audioUrl = URL.createObjectURL(audioBlob);
        setAudioURL(audioUrl);
      };
      
      mediaRecorder.start();
      setRecording(true);
      toast({
        title: "Recording Started",
        description: "Your microphone is now recording.",
      });
    } catch (error) {
      console.error('Error starting audio recording:', error);
      toast({
        variant: "destructive",
        title: "Recording Error",
        description: "Unable to access microphone. Please check permissions.",
      });
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && recording) {
      mediaRecorderRef.current.stop();
      // Stop all audio tracks
      mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop());
      setRecording(false);
      toast({
        title: "Recording Completed",
        description: "Your audio is ready to download.",
      });
    }
  };

  const downloadAudio = () => {
    if (audioURL) {
      const a = document.createElement('a');
      document.body.appendChild(a);
      a.style.display = 'none';
      a.href = audioURL;
      a.download = `audio-recording-${new Date().toISOString()}.webm`;
      a.click();
      window.URL.revokeObjectURL(audioURL);
      toast({
        title: "Download Started",
        description: "Your audio file is downloading.",
      });
    }
  };

  return (
    <div className="w-full max-w-xl bg-card border rounded-lg shadow-sm overflow-hidden">
      <div className="p-6 space-y-4">
        <div className="flex justify-center items-center h-40 bg-muted rounded-md relative">
          {audioURL ? (
            <audio controls className="w-full">
              <source src={audioURL} type="audio/webm" />
              Your browser does not support the audio element.
            </audio>
          ) : (
            <div className="text-center p-4">
              <Mic className={`h-12 w-12 mx-auto mb-2 ${recording ? 'text-primary animate-pulse' : 'text-muted-foreground'}`} />
              <p className="text-muted-foreground">
                {recording 
                  ? "Recording in progress..." 
                  : "Click Start Recording to begin"}
              </p>
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
              <Mic className="mr-2 h-4 w-4" />
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
          
          {audioURL && (
            <Button 
              onClick={downloadAudio}
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

export default AudioCapture;
