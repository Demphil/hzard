import cv2
from moviepy.editor import VideoFileClip

class VideoEditor:
    @staticmethod
    def trim_video(input_path: str, start: float, end: float) -> str:
        """Trim video between start and end times (in seconds)"""
        clip = VideoFileClip(input_path)
        trimmed = clip.subclip(start, end)
        output_path = f"trimmed_{input_path}"
        trimmed.write_videofile(output_path)
        return output_path
