
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScreenCapture from "@/components/ScreenCapture";

const ScreenRecorder = () => {
  return (
    <div className="min-h-screen bg-background antialiased">
      <Navbar />
      
      <main className="container max-w-7xl mx-auto px-4 md:px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Screen <span className="text-gradient">Recorder</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Capture your screen, window or a specific area with our easy-to-use screen recorder.
            Add audio from your microphone and create professional recordings.
          </p>
        </div>
        
        <div className="flex justify-center">
          <ScreenCapture />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="feature-card">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Monitor className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-medium mb-2">Flexible Capture</h3>
            <p className="text-muted-foreground">
              Record your entire screen, a specific window, or select a custom area to capture.
            </p>
          </div>
          
          <div className="feature-card">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Mic className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-medium mb-2">Audio Recording</h3>
            <p className="text-muted-foreground">
              Narrate your recordings with microphone audio for professional tutorials and presentations.
            </p>
          </div>
          
          <div className="feature-card">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Download className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-medium mb-2">Instant Download</h3>
            <p className="text-muted-foreground">
              Download your recordings immediately in high-quality format ready to share.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ScreenRecorder;
