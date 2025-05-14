from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
import os

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/api/process-video")
async def process_video(file: UploadFile = File(...)):
    # Save and process video
    return {"status": "success", "url": "processed_video_url"}
