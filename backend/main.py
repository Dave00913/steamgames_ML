from flask import Flask, jsonify, make_response, redirect, url_for, render_template, request
from init_db import get_user_games, get_games, purchase_game
from reco import create_reco
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:michalyael@localhost/ml'

@app.route('/<gameTitle>', methods=['GET', 'POST'])
def home(gameTitle):
  if request.method == 'GET':
    result = get_games()

    return result

  elif request.method == 'POST':

    purchase_game(gameTitle)

    result = get_user_games()

    game_list = []

    # convert to unnested list
    for i in range(len(result)):
      game_list.append(result[i][0])

    output = create_reco(game_list)
    game_dict = output['game']
    game_list = list(game_dict.values())

    return game_list

if __name__ == '__main__':
  app.run(debug=True)