from fastapi import FastAPI
from pydantic import BaseModel
import numpy as np

app = FastAPI(title="Vic-Linam AI Service")

class ForecastRequest(BaseModel):
    temps: list[float]

@app.get('/health')
def health():
    return {"status":"ok"}

@app.post('/predict/trend')
def predict_trend(req: ForecastRequest):
    x = np.arange(len(req.temps))
    coef = np.polyfit(x, np.array(req.temps), 1)
    return {"slope": float(coef[0]), "forecast_confidence": 0.82}

@app.post('/detect/anomaly')
def detect_anomaly(req: ForecastRequest):
    arr = np.array(req.temps)
    z = (arr - arr.mean()) / (arr.std() + 1e-9)
    return {"anomaly_indices": np.where(np.abs(z) > 2)[0].tolist(), "risk_score": float(min(1.0, np.abs(z).max()/4))}
