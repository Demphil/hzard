import os
from datetime import datetime
import boto3  # For AWS S3 (optional)

class StorageManager:
    @staticmethod
    def save_upload(file: bytes, extension: str = "mp4") -> str:
        """Save uploaded file to local storage"""
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        filename = f"upload_{timestamp}.{extension}"
        with open(filename, "wb") as f:
            f.write(file)
        return filename

    @staticmethod
    def upload_to_cloud(filepath: str) -> str:
        """Upload to cloud storage (AWS S3 example)"""
        s3 = boto3.client('s3')
        s3.upload_file(filepath, 'your-bucket', filepath)
        return f"https://your-bucket.s3.amazonaws.com/{filepath}"
