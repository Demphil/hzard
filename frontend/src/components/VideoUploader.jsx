import React, { useState } from 'react';
import { uploadVideo } from '../services/api';

export default function VideoUploader() {
  const [progress, setProgress] = useState(0);

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('video', file);

    try {
      const response = await uploadVideo(formData, (progressEvent) => {
        const percent = Math.round((progressEvent.loaded * 100) / progressEvent.total);
        setProgress(percent);
      });
      console.log('Processed video:', response.data);
    } catch (error) {
      console.error('Upload failed:', error);
    }
  };

  return (
    <div>
      <input type="file" accept="video/*" onChange={handleUpload} />
      {progress > 0 && <progress value={progress} max="100" />}
    </div>
  );
}
