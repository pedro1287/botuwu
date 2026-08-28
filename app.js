# =========================================================
# ⚙️ SERVIDOR FLASK REQUERIDO PARA RENDER (NO BORRAR)
# =========================================================
import threading
from flask import Flask

app = Flask(name)

@app.route('/')
def home():
    return "¡Bot de Telegram (PyObigram) activo y ejecutándose en Render! 🚀"

def run_flask():
    # Render asigna automáticamente la variable de entorno PORT
    port = int(os.environ.get("PORT", 4000))
    app.run(host="0.0.0.0", port=port)
# =========================================================
# =========================================================
# 🚀 ARRANQUE DEL BOT Y SERVIDOR
# =========================================================
if name == 'main':
    # 1. Iniciar el servidor web de Flask en segundo plano (para que Render no mate el proceso)
    server_thread = threading.Thread(target=run_flask)
    server_thread.daemon = True
    server_thread.start()

    # 2. Inicializar y correr tu bot ObigramClient
    # Se recomienda obtener el Token desde las Variables de Entorno de Render
    bot_token = os.getenv("BOT_TOKEN", "TU_TOKEN_AQUI_SI_NO_USAS_ENV")
    
    print("Iniciando Bot en Render...")
    bot = ObigramClient(bot_token)
    
    # Aquí va la función para arrancar el polling de pyobigram
    # (Asegúrate de que coincida con cómo inicia tu script original, ej: bot.run() o bot.run_as_thread())
    bot.run()