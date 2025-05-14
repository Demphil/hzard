import React from 'react';

export default function EffectsPanel() {
  const effects = [
    'Background Removal',
    'Add Subtitles', 
    'Face Blur'
  ];

  return (
    <div className="effects-panel">
      <h3>Video Effects</h3>
      <ul>
        {effects.map((effect, index) => (
          <li key={index}>
            <button>{effect}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
