# Static server tanpa dependensi: python serve.py  ->  http://localhost:3000
import http.server, socketserver, os
os.chdir(os.path.dirname(os.path.abspath(__file__)))
class H(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control','no-store'); super().end_headers()
socketserver.TCPServer.allow_reuse_address=True
with socketserver.TCPServer(('0.0.0.0',3000),H) as s:
    print('Buka http://localhost:3000  (Ctrl+C untuk berhenti)')
    s.serve_forever()
