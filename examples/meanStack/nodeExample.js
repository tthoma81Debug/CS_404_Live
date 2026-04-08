// rawg_example.js
// Run with: node rawg_example.js

const fs = require('fs');
const path = require('path');

const API_KEY = 'cccd40ed93894c13b0b72f536347d005'; // <-- put your RAWG key here

// Example: search for games with "zelda" in the title
const QUERY = 'zelda';

async function main() {
  const url = new URL('https://api.rawg.io/api/games');
  //const url = new URL('https://api.rawg.io/api/games/53205/screenshots');
  url.searchParams.set('key', API_KEY);
  url.searchParams.set('search', QUERY);
  url.searchParams.set('page_size', '5'); // just grab a few

  // 1–2. Send request and get JSON response
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`RAWG request failed: ${res.status} ${res.statusText}`);
  }

  const data = await res.json(); // 3. Parse JSON

  // 4. Pick out part of the response to save
  //    Here we keep only id, name, released, and rating for each game.
  
  const simplified = (data.results || []).map(game => ({
    id: game.id,
    name: game.name,
    released: game.released,
    rating: game.rating,
  }));
  

  //full version
  /*
    const simplified = (data.results).map(game => ({
    id: game.count,
    next: game.next,
    previous: game.previous,
    results: (data.results || []).map(s => ({
      id: s.id,
      image: s.image,
      width: s.width,
      height: s.height,
      is_deleted: s.is_deleted,
    }))
  }));
*/
  const outPath = path.join(__dirname, 'rawg_games.json');

  fs.writeFileSync(outPath, JSON.stringify(simplified, null, 2), 'utf8');

  console.log(`Saved ${simplified.length} games to ${outPath}`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});