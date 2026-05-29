if __name__ == "__main.py__":
    port = int(os.getenv("PORT", 4000))
    app.run(host="0.0.0.0", port=port)
