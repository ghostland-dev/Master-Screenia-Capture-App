
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AudioCapture from "@/components/AudioCapture";
import { Mic, AudioWaveform, Download } from "lucide-react";

const AudioRecorder = () => {
  return (
    <div className="min-h-screen bg-background antialiased">
      <Navbar />
      
      <main className="container max-w-7xl mx-auto px-4 md:px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Audio <span className="text-gradient">Recorder</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Record crystal-clear audio directly from your browser. Perfect for podcasts, 
            voice memos, and music recordings.
          </p>
        </div>
        
        <div className="flex justify-center">
          <AudioCapture />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="feature-card">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Mic className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-medium mb-2">High-Quality Audio</h3>
            <p className="text-muted-foreground">
              Capture crystal-clear audio with adjustable quality settings for any purpose.
            </p>
          </div>
          
          <div className="feature-card">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <AudioWaveform className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-medium mb-2">Live Waveform</h3>
            <p className="text-muted-foreground">
              Monitor your audio levels in real-time with our live waveform visualization.
            </p>
          </div>
          
          <div className="feature-card">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Download className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-medium mb-2">Multiple Formats</h3>
            <p className="text-muted-foreground">
              Download your recordings in MP3, WAV, or OGG formats for any use case.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AudioRecorder;
