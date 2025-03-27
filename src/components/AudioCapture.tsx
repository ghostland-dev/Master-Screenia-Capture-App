
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
        title: "Enregistrement démarré",
        description: "Votre microphone est en train d'enregistrer.",
      });
    } catch (error) {
      console.error('Error starting audio recording:', error);
      toast({
        variant: "destructive",
        title: "Erreur d'enregistrement",
        description: "Impossible d'accéder au microphone. Veuillez vérifier les permissions.",
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
        title: "Enregistrement terminé",
        description: "Votre audio est prêt à être téléchargé.",
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
        title: "Téléchargement démarré",
        description: "Votre fichier audio est en cours de téléchargement.",
      });
    }
  };

  return (
    <div className="w-full max-w-xl bg-card border rounded-lg shadow-sm overflow-hidden">
      <div className="p-6 space-y-4">
        <div className="flex justify-center items-center h-40 bg-muted rounded-md">
          {audioURL ? (
            <audio controls className="w-full">
              <source src={audioURL} type="audio/webm" />
              Your browser does not support the audio element.
            </audio>
          ) : (
            <div className="text-center p-4">
              <Mic className="h-12 w-12 mx-auto text-muted-foreground mb-2" />
              <p className="text-muted-foreground">
                {recording 
                  ? "Enregistrement en cours..." 
                  : "Cliquez sur Démarrer pour commencer l'enregistrement"}
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
          
          {audioURL && (
            <Button 
              onClick={downloadAudio}
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

export default AudioCapture;
