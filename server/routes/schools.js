import { Router } from 'express';
import mongoose   from 'mongoose';

const router = Router();

// Schema inline (les données sont aussi dans data.js côté frontend)
const schoolSchema = new mongoose.Schema({
  id: String, nom: String, ville: String, region: String,
  type: String, emoji: String, filieres: [String],
  acces: String, minAverage: Number, duree: String,
  diplomes: [String], description: String,
  lat: Number, lng: Number, tags: [String],
});
const School = mongoose.models.School || mongoose.model('School', schoolSchema);

// GET /api/schools?ville=Rabat&type=ingénieurs&lat=33.9&lng=-6.8&radius=50
router.get('/', async (req, res, next) => {
  try {
    const { ville, type, lat, lng, radius = 100 } = req.query;
    const query = {};
    if (ville) query.ville = new RegExp(ville, 'i');
    if (type)  query.type  = new RegExp(type, 'i');

    let schools = await School.find(query).lean();

    // Filtrage géographique simple côté Node si lat/lng fournis
    if (lat && lng) {
      const R = 6371;
      const lat1 = parseFloat(lat), lng1 = parseFloat(lng);
      schools = schools.filter(s => {
        if (!s.lat || !s.lng) return false;
        const dLat = (s.lat - lat1) * Math.PI / 180;
        const dLng = (s.lng - lng1) * Math.PI / 180;
        const a = Math.sin(dLat/2)**2 + Math.cos(lat1*Math.PI/180)*Math.cos(s.lat*Math.PI/180)*Math.sin(dLng/2)**2;
        const dist = R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        s.distance = Math.round(dist);
        return dist <= parseInt(radius);
      }).sort((a,b) => a.distance - b.distance);
    }

    res.json({ success: true, count: schools.length, data: schools });
  } catch (err) { next(err); }
});

export default router;