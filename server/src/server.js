const http = require('http');
const mongoose = require('mongoose');
const app = require('./app');
const { loadPlanetsData } = require('./models/planets.model');
require('dotenv').config();

const server = http.createServer(app);

const PORT = process.env.PORT || 8000;
const MONGO_URL = process.env.DB_URL;

// mongoose.connection.once('open',()=>{
//   console.log('MongoDB connected successfully')
// })

// mongoose.connection.on('error', (err)=>{
//   console.error(err)
// })

async function startServer() {
  mongoose.connect(MONGO_URL, { useNewUrlParser: true }, (err) => {
    if (err) {
      console.log('MongoDB connection failed');
    } else {
      console.log('MongoDB connected successfully');
    }
  });
  await loadPlanetsData();

  server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
