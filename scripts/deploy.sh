#!/bin/bash

# Build frontend
echo "Building frontend..."
cd frontend
npm run build

# Deploy to Vercel
echo "Deploying to Vercel..."
vercel --prod

# Start backend (for local testing)
echo "Starting backend..."
cd ../backend
uvicorn app.main:app --reload
