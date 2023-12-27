import numpy as np
import psycopg2
import pandas.io.sql as sqlio

import pandas as pd
# from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler

# working
def get_purchased():
  db = psycopg2.connect("dbname=ml user=postgres password=michalyael")
  cur = db.cursor()

  # gets all purchased games by the user
  cur.execute('SELECT * FROM public."games"')
  results = cur.fetchall()
  cur.close()
  db.close()
  return results

# working
def create_df(): 
  db = psycopg2.connect("dbname=ml user=postgres password=michalyael")
  cur = db.cursor()
  cur.execute('SELECT * FROM public."steam-200k"')

  # convert this query to a dataframe
  df = sqlio.read_sql_query('SELECT * FROM public."steam-200k"', db)
  cur.close()
  db.close()
  return df

# to create more implementations (needs multiple input for multiple purchases)
# def create_reco(game):
    # Preprocessing
    # df = create_df()
    # headers = ["user_id", "game", "played", "hours_played", "0"]
    # df.columns = headers
    # df = df.drop(["0"], axis=1)  # Make sure to reassign the DataFrame after dropping the column

    # # Filter the dataset based on the selected game
    # selected_game = game
    # df_selected = df[df['game'] == selected_game]

    # # Apply k-means clustering on the filtered dataset
    # kmeans = KMeans(n_clusters=3)
    # kmeans.fit(df_selected[['hours_played']])

    # # Get the cluster label for each row in the filtered dataset
    # df_selected['cluster'] = kmeans.labels_

    # # Get the mean hours played for each cluster
    # cluster_means = df_selected.groupby('cluster')['hours_played'].mean()

    # # Filter out games played by less than 100 players
    # df_filtered = df[df.groupby('game')['user_id'].transform('count') >= 100]

    # # Find the cluster with the highest mean hours played
    # best_cluster = cluster_means.idxmax()

    # # Get the top 5 games with the closest mean hours played to the best cluster mean
    # mean_of_best_cluster = cluster_means[best_cluster]
    # suggested_games = df_filtered[(df_filtered['game'] != selected_game) & 
    #                               (df_filtered['hours_played'] >= mean_of_best_cluster - 5) & 
    #                               (df_filtered['hours_played'] <= mean_of_best_cluster + 5)].sort_values('hours_played', ascending=False)['game'].unique()[:5]

    # # Convert the NumPy array to a Pandas DataFrame
    # suggested_df = pd.DataFrame(suggested_games)

    # return suggested_df.to_json()

input_games = ['The Elder Scrolls V Skyrim', 'DayZ', 'Half-Life 2', 'Counter-Strike Global Offensive']

def create_reco(games):

  # Preprocessing
  df = create_df()
  headers = ["user_id", "game", "played", "hours_played", "0"]
  df.columns = headers
  df = df.drop(["0"], axis=1)

  matrix = df.pivot_table(columns='game', index='user_id', values='hours_played')
  matrix = matrix.dropna(thresh=5, axis=0)
  matrix = df.pivot_table(columns='game', index='user_id', values='hours_played', fill_value=0)

  def center(row):
      new_row = (row - row.mean()) / (row.max() - row.min())
      return new_row

  matrix_std = matrix.apply(center)

  # Standardize the matrix_std using StandardScaler
  scaler = StandardScaler()
  df_norm = pd.DataFrame(scaler.fit_transform(matrix_std), columns=matrix_std.columns, index=matrix_std.index)

  def gameRec(input_games):
    # Get the subset of the DataFrame for the input games
    input_data = df_norm[input_games]
    
    # Calculate the mean of the input games
    input_mean = input_data.mean(axis=1)
    
    # Calculate the correlation with the mean of the input games
    corr_with_input = df_norm.corrwith(input_mean).dropna()
    
    # Create a DataFrame to show how many times each game has been played and the mean time it has been played
    gameData = df.groupby('game').agg({'hours_played': [np.size, np.mean]})
    
    # Reset the index of gameData to avoid MultiIndex issues
    gameData = gameData.reset_index()
    
    # Convert corr_with_input to a DataFrame with a single-level index
    corr_df = pd.DataFrame({'game': corr_with_input.index, 'similarity': corr_with_input.values})
    
    # Convert gameData to have a single-level index
    gameData.columns = ['game', 'size', 'mean']
    
    # Filter out any game played by fewer than 100 players.
    gameSim = gameData['size'] >= 100
    
    # Merge DataFrames
    df_result = pd.merge(gameData[gameSim], corr_df, on='game')
    
    return df_result.sort_values(['similarity'], ascending=False)[:(len(input_games) + 10)]

  # Example usage with a list of input games
  result = gameRec(games)

  return result.to_dict()

__all__ = ["create_df", "create_reco", "get_purchased"]