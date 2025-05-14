import { createContext, useState } from 'react'

export const VideoContext = createContext()

export function VideoProvider({ children }) {
  const [processedVideo, setProcessedVideo] = useState(null)

  return (
    <VideoContext.Provider value={{ processedVideo, setProcessedVideo }}>
      {children}
    </VideoContext.Provider>
  )
}
