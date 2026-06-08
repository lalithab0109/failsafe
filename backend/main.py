from fastapi import FastAPI

from routes.prediction_routes import router as prediction_router
from routes.batch_prediction_routes import (
    router as batch_router
)
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="FAILSAFE API",
    description="Student Failure Prediction and Intervention System",
    version="1.0.0"
)
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(
    prediction_router,
    prefix="/api",
    tags=["Predictions"]
)
app.include_router(
    batch_router,
    prefix="/api",
    tags=["Batch Predictions"]
)


@app.get("/")
def root():
    return {
        "message": "FAILSAFE API is running"
    }