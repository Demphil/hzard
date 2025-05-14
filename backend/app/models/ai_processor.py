import whisper
from rembg import remove
import cv2
import numpy as np

class VideoProcessor:
    @staticmethod
    def transcribe_audio(audio_path):
        model = whisper.load_model("base")
        result = model.transcribe(audio_path)
        return result["text"]

    @staticmethod
    def remove_background(frame):
        output = remove(frame)
        return output
