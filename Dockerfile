# Stage 1: Build the React frontend
FROM node:20-alpine AS frontend-builder
WORKDIR /app
COPY frontend/package*.json ./
RUN npm ci --prefer-offline --no-audit --no-fund
COPY frontend/ .
RUN npm run build

# Stage 2: Build the FastAPI backend and combine
FROM python:3.12-slim
WORKDIR /app

# Prevent Python from writing pyc files to disc & buffering stdout/stderr
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1
ENV PORT 8080

# Install system dependencies if any
RUN apk add --no-cache curl || true

# Copy and install backend requirements
COPY backend/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy backend application
COPY backend/ .

# Copy built frontend assets into the backend static folder
COPY --from=frontend-builder /app/dist ./static

# Expose port 8080 (standard for Fly.io)
EXPOSE 8080

# Run uvicorn on port 8080
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8080"]
