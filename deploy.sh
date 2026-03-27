#!/bin/bash
# Wearable Apparels — VPS Deployment Script
# Run this on the VPS after SSH-ing in

set -e

echo "🚀 Deploying Wearable Apparels..."

# Pull latest code
git pull origin main

# Build and restart
docker compose -f docker-compose.vps.yml build --no-cache
docker compose -f docker-compose.vps.yml up -d

# Run database migrations
docker compose -f docker-compose.vps.yml exec app npx prisma db push

echo "✅ Deployment complete! Live at https://wearableapparels.com"
