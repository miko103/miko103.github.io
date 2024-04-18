from flask import Flask

app = Flask(__name__)

@app.route("/")
def getInfo():
    data = {
        "Name":"filedatasearchapi_test",
    }
    return data

@app.route("/search", methods=["POST"])
def findKeywordInFIle():
    