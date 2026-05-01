import mongoose from 'mongoose';

const resultSchema = new mongoose.Schema({
  sessionId: { type: String, required: true, unique: true, index: true },
  profile: {
    grades:      mongoose.Schema.Types.Mixed,
    preferences: [String],
    objectives:  [String],
  },
  results: {
    topFilieres: [mongoose.Schema.Types.Mixed],
    topMetiers:  [mongoose.Schema.Types.Mixed],
    topSchools:  [mongoose.Schema.Types.Mixed],
    averageNote: Number,
  },
  createdAt: { type: Date, default: Date.now, expires: '30d' }, // TTL 30 jours
});

export default mongoose.model('Result', resultSchema);