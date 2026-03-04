#!/usr/bin/env bash
set -e

# Change to script directory (repository root)
cd "$(dirname "$0")"

# Detect package manager
detect_pm() {
  if command -v pnpm &>/dev/null && [ -f "pnpm-lock.yaml" ]; then
    echo "pnpm"
  elif command -v yarn &>/dev/null && [ -f "yarn.lock" ]; then
    echo "yarn"
  else
    echo "npm"
  fi
}

PM=$(detect_pm)
echo "Using package manager: $PM"

# Install dependencies only if node_modules doesn't exist or is empty
if [ ! -d "node_modules" ] || [ -z "$(ls -A node_modules 2>/dev/null)" ]; then
  echo "Installing dependencies..."
  case $PM in
    pnpm) pnpm install ;;
    yarn) yarn install ;;
    *)   npm install ;;
  esac
  echo "Dependencies installed."
else
  echo "Dependencies already installed, skipping install."
fi

# Build the project
echo "Building..."
case $PM in
  pnpm) pnpm run build ;;
  yarn) yarn build ;;
  *)   npm run build ;;
esac
echo "Build complete."

# Serve the built site locally
echo "Serving at http://localhost:4173 (Ctrl+C to stop)"
case $PM in
  pnpm) pnpm exec vite preview ;;
  yarn) yarn exec vite preview ;;
  *)   npx vite preview ;;
esac
