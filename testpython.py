from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/python', methods=['POST'])
def pythonservice():
  data = request.json
  print('Donnees recues de Nodejs : ', data)
  
# Simuler un traitement 

  result = {
    "message": "Donnees traitees par python",
    "input": data
  }

  return jsonify(result)


if __name__ == '__main__':
  app.run(port = 5000)