from fastapi import APIRouter, UploadFile, File
from ..models.ai_processor import VideoProcessor
import os

router = APIRouter()

@router.post("/process-video")
async def process_video(file: UploadFile = File(...)):
    # Save video temporarily
    temp_path = f"temp_{file.filename}"
    with open(temp_path, "wb") as buffer:
        buffer.write(await file.read())
    
    # Process video
    processed_data = VideoProcessor.process_video(temp_path)
    
    # Cleanup
    os.remove(temp_path)
    
    return {"status": "success", "data": processed_data}
