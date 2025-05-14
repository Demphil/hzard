import whisper
from typing import List, Tuple

class AudioTranscriber:
    def __init__(self, model_size: str = "base"):
        self.model = whisper.load_model(model_size)

    def transcribe(self, audio_path: str) -> List[Tuple[float, float, str]]:
        """Returns list of (start, end, text) tuples"""
        result = self.model.transcribe(audio_path)
        return [(seg['start'], seg['end'], seg['text']) for seg in result['segments']]
