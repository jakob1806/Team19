#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Kleiner Vorschau-Server für die lokale Entwicklung: python3 serve.py [Port]"""

import functools
import os
import sys
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer

ROOT = os.path.dirname(os.path.abspath(__file__))
PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8719


class Handler(SimpleHTTPRequestHandler):
    extensions_map = dict(SimpleHTTPRequestHandler.extensions_map)
    extensions_map.update({
        ".webp": "image/webp",
        ".webmanifest": "application/manifest+json",
    })

    def end_headers(self):
        # Während der Entwicklung nicht cachen
        self.send_header("Cache-Control", "no-store")
        SimpleHTTPRequestHandler.end_headers(self)

    def log_message(self, fmt, *args):
        sys.stderr.write("%s\n" % (fmt % args))


if __name__ == "__main__":
    handler = functools.partial(Handler, directory=ROOT)
    server = ThreadingHTTPServer(("127.0.0.1", PORT), handler)
    print("Team19 Media läuft auf http://localhost:%d" % PORT)
    server.serve_forever()
