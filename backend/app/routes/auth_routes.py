from fastapi import APIRouter, Depends, HTTPException
from fastapi.security import OAuth2PasswordBearer

router = APIRouter()
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

@router.post("/token")
async def login(username: str, password: str):
    # Implement your auth logic
    return {"access_token": "fake-token"}

@router.get("/protected")
async def protected_route(token: str = Depends(oauth2_scheme)):
    return {"message": "This is protected data"}
