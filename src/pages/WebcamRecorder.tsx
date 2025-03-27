
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WebcamCapture from "@/components/WebcamCapture";
import { Camera, Video, Download } from "lucide-react";

const WebcamRecorder = () => {
  return (
    <div className="min-h-screen bg-background antialiased">
      <Navbar />
      
      <main className="container max-w-7xl mx-auto px-4 md:px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Webcam <span className="text-gradient">Recorder</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Record high-definition video using your webcam. Perfect for vlogs, tutorials, 
            and video messages.
          </p>
        </div>
        
        <div className="flex justify-center">
          <WebcamCapture />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="feature-card">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Camera className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-medium mb-2">HD Webcam Recording</h3>
            <p className="text-muted-foreground">
              Record high-definition video directly from your webcam with adjustable quality.
            </p>
          </div>
          
          <div className="feature-card">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Video className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-medium mb-2">Audio + Video</h3>
            <p className="text-muted-foreground">
              Capture both video and audio simultaneously for complete recordings.
            </p>
          </div>
          
          <div className="feature-card">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Download className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-medium mb-2">Instant Sharing</h3>
            <p className="text-muted-foreground">
              Download and share your webcam recordings instantly in various formats.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default WebcamRecorder;
