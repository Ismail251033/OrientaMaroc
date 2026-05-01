import express    from 'express';
import mongoose   from 'mongoose';
import cors       from 'cors';
import helmet     from 'helmet';
import dotenv     from 'dotenv';
import path       from 'path';
import { fileURLToPath } from 'url';
import schoolsRouter from './routes/schools.js';
import resultsRouter from './routes/results.js';

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app  = express();
const PORT = process.env.PORT || 5000;

// ── Middleware ──
app.use(helmet({ contentSecurityPolicy: false }));
app.use(cors());
app.use(express.json({ limit: '5mb' }));

// ── Serve static frontend ──
app.use(express.static(path.join(__dirname, '..')));

// ── API Routes ──
app.use('/api/schools',  schoolsRouter);
app.use('/api/results',  resultsRouter);

// ── Health ──
app.get('/api/health', (_, res) => res.json({ status: 'ok', ts: new Date() }));

// ── Fallback HTML ──
app.get('*', (_, res) => res.sendFile(path.join(__dirname, '..', 'index.html')));

// ── Error handler ──
app.use((err, req, res, next) => {
  console.error('[ERR]', err.message);
  res.status(err.status || 500).json({ success: false, message: err.message });
});

// ── Connect DB & Start ──
const MONGO_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/orientamaroc';
mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB connecté');
    app.listen(PORT, () => console.log(`🚀 Serveur : http://localhost:${PORT}`));
  })
  .catch(err => { console.error('❌ DB erreur:', err); process.exit(1); });