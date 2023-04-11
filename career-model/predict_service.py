from flask import Flask, request
import json
import predict

app = Flask(__name__)

@app.route('/')
@app.route('/ask')
def make_prediction():
    # fetch student data
    student = request.args.get('studentData')
    return predict.predict(json.loads(student))

if __name__ == '__main__':
    app.run()
