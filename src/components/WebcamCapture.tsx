
import React, { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Camera, Square, Download } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

const WebcamCapture = () => {
  const [recording, setRecording] = useState(false);
  const [videoURL, setVideoURL] = useState<string | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const videoChunksRef = useRef<Blob[]>([]);
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const startRecording = async () => {
    try {
      videoChunksRef.current = [];
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: true,
        audio: true 
      });
      
      streamRef.current = stream;
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      
      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          videoChunksRef.current.push(event.data);
        }
      };
      
      mediaRecorder.onstop = () => {
        const videoBlob = new Blob(videoChunksRef.current, { type: 'video/webm' });
        const videoUrl = URL.createObjectURL(videoBlob);
        setVideoURL(videoUrl);
        
        if (videoRef.current) {
          videoRef.current.srcObject = null;
          videoRef.current.src = videoUrl;
        }
      };
      
      mediaRecorder.start();
      setRecording(true);
      toast({
        title: "Enregistrement démarré",
        description: "Votre webcam est en train d'enregistrer.",
      });
    } catch (error) {
      console.error('Error starting webcam recording:', error);
      toast({
        variant: "destructive",
        title: "Erreur d'enregistrement",
        description: "Impossible d'accéder à la webcam. Veuillez vérifier les permissions.",
      });
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && recording) {
      mediaRecorderRef.current.stop();
      
      // Stop all tracks
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
      
      setRecording(false);
      toast({
        title: "Enregistrement terminé",
        description: "Votre vidéo est prête à être téléchargée.",
      });
    }
  };

  const downloadVideo = () => {
    if (videoURL) {
      const a = document.createElement('a');
      document.body.appendChild(a);
      a.style.display = 'none';
      a.href = videoURL;
      a.download = `webcam-recording-${new Date().toISOString()}.webm`;
      a.click();
      window.URL.revokeObjectURL(videoURL);
      toast({
        title: "Téléchargement démarré",
        description: "Votre fichier vidéo est en cours de téléchargement.",
      });
    }
  };

  return (
    <div className="w-full max-w-2xl bg-card border rounded-lg shadow-sm overflow-hidden">
      <div className="p-6 space-y-4">
        <div className="aspect-video bg-black rounded-md overflow-hidden">
          <video 
            ref={videoRef} 
            autoPlay 
            muted={recording} 
            controls={!recording && videoURL !== null}
            className="w-full h-full object-cover"
          >
            Your browser does not support the video element.
          </video>
          
          {!recording && !videoURL && (
            <div className="absolute inset-0 flex items-center justify-center">
              <Camera className="h-16 w-16 text-muted-foreground opacity-50" />
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
              <Camera className="mr-2 h-4 w-4" />
              Démarrer
            </Button>
          ) : (
            <Button 
              onClick={stopRecording} 
              variant="destructive"
            >
              <Square className="mr-2 h-4 w-4" />
              Arrêter
            </Button>
          )}
          
          {videoURL && (
            <Button 
              onClick={downloadVideo}
              variant="outline"
            >
              <Download className="mr-2 h-4 w-4" />
              Télécharger
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default WebcamCapture;
