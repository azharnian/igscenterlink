from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route("/hello")
def hello():
    return jsonify({"data" : "Hello, world"}), 200

if __name__ == "__main__":
    app.run(debug=True)