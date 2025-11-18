#!/bin/bash
# Simple script to serve the portfolio locally

echo "Starting local server..."
echo "Open http://localhost:8000 in your browser"
echo "Press Ctrl+C to stop the server"
echo ""

# Try Python 3, then Python 2, then Node.js, then PHP
if command -v python3 &> /dev/null; then
    python3 -m http.server 8000
elif command -v python &> /dev/null; then
    python -m SimpleHTTPServer 8000
elif command -v http-server &> /dev/null; then
    http-server -p 8000
elif command -v php &> /dev/null; then
    php -S localhost:8000
else
    echo "Error: No suitable server found."
    echo "Please install Python, Node.js (with http-server), or PHP."
    exit 1
fi
