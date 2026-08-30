import os
from flask import Flask

app = Flask(__name__)

@app.route('/')
def home():
    return "¡Servidor web de Render activo para tu bot! 🚀", 200

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 4000))
    # Render necesita que el host sea 0.0.0.0 para que sea accesible
    app.run(host="0.0.0.0", port=port)