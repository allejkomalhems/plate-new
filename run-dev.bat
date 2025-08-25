@echo off
echo Starting Next.js development server with increased memory allocation...
set NODE_OPTIONS=--max-old-space-size=4096
pnpm dev
