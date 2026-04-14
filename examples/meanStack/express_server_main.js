// rawg_server.js
// Run with: node rawg_server.js
// Then open: http://localhost:7000/rawg_client_post.html

const fs = require('fs');
const path = require('path');
const express = require('express');

const API_KEY = 'cccd40ed93894c13b0b72f536347d005';

// If you're on Node < 18, uncomment this and `npm install node-fetch`:
// const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

const app = express();
const PORT = process.env.PORT || 7000;

// Parse POST bodies (form + JSON)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files (put your HTML file in ./public)
app.use(express.static(path.join(__dirname, 'public')));

app.post('/rawg', async (req, res) => {
  // Data from client (POST body)
  const {
    action = 'search',  // "search" or "screenshots"
    gameId = '',
    query = '',
    page_size = '6',
  } = req.body;

  try {
    let url;

    if (action === 'search') {
      // Use /games?search=...
      url = new URL('https://api.rawg.io/api/games');
      if (query) {
        url.searchParams.set('search', query);
      }
    } else if (action === 'screenshots') {
      // Use /games/{id}/screenshots
      if (!gameId) {
        return res.status(400).json({ error: 'gameId is required for screenshots', type: 'screenshots' });
      }
      url = new URL(`https://api.rawg.io/api/games/${gameId}/screenshots`);
    } else {
      return res.status(400).json({ error: `Unknown action: ${action}` });
    }

    // Common params
    url.searchParams.set('key', API_KEY);
    url.searchParams.set('page_size', String(page_size || '6'));

    // Call RAWG
    const apiRes = await fetch(url);
    if (!apiRes.ok) {
      throw new Error(`RAWG request failed: ${apiRes.status} ${apiRes.statusText}`);
    }

    const data = await apiRes.json();

    // Discard everything we don't care about; package only what the UI needs
    let simplified;

    if (action === 'search') {
      // RAWG /games search
      simplified = {
        type: 'search',
        query,
        page_size: Number(page_size) || 6,
        count: data.count ?? 0,
        next: data.next,
        previous: data.previous,
        results: (data.results || []).map(game => ({
          id: game.id,
          name: game.name,
          released: game.released,
          rating: game.rating,
          // RAWG usually uses background_image for covers in /games
          image: game.background_image || null,
        })),
      };
    } else {
      // RAWG /games/{id}/screenshots
      simplified = {
        type: 'screenshots',
        gameId,
        page_size: Number(page_size) || 6,
        count: data.count ?? 0,
        next: data.next,
        previous: data.previous,
        results: (data.results || []).map(shot => ({
          id: shot.id,
          image: shot.image,
          width: shot.width,
          height: shot.height,
          is_deleted: shot.is_deleted,
        })),
      };
    }

    // Optional: save the last response for debugging
    const outPath = path.join(__dirname, 'rawg_last_response.json');
    fs.writeFileSync(outPath, JSON.stringify(simplified, null, 2), 'utf8');

    // Send trimmed data back to the client
    res.json(simplified);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: 'Internal server error',
      message: err.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`RAWG Express server listening on http://localhost:${PORT}`);
});