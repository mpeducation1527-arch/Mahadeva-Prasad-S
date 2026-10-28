#!/usr/bin/env python3
"""
MAHADEVA PRASAD S — LOCAL DEV SERVER
Personal Brand: "Technology with Purpose"
A clean, lightweight HTTP server for Mahadeva Prasad S's Portfolio.
"""

import http.server
import socketserver
import os
import sys
import webbrowser

PORT = 8000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class PurposePortfolioHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def end_headers(self):
        # Enable no-cache during development
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        self.send_header('Access-Control-Allow-Origin', '*')
        super().end_headers()

    def log_message(self, format, *args):
        # Clean terminal logging
        sys.stdout.write(f"[{self.log_date_time_string()}] {args[0]} -> {args[1]}\n")

def run():
    os.chdir(DIRECTORY)
    handler = PurposePortfolioHandler

    # Allow port reuse
    socketserver.TCPServer.allow_reuse_address = True

    try:
        with socketserver.TCPServer(("", PORT), handler) as httpd:
            url = f"http://localhost:{PORT}"
            print("=" * 65)
            print("  MAHADEVA PRASAD S — PORTFOLIO LOCAL SERVER")
            print("  Concept: 'Technology with Purpose'")
            print(f"  Serving directory: {DIRECTORY}")
            print(f"  Local URL: {url}")
            print("=" * 65)
            print("  Press Ctrl+C to terminate the server.\n")

            if "--open" in sys.argv:
                webbrowser.open(url)

            httpd.serve_forever()
    except OSError as e:
        if e.errno == 98 or "address already in use" in str(e).lower() or "winerror 10048" in str(e).lower():
            alt_port = PORT + 1
            print(f"Port {PORT} in use, trying {alt_port}...")
            with socketserver.TCPServer(("", alt_port), handler) as httpd:
                url = f"http://localhost:{alt_port}"
                print(f"  Local URL: {url}")
                httpd.serve_forever()
        else:
            raise

if __name__ == "__main__":
    run()
