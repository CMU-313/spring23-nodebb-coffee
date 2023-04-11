from flask import Flask, request
import json
import predict

app = Flask(__name__)

@app.route('/')
def make_prediction():
    # fetch student data
    student = request.args.get('studentData')
    print(json.loads(student))
    return predict.predict(student)['good_employee']

