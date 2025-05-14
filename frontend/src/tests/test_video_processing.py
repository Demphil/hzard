import unittest
from app.models.ai_processor import VideoProcessor

class TestVideoProcessing(unittest.TestCase):
    def test_transcribe(self):
        # Test audio transcription
        text = VideoProcessor.transcribe_audio("test_audio.mp3")
        self.assertIsInstance(text, str)
