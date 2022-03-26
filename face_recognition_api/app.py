import io
import base64
import json
import numpy
from flask import Flask, jsonify, request
from flask_cors import CORS
from PIL import Image
import face_recognition

app = Flask(__name__)
CORS(app)


def get_encodings_from_b64(b64_string):
    face_bytes = bytes(b64_string, 'utf-8')
    face_bytes = face_bytes[face_bytes.find(b'/9'):]
    im = Image.open(io.BytesIO(base64.b64decode(face_bytes)))
    im = numpy.array(im)
    locs = face_recognition.face_locations(im)
    encodings = face_recognition.face_encodings(im, locs)
    return encodings


@app.route('/register', methods=['GET', 'POST'])
def register_face():
    try:
        known_faces = numpy.load('./encodings.npy')
        resp = request.get_json()
        reg_encodings = get_encodings_from_b64(resp)
        reg_encodings = numpy.array(reg_encodings)
        res = face_recognition.compare_faces(known_faces, reg_encodings)
        for result in res:
            if result:
                return jsonify({'data': 'face already registered!'})
            else:
                known_faces = numpy.append(known_faces, reg_encodings, axis=0)
        known_faces = numpy.append(known_faces, reg_encodings, axis=0)
        numpy.save('encodings.npy', known_faces)
        return jsonify({'data': 'registered!'})
    except Exception as e:
        return jsonify({'data': 'error occured!'})


@app.route('/login', methods=['GET', 'POST'])
def login_face():
    try:
        known_faces = numpy.load('./encodings.npy')
        resp = request.get_json()
        log_encodings = get_encodings_from_b64(resp)

        res = face_recognition.compare_faces(known_faces, log_encodings)
        for result in res:
            if result:
                return jsonify({'data': 'match found!'})
            else:
                return jsonify({'data': 'no match found!'})
    except Exception as e:
        return jsonify({'data': 'error occured!'})


if __name__ == '__main__':
    app.run()
