import psycopg2

def get_games():
  try:
    db = psycopg2.connect("dbname=ml user=postgres password=dij13")
    cur = db.cursor()
    # Execute a query to get unique values from the 'game' column
    cur.execute('SELECT DISTINCT game FROM public."steam-200k"')
    # Fetch all unique games
    unique_games = cur.fetchall()

    return unique_games

  except Exception as e:
    print(f"Error: {e}")

  finally:
    # Close the cursor and connection in the finally block
    if cur:
      cur.close()
    if db:
      db.close()

def get_user_games():
  db = psycopg2.connect("dbname=ml user=postgres password=dij13")
  cur = db.cursor()
  cur.execute('SELECT * FROM public."games"')
  results = cur.fetchall()
  cur.close()
  db.close()
  return results

def purchase_game(title):
  db = psycopg2.connect("dbname=ml user=postgres password=dij13")
  cur = db.cursor()
  cur.execute(f"INSERT INTO public.games(title) VALUES (%s);", (title,))
  db.commit()
  cur.close()
  db.close()
  return f"Successfully purchased {title}!"

__all__ = ["get_games", "purchase_games"]

