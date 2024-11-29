const express = require('express');
const logger = require('morgan');
const path = require('path');
const server = express();

// Middleware
server.use(express.urlencoded({ extended: true }));
server.use(logger('dev'));

// Route to generate a random galactic number
server.get('/generate_random_number', (req, res) => {
  res.send(`Your galactic number is: ${Math.floor(Math.random() * 1000) + 1}`);
});

// Galactic Voyage route handler with styled response
server.post('/ITC505/lab-7/index.html', (req, res) => {
  const { alienSpecies, cosmicArtifact, braveVerb, cosmicAdverb, galacticRegion } = req.body;

  // Check if all fields are filled
  if (!alienSpecies || !cosmicArtifact || !braveVerb || !cosmicAdverb || !galacticRegion) {
    res.send(`
      <!DOCTYPE html>
      <html lang="en">

      <head>
          <meta charset="UTF-8">
          <title>Mission Error</title>
          <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap" rel="stylesheet">
          <style>
              body {
                  font-family: 'Orbitron', sans-serif;
                  background-image: url('https://ideogram.ai/assets/image/lossless/response/space-galaxy-scene');
                  background-size: cover;
                  background-position: center;
                  background-attachment: fixed;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  height: 100vh;
                  margin: 0;
                  text-align: center;
                  color: #c9d1d9;
              }
              .error-container {
                  background: rgba(0, 0, 0, 0.85);
                  border-radius: 15px;
                  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.6);
                  padding: 2rem;
                  max-width: 500px;
              }
              h1 {
                  color: #1e90ff;
              }
              a {
                  display: inline-block;
                  background-color: #1e90ff;
                  color: white;
                  text-decoration: none;
                  padding: 10px 20px;
                  border-radius: 8px;
                  margin-top: 1rem;
                  transition: background-color 0.3s ease;
              }
              a:hover {
                  background-color: #ff4500;
              }
          </style>
      </head>
      <body>
          <div class="error-container">
              <h1>🚀 Mission Incomplete!</h1>
              <p>Please complete all mission details before launch!</p>
              <a href="/ITC505/lab-7/index.html">Return to Mission Console</a>
          </div>
      </body>
      </html>
    `);
    return;
  }

  // Create the styled galactic adventure response
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Your Galactic Voyage</title>
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap" rel="stylesheet">
        <style>
            body {
                font-family: 'Orbitron', sans-serif;
                background-image: url('https://ideogram.ai/assets/image/lossless/response/space-galaxy-scene');
                background-size: cover;
                background-position: center;
                background-attachment: fixed;
                display: flex;
                justify-content: center;
                align-items: center;
                min-height: 100vh;
                margin: 0;
                padding: 1rem;
                color: #c9d1d9;
            }
            .story-container {
                background: rgba(0, 0, 0, 0.85);
                border-radius: 15px;
                box-shadow: 0 10px 25px rgba(0, 0, 0, 0.6);
                padding: 2rem;
                max-width: 600px;
                text-align: center;
                animation: fadeIn 0.5s ease-out;
            }
            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
            }
            h1 {
                color: #1e90ff;
                margin-bottom: 1rem;
            }
            .story-text {
                line-height: 1.6;
            }
            .highlighted {
                color: #ff4500;
                font-weight: bold;
            }
            .action-link {
                display: inline-block;
                background-color: #1e90ff;
                color: white;
                text-decoration: none;
                padding: 10px 20px;
                border-radius: 8px;
                margin-top: 1rem;
                transition: background-color 0.3s ease;
            }
            .action-link:hover {
                background-color: #ff4500;
            }
        </style>
    </head>
    <body>
        <div class="story-container">
            <h1>🚀 Your Galactic Voyage Begins!</h1>
            <div class="story-text">
                <p>
                    In the far reaches of the <span class="highlighted">${galacticRegion}</span>, a coalition of 
                    <span class="highlighted">${alienSpecies}</span> discovered the legendary 
                    <span class="highlighted">${cosmicArtifact}</span>. 
                    Their mission: to <span class="highlighted">${braveVerb}</span> it 
                    <span class="highlighted">${cosmicAdverb}</span>. 
                    This journey marked the dawn of an intergalactic legend that will echo through the cosmos!
                </p>
            </div>
            <a href="/ITC505/lab-7/index.html" class="action-link">Start Another Space Adventure 🌌</a>
        </div>
    </body>
    </html>
  `);
});

// Static files
const publicServedFilesPath = path.join(__dirname, 'public');
server.use(express.static(publicServedFilesPath));

// Port Configuration
let port = 80;
if (process.argv[2] === 'local') {
  port = 8080;
}

server.listen(port, () => console.log('Server running on port', port));
