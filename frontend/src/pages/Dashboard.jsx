import React from 'react';
import VideoUploader from '../components/VideoUploader';
import EffectsPanel from '../components/EffectsPanel';

export default function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Video Editor</h1>
      <VideoUploader />
      <EffectsPanel />
    </div>
  );
}
