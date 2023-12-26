
async function getAllGames() {
  const response = await fetch('http://127.0.0.1:5000/');
  const result = await response.json();
  return result;
}

export { getAllGames };