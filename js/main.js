/* ============================================================
   data.js — Toutes les données : filières, métiers, écoles
   ============================================================ */

// ══════════════════════════════════════════════════════
// FILIÈRES
// ══════════════════════════════════════════════════════
const FILIERES = [
  {
    id: 'scientifique',
    label: 'Filière Scientifique',
    icon: '🔬',
    color: '#6366f1',
    description: 'Mathématiques, physique, sciences naturelles. Débouchés très larges : médecine, ingénierie, informatique.',
    subjectWeights: [
      { subject: 'maths',    weight: 0.35 },
      { subject: 'physique', weight: 0.30 },
      { subject: 'svt',      weight: 0.20 },
      { subject: 'francais', weight: 0.10 },
      { subject: 'anglais',  weight: 0.05 },
    ],
    preferences: ['tech', 'bio', 'science'],
    objectives:  ['argent', 'stabilite', 'voyage'],
    debouches: ['Médecine', 'Ingénierie', 'Pharmacie', 'Informatique', 'Architecture'],
  },
  {
    id: 'economique',
    label: 'Filière Économique',
    icon: '📊',
    color: '#10b981',
    description: 'Sciences économiques, gestion, droit. Débouchés : finance, commerce, management.',
    subjectWeights: [
      { subject: 'maths',    weight: 0.25 },
      { subject: 'francais', weight: 0.20 },
      { subject: 'arabe',    weight: 0.20 },
      { subject: 'anglais',  weight: 0.20 },
      { subject: 'histoire', weight: 0.15 },
    ],
    preferences: ['business', 'social', 'langue'],
    objectives:  ['argent', 'creation', 'voyage'],
    debouches: ['Finance', 'Commerce', 'Management', 'Droit des affaires', 'Marketing'],
  },
  {
    id: 'litteraire',
    label: 'Filière Littéraire',
    icon: '📚',
    color: '#8b5cf6',
    description: 'Langues, littérature, philosophie, sciences humaines.',
    subjectWeights: [
      { subject: 'arabe',    weight: 0.30 },
      { subject: 'francais', weight: 0.30 },
      { subject: 'anglais',  weight: 0.20 },
      { subject: 'philo',    weight: 0.15 },
      { subject: 'histoire', weight: 0.05 },
    ],
    preferences: ['social', 'art', 'langue'],
    objectives:  ['passion', 'impact', 'voyage'],
    debouches: ['Journalisme', 'Enseignement', 'Droit', 'Traduction', 'Tourisme'],
  },
  {
    id: 'technologique',
    label: 'Filière Technologique',
    icon: '⚙️',
    color: '#f59e0b',
    description: 'Sciences et techniques appliquées. Génie mécanique, électrique, informatique.',
    subjectWeights: [
      { subject: 'maths',    weight: 0.30 },
      { subject: 'physique', weight: 0.35 },
      { subject: 'francais', weight: 0.15 },
      { subject: 'anglais',  weight: 0.20 },
    ],
    preferences: ['tech', 'science'],
    objectives:  ['argent', 'stabilite', 'creation'],
    debouches: ['Ingénierie industrielle', 'Maintenance', 'Électronique', 'Mécatronique'],
  },
  {
    id: 'artistique',
    label: 'Filière Artistique',
    icon: '🎨',
    color: '#ec4899',
    description: 'Arts plastiques, musique, design. Débouchés dans les arts et la création.',
    subjectWeights: [
      { subject: 'francais', weight: 0.25 },
      { subject: 'arabe',    weight: 0.20 },
      { subject: 'anglais',  weight: 0.15 },
      { subject: 'histoire', weight: 0.20 },
      { subject: 'philo',    weight: 0.20 },
    ],
    preferences: ['art', 'social'],
    objectives:  ['passion', 'creation', 'impact'],
    debouches: ['Design graphique', 'Architecture intérieure', 'Mode', 'Animation'],
  },
];

// ══════════════════════════════════════════════════════
// MÉTIERS — Base étendue
// ══════════════════════════════════════════════════════
const METIERS = [
  // ─── SANTÉ ───
  { id:'medecin', label:'Médecin Généraliste', secteur:'Santé', emoji:'👨‍⚕️',
    description:'Diagnostique et traite les maladies. Pilier du système de santé.',
    salaire:{ maroc:'15 000 – 40 000 MAD/mois', intl:'3 000 – 8 000 €/mois' },
    dureeEtudes:'7 ans', difficulte:5,
    filieres:['scientifique'], preferences:['bio','science','social'], objectives:['argent','stabilite','impact'],
    requiredSubjects:[{subject:'svt',minNote:14},{subject:'physique',minNote:12}],
    competences:['Biologie','Anatomie','Diagnostic','Communication'], tags:['concours','top','public'] },

  { id:'pharmacien', label:'Pharmacien', secteur:'Santé', emoji:'💊',
    description:'Délivre et conseille sur les médicaments. Peut ouvrir sa propre officine.',
    salaire:{ maroc:'10 000 – 30 000 MAD/mois', intl:'2 500 – 5 000 €/mois' },
    dureeEtudes:'6 ans', difficulte:4,
    filieres:['scientifique'], preferences:['bio','science'], objectives:['argent','stabilite','creation'],
    requiredSubjects:[{subject:'svt',minNote:14},{subject:'physique',minNote:13}],
    competences:['Chimie','Biologie','Pharmacologie'], tags:['concours','public'] },

  { id:'infirmier', label:'Infirmier(ère)', secteur:'Santé', emoji:'🩺',
    description:'Soins infirmiers, suivi des patients, coordination médicale.',
    salaire:{ maroc:'4 000 – 12 000 MAD/mois', intl:'1 800 – 4 000 €/mois' },
    dureeEtudes:'3 ans (ISPITS)', difficulte:3,
    filieres:['scientifique'], preferences:['bio','social'], objectives:['stabilite','impact'],
    requiredSubjects:[{subject:'svt',minNote:12}],
    competences:['Soins','Anatomie','Communication'], tags:['public'] },

  { id:'kinesitherapeute', label:'Kinésithérapeute', secteur:'Santé', emoji:'🏃',
    description:'Rééducation physique et sportive, traitement des douleurs.',
    salaire:{ maroc:'8 000 – 20 000 MAD/mois', intl:'2 000 – 4 500 €/mois' },
    dureeEtudes:'4 ans', difficulte:3,
    filieres:['scientifique'], preferences:['bio','sport','social'], objectives:['passion','impact','argent'],
    requiredSubjects:[{subject:'svt',minNote:12}],
    competences:['Anatomie','Physiologie','Rééducation'], tags:[] },

  { id:'dentiste', label:'Chirurgien-Dentiste', secteur:'Santé', emoji:'🦷',
    description:'Soins dentaires, chirurgie buccale, esthétique dentaire.',
    salaire:{ maroc:'15 000 – 50 000 MAD/mois', intl:'4 000 – 10 000 €/mois' },
    dureeEtudes:'6 ans', difficulte:5,
    filieres:['scientifique'], preferences:['bio','science'], objectives:['argent','creation','stabilite'],
    requiredSubjects:[{subject:'svt',minNote:14},{subject:'physique',minNote:13}],
    competences:['Biologie','Chirurgie','Anatomie'], tags:['concours','top'] },

  { id:'veterinaire', label:'Vétérinaire', secteur:'Santé animale', emoji:'🐾',
    description:'Soins aux animaux, santé publique vétérinaire, industrie agroalimentaire.',
    salaire:{ maroc:'8 000 – 22 000 MAD/mois', intl:'2 500 – 5 500 €/mois' },
    dureeEtudes:'5 ans (IAV)', difficulte:4,
    filieres:['scientifique'], preferences:['bio','science'], objectives:['passion','impact'],
    requiredSubjects:[{subject:'svt',minNote:14},{subject:'maths',minNote:12}],
    competences:['Biologie','Chirurgie vétérinaire','Pharmacologie'], tags:['concours','public'] },

  { id:'sage_femme', label:'Sage-Femme', secteur:'Santé', emoji:'👶',
    description:'Accompagnement de la grossesse et de l\'accouchement.',
    salaire:{ maroc:'5 000 – 14 000 MAD/mois', intl:'2 000 – 4 000 €/mois' },
    dureeEtudes:'3 ans', difficulte:3,
    filieres:['scientifique'], preferences:['bio','social'], objectives:['impact','stabilite'],
    requiredSubjects:[{subject:'svt',minNote:13}],
    competences:['Obstétrique','Soins','Écoute'], tags:['public','concours'] },

  // ─── INGÉNIERIE & TECH ───
  { id:'ingenieur_info', label:'Ingénieur Informatique', secteur:'Technologie', emoji:'💻',
    description:'Développe des logiciels, systèmes et applications. Très demandé localement et à l\'international.',
    salaire:{ maroc:'8 000 – 30 000 MAD/mois', intl:'3 000 – 8 000 €/mois' },
    dureeEtudes:'5 ans', difficulte:4,
    filieres:['scientifique','technologique'], preferences:['tech','science'], objectives:['argent','voyage','creation'],
    requiredSubjects:[{subject:'maths',minNote:14},{subject:'physique',minNote:12}],
    competences:['Python','Java','Algorithmes','DevOps'], tags:['concours','top','international'] },

  { id:'dev_web', label:'Développeur Web / Mobile', secteur:'Technologie', emoji:'🌐',
    description:'Crée des sites web et applications mobiles. Forte demande, bonne rémunération.',
    salaire:{ maroc:'6 000 – 20 000 MAD/mois', intl:'2 500 – 6 000 €/mois' },
    dureeEtudes:'2-3 ans', difficulte:3,
    filieres:['scientifique','technologique'], preferences:['tech'], objectives:['argent','creation','voyage'],
    requiredSubjects:[{subject:'maths',minNote:11}],
    competences:['HTML/CSS','JavaScript','React','Node.js'], tags:['international','freelance'] },

  { id:'data_scientist', label:'Data Scientist / IA', secteur:'Technologie', emoji:'🤖',
    description:'Analyse de données massives, machine learning, intelligence artificielle.',
    salaire:{ maroc:'10 000 – 35 000 MAD/mois', intl:'4 000 – 10 000 €/mois' },
    dureeEtudes:'5 ans', difficulte:5,
    filieres:['scientifique'], preferences:['tech','science'], objectives:['argent','voyage','creation'],
    requiredSubjects:[{subject:'maths',minNote:16},{subject:'physique',minNote:14}],
    competences:['Python','Machine Learning','Statistiques','TensorFlow'], tags:['top','international'] },

  { id:'ing_civil', label:'Ingénieur Génie Civil', secteur:'BTP', emoji:'🏗️',
    description:'Conçoit et supervise la construction de bâtiments, routes, ponts.',
    salaire:{ maroc:'8 000 – 25 000 MAD/mois', intl:'3 000 – 7 000 €/mois' },
    dureeEtudes:'5 ans', difficulte:4,
    filieres:['scientifique','technologique'], preferences:['tech','science'], objectives:['argent','stabilite','impact'],
    requiredSubjects:[{subject:'maths',minNote:13},{subject:'physique',minNote:13}],
    competences:['AutoCAD','Calcul de structures','Gestion de projet'], tags:['concours'] },

  { id:'architecte', label:'Architecte', secteur:'Architecture', emoji:'🏛️',
    description:'Conçoit des bâtiments et espaces urbains alliant esthétique et fonctionnalité.',
    salaire:{ maroc:'8 000 – 30 000 MAD/mois', intl:'3 000 – 7 000 €/mois' },
    dureeEtudes:'5 ans (ENA)', difficulte:4,
    filieres:['scientifique','artistique'], preferences:['art','tech','science'], objectives:['passion','creation','argent'],
    requiredSubjects:[{subject:'maths',minNote:12},{subject:'physique',minNote:11}],
    competences:['AutoCAD','SketchUp','Dessin technique','Urbanisme'], tags:['concours'] },

  { id:'ing_electrique', label:'Ingénieur Électrique / Énergie', secteur:'Énergie', emoji:'⚡',
    description:'Conçoit des systèmes électriques. Fort potentiel dans les énergies renouvelables.',
    salaire:{ maroc:'9 000 – 28 000 MAD/mois', intl:'3 500 – 8 000 €/mois' },
    dureeEtudes:'5 ans', difficulte:4,
    filieres:['scientifique','technologique'], preferences:['tech','science'], objectives:['argent','impact','stabilite'],
    requiredSubjects:[{subject:'maths',minNote:14},{subject:'physique',minNote:14}],
    competences:['Électronique','Matlab','Réseaux électriques'], tags:['concours','top'] },

  { id:'cybersecurite', label:'Expert Cybersécurité', secteur:'Technologie', emoji:'🔐',
    description:'Protège les systèmes informatiques contre les cyberattaques.',
    salaire:{ maroc:'12 000 – 35 000 MAD/mois', intl:'4 000 – 10 000 €/mois' },
    dureeEtudes:'5 ans', difficulte:5,
    filieres:['scientifique','technologique'], preferences:['tech','science'], objectives:['argent','voyage'],
    requiredSubjects:[{subject:'maths',minNote:14}],
    competences:['Réseaux','Linux','Pentest','Cryptographie'], tags:['top','international'] },

  { id:'ing_telecom', label:'Ingénieur Télécoms', secteur:'Technologie', emoji:'📡',
    description:'Conception de réseaux de communication. Secteur en forte croissance (5G).',
    salaire:{ maroc:'9 000 – 26 000 MAD/mois', intl:'3 500 – 8 000 €/mois' },
    dureeEtudes:'5 ans', difficulte:4,
    filieres:['scientifique','technologique'], preferences:['tech','science'], objectives:['argent','voyage'],
    requiredSubjects:[{subject:'maths',minNote:14},{subject:'physique',minNote:13}],
    competences:['Réseaux 5G','Radio fréquences','Fibre optique'], tags:['concours','top'] },

  // ─── BUSINESS & FINANCE ───
  { id:'expert_comptable', label:'Expert-Comptable', secteur:'Finance', emoji:'📒',
    description:'Gestion comptable et fiscale des entreprises.',
    salaire:{ maroc:'10 000 – 40 000 MAD/mois', intl:'3 000 – 7 000 €/mois' },
    dureeEtudes:'8 ans', difficulte:5,
    filieres:['economique'], preferences:['business'], objectives:['argent','stabilite','creation'],
    requiredSubjects:[{subject:'maths',minNote:13}],
    competences:['Comptabilité','Fiscalité','Droit des affaires','Excel'], tags:['top'] },

  { id:'banquier', label:'Banquier / Analyste Financier', secteur:'Finance', emoji:'🏦',
    description:'Gestion de portefeuilles, crédit, analyse financière.',
    salaire:{ maroc:'8 000 – 25 000 MAD/mois', intl:'3 000 – 8 000 €/mois' },
    dureeEtudes:'5 ans', difficulte:3,
    filieres:['economique'], preferences:['business'], objectives:['argent','stabilite'],
    requiredSubjects:[{subject:'maths',minNote:12}],
    competences:['Finance','Analyse de risque','Excel','Droit bancaire'], tags:[] },

  { id:'marketeur', label:'Responsable Marketing Digital', secteur:'Business', emoji:'📱',
    description:'Stratégie marketing, gestion des réseaux sociaux, publicité digitale.',
    salaire:{ maroc:'6 000 – 18 000 MAD/mois', intl:'2 500 – 5 000 €/mois' },
    dureeEtudes:'3-5 ans', difficulte:3,
    filieres:['economique','litteraire'], preferences:['business','art','social'], objectives:['creation','argent','passion'],
    requiredSubjects:[{subject:'francais',minNote:12},{subject:'anglais',minNote:12}],
    competences:['SEO/SEA','Réseaux sociaux','Analytics','Copywriting'], tags:['international','freelance'] },

  { id:'entrepreneur', label:'Entrepreneur / Startupper', secteur:'Business', emoji:'🚀',
    description:'Crée et développe sa propre entreprise. Écosystème startup en essor au Maroc.',
    salaire:{ maroc:'Variable', intl:'Variable' },
    dureeEtudes:'Pas de formation spécifique', difficulte:5,
    filieres:['economique','scientifique','technologique'], preferences:['business','tech'], objectives:['creation','passion','argent','impact'],
    requiredSubjects:[],
    competences:['Leadership','Finance','Marketing','Résilience'], tags:['creation'] },

  { id:'rh', label:'Responsable RH', secteur:'Management', emoji:'👥',
    description:'Gestion des ressources humaines, recrutement, formation, paie.',
    salaire:{ maroc:'7 000 – 20 000 MAD/mois', intl:'2 500 – 5 000 €/mois' },
    dureeEtudes:'5 ans', difficulte:3,
    filieres:['economique','litteraire'], preferences:['business','social'], objectives:['stabilite','impact'],
    requiredSubjects:[],
    competences:['Droit du travail','Communication','Management','Excel'], tags:[] },

  { id:'logisticien', label:'Responsable Logistique', secteur:'Logistique', emoji:'🚛',
    description:'Gestion des flux de marchandises. Secteur en forte croissance (Tanger Med).',
    salaire:{ maroc:'8 000 – 22 000 MAD/mois', intl:'3 000 – 6 000 €/mois' },
    dureeEtudes:'3-5 ans', difficulte:3,
    filieres:['economique','technologique'], preferences:['business','tech'], objectives:['argent','stabilite'],
    requiredSubjects:[{subject:'maths',minNote:11}],
    competences:['ERP SAP','Gestion de stocks','Transport','Douane'], tags:[] },

  // ─── DROIT ───
  { id:'avocat', label:'Avocat', secteur:'Droit', emoji:'⚖️',
    description:'Défense et conseil juridique. Profession libérale ou cabinet.',
    salaire:{ maroc:'8 000 – 40 000 MAD/mois', intl:'3 000 – 10 000 €/mois' },
    dureeEtudes:'7 ans', difficulte:4,
    filieres:['economique','litteraire'], preferences:['social','langue'], objectives:['argent','impact','creation'],
    requiredSubjects:[{subject:'francais',minNote:14},{subject:'arabe',minNote:13}],
    competences:['Droit civil','Droit pénal','Rédaction juridique','Plaidoirie'], tags:[] },

  { id:'magistrat', label:'Magistrat / Juge', secteur:'Droit', emoji:'🏛️',
    description:'Rend la justice au nom de l\'État.',
    salaire:{ maroc:'10 000 – 30 000 MAD/mois', intl:'N/A' },
    dureeEtudes:'7-8 ans', difficulte:5,
    filieres:['economique','litteraire'], preferences:['social'], objectives:['stabilite','impact'],
    requiredSubjects:[{subject:'arabe',minNote:14},{subject:'francais',minNote:13}],
    competences:['Droit','Analyse','Rigueur','Éthique'], tags:['concours'] },

  // ─── ÉDUCATION ───
  { id:'enseignant', label:'Enseignant / Professeur', secteur:'Éducation', emoji:'👩‍🏫',
    description:'Transmission du savoir. Statut fonctionnaire stable.',
    salaire:{ maroc:'5 000 – 15 000 MAD/mois', intl:'2 000 – 4 000 €/mois' },
    dureeEtudes:'5 ans', difficulte:3,
    filieres:['litteraire','scientifique','economique'], preferences:['social','langue'], objectives:['stabilite','impact','passion'],
    requiredSubjects:[],
    competences:['Pédagogie','Communication','Patience'], tags:['public','concours'] },

  // ─── AVIATION ───
  { id:'pilote', label:'Pilote de Ligne', secteur:'Aviation', emoji:'✈️',
    description:'Pilotage d\'avions commerciaux. Carrière internationale prestigieuse.',
    salaire:{ maroc:'25 000 – 60 000 MAD/mois', intl:'5 000 – 15 000 €/mois' },
    dureeEtudes:'3-5 ans (ATPL)', difficulte:5,
    filieres:['scientifique','technologique'], preferences:['tech','science','voyage'], objectives:['argent','voyage','passion'],
    requiredSubjects:[{subject:'maths',minNote:14},{subject:'physique',minNote:14},{subject:'anglais',minNote:14}],
    competences:['Navigation','Météorologie','Anglais aéronautique'], tags:['top','international','concours'] },

  { id:'controleur_aerien', label:'Contrôleur Aérien', secteur:'Aviation', emoji:'🗼',
    description:'Gère le trafic aérien depuis la tour de contrôle.',
    salaire:{ maroc:'20 000 – 45 000 MAD/mois', intl:'4 000 – 8 000 €/mois' },
    dureeEtudes:'4 ans (IATCA)', difficulte:5,
    filieres:['scientifique'], preferences:['tech','science'], objectives:['argent','stabilite'],
    requiredSubjects:[{subject:'maths',minNote:15},{subject:'anglais',minNote:15}],
    competences:['Radar','Anglais aéronautique','Gestion du stress'], tags:['concours','top'] },

  // ─── TOURISME ───
  { id:'manager_hotel', label:'Manager Hôtelier', secteur:'Tourisme', emoji:'🏨',
    description:'Gestion opérationnelle d\'hôtels. Maroc est une destination majeure.',
    salaire:{ maroc:'8 000 – 25 000 MAD/mois', intl:'2 500 – 6 000 €/mois' },
    dureeEtudes:'3-5 ans', difficulte:3,
    filieres:['economique','litteraire'], preferences:['business','social','langue'], objectives:['argent','voyage','passion'],
    requiredSubjects:[{subject:'anglais',minNote:13},{subject:'francais',minNote:13}],
    competences:['Management','Langues','Service client','Revenue management'], tags:['international'] },

  { id:'guide_tourisme', label:'Guide Touristique', secteur:'Tourisme', emoji:'🗺️',
    description:'Accompagne et informe les touristes. Idéal pour les passionnés d\'histoire.',
    salaire:{ maroc:'3 000 – 12 000 MAD/mois', intl:'Variable' },
    dureeEtudes:'2 ans', difficulte:2,
    filieres:['litteraire'], preferences:['langue','social'], objectives:['passion','voyage'],
    requiredSubjects:[{subject:'arabe',minNote:12},{subject:'francais',minNote:12}],
    competences:['Histoire','Langues','Communication'], tags:[] },

  // ─── AGRICULTURE ───
  { id:'ing_agro', label:'Ingénieur Agronome', secteur:'Agriculture', emoji:'🌾',
    description:'Améliore les techniques agricoles. Secteur vital pour le Maroc.',
    salaire:{ maroc:'7 000 – 20 000 MAD/mois', intl:'2 500 – 5 000 €/mois' },
    dureeEtudes:'5 ans (IAV, ENA)', difficulte:3,
    filieres:['scientifique'], preferences:['bio','science'], objectives:['impact','stabilite'],
    requiredSubjects:[{subject:'svt',minNote:13},{subject:'maths',minNote:12}],
    competences:['Biologie végétale','Agronomie','Irrigation'], tags:['concours'] },

  // ─── MÉDIAS ───
  { id:'journaliste', label:'Journaliste', secteur:'Médias', emoji:'📰',
    description:'Enquête et diffuse l\'information. Presse, TV, digital.',
    salaire:{ maroc:'4 000 – 15 000 MAD/mois', intl:'2 000 – 5 000 €/mois' },
    dureeEtudes:'3-5 ans (ISIC)', difficulte:3,
    filieres:['litteraire'], preferences:['social','langue'], objectives:['passion','impact','voyage'],
    requiredSubjects:[{subject:'arabe',minNote:13},{subject:'francais',minNote:13}],
    competences:['Rédaction','Investigation','Audiovisuel'], tags:[] },

  { id:'designer', label:'Designer Graphique / UI', secteur:'Design', emoji:'🎨',
    description:'Création visuelle pour marques, apps, sites web.',
    salaire:{ maroc:'5 000 – 18 000 MAD/mois', intl:'2 000 – 5 000 €/mois' },
    dureeEtudes:'3-4 ans', difficulte:3,
    filieres:['artistique','litteraire'], preferences:['art','tech'], objectives:['passion','creation','argent'],
    requiredSubjects:[],
    competences:['Photoshop','Illustrator','Figma','Typographie'], tags:['freelance','international'] },

  // ─── ENVIRONNEMENT ───
  { id:'ing_env', label:'Ingénieur Environnement', secteur:'Environnement', emoji:'🌍',
    description:'Protection de l\'environnement, développement durable.',
    salaire:{ maroc:'7 000 – 20 000 MAD/mois', intl:'3 000 – 6 000 €/mois' },
    dureeEtudes:'5 ans', difficulte:3,
    filieres:['scientifique'], preferences:['bio','science'], objectives:['impact','passion'],
    requiredSubjects:[{subject:'svt',minNote:13},{subject:'physique',minNote:12}],
    competences:['Écologie','Gestion des déchets','Énergies renouvelables'], tags:['international'] },

  // ─── SPORT ───
  { id:'coach_sportif', label:'Coach Sportif / Kiné Sport', secteur:'Sport', emoji:'🏋️',
    description:'Entraînement et développement physique.',
    salaire:{ maroc:'5 000 – 15 000 MAD/mois', intl:'2 000 – 5 000 €/mois' },
    dureeEtudes:'3-4 ans', difficulte:2,
    filieres:['scientifique','litteraire'], preferences:['sport','social'], objectives:['passion','impact'],
    requiredSubjects:[],
    competences:['Anatomie','Nutrition','Programmation sportive'], tags:[] },

  // ─── PSYCHOLOGIE ───
  { id:'psychologue', label:'Psychologue', secteur:'Santé mentale', emoji:'🧠',
    description:'Accompagnement psychologique. Forte croissance de la demande.',
    salaire:{ maroc:'5 000 – 20 000 MAD/mois', intl:'2 500 – 6 000 €/mois' },
    dureeEtudes:'5-6 ans', difficulte:4,
    filieres:['litteraire','scientifique'], preferences:['social','bio'], objectives:['impact','passion'],
    requiredSubjects:[{subject:'francais',minNote:13}],
    competences:['Écoute active','Psychanalyse','TCC'], tags:[] },

  // ─── DIPLOMATIE ───
  { id:'diplomate', label:'Diplomate / Relations Internationales', secteur:'Diplomatie', emoji:'🌐',
    description:'Représente le Maroc à l\'étranger. Négociations et accords internationaux.',
    salaire:{ maroc:'15 000 – 35 000 MAD/mois', intl:'4 000 – 10 000 €/mois' },
    dureeEtudes:'7 ans (ENA + concours)', difficulte:5,
    filieres:['litteraire','economique'], preferences:['langue','social'], objectives:['voyage','impact','argent'],
    requiredSubjects:[{subject:'francais',minNote:15},{subject:'anglais',minNote:15},{subject:'arabe',minNote:14}],
    competences:['Langues (5+)','Droit international','Protocole','Géopolitique'], tags:['concours','top'] },

  { id:'traducteur', label:'Traducteur / Interprète', secteur:'Langues', emoji:'🗣️',
    description:'Traduction et interprétation entre langues. Travail à distance possible.',
    salaire:{ maroc:'4 000 – 15 000 MAD/mois', intl:'2 000 – 6 000 €/mois' },
    dureeEtudes:'3-5 ans', difficulte:3,
    filieres:['litteraire'], preferences:['langue','social'], objectives:['voyage','passion','argent'],
    requiredSubjects:[{subject:'francais',minNote:14},{subject:'anglais',minNote:15}],
    competences:['Langues','Linguistique','Culture'], tags:['freelance','international'] },
];

// ══════════════════════════════════════════════════════
// ÉCOLES — Base réaliste
// ══════════════════════════════════════════════════════
const SCHOOLS = [
  // ─── UNIVERSITÉS PUBLIQUES ───
  { id:'um5', nom:'Université Mohammed V', ville:'Rabat', region:'Rabat-Salé-Kénitra',
    type:'Université publique', emoji:'🎓',
    filieres:['scientifique','economique','litteraire'],
    acces:'Dossier scolaire (bac)', minAverage:12, duree:'3 à 8 ans',
    diplomes:['Licence','Master','Doctorat'],
    description:'L\'une des plus grandes universités du Maroc.',
    lat:33.9716, lng:-6.8498, tags:['top','public'] },

  { id:'uh2', nom:'Université Hassan II de Casablanca', ville:'Casablanca', region:'Casablanca-Settat',
    type:'Université publique', emoji:'🎓',
    filieres:['scientifique','economique','litteraire','medecine'],
    acces:'Dossier (bac)', minAverage:12, duree:'3 à 7 ans',
    diplomes:['Licence','Master','Doctorat'],
    description:'Grande université de Casablanca. Médecine, droit, sciences.',
    lat:33.5731, lng:-7.5898, tags:['top','public'] },

  { id:'uca', nom:'Université Cadi Ayyad', ville:'Marrakech', region:'Marrakech-Safi',
    type:'Université publique', emoji:'🎓',
    filieres:['scientifique','economique','litteraire'],
    acces:'Dossier (bac)', minAverage:11, duree:'3 à 7 ans',
    diplomes:['Licence','Master','Doctorat'],
    description:'Université de Marrakech. Facultés des sciences, droit, lettres.',
    lat:31.6295, lng:-7.9811, tags:['public'] },

  { id:'usmba', nom:'Université Sidi Mohammed Ben Abdellah', ville:'Fès', region:'Fès-Meknès',
    type:'Université publique', emoji:'🎓',
    filieres:['scientifique','economique','litteraire'],
    acces:'Dossier (bac)', minAverage:11, duree:'3 à 8 ans',
    diplomes:['Licence','Master','Doctorat'],
    description:'Grande université de la région Fès-Meknès.',
    lat:33.9974, lng:-5.0030, tags:['public'] },

  { id:'uae', nom:'Université Abdelmalek Essaâdi', ville:'Tétouan', region:'Tanger-Tétouan-Al Hoceima',
    type:'Université publique', emoji:'🎓',
    filieres:['scientifique','economique','litteraire'],
    acces:'Dossier (bac)', minAverage:11, duree:'3 à 8 ans',
    diplomes:['Licence','Master','Doctorat'],
    description:'Université du Nord du Maroc. Campus à Tanger et Tétouan.',
    lat:35.5785, lng:-5.3586, tags:['public'] },

  { id:'ump', nom:'Université Mohammed Premier', ville:'Oujda', region:'Oriental',
    type:'Université publique', emoji:'🎓',
    filieres:['scientifique','economique','litteraire'],
    acces:'Dossier (bac)', minAverage:10, duree:'3 à 8 ans',
    diplomes:['Licence','Master'],
    description:'Principale université de la région orientale.',
    lat:34.6867, lng:-1.9114, tags:['public'] },

  { id:'uiz', nom:'Université Ibn Zohr', ville:'Agadir', region:'Souss-Massa',
    type:'Université publique', emoji:'🎓',
    filieres:['scientifique','economique','litteraire'],
    acces:'Dossier (bac)', minAverage:11, duree:'3 à 8 ans',
    diplomes:['Licence','Master','Doctorat'],
    description:'Université d\'Agadir. Sciences, droit, lettres.',
    lat:30.4278, lng:-9.5981, tags:['public'] },

  // ─── ÉCOLES D'INGÉNIEURS ───
  { id:'emi', nom:'École Mohammadia d\'Ingénieurs (EMI)', ville:'Rabat', region:'Rabat-Salé-Kénitra',
    type:'École d\'ingénieurs publique', emoji:'⚙️',
    filieres:['scientifique','technologique'],
    acces:'Concours national (Classes Prépa)', minAverage:17, duree:'5 ans',
    diplomes:['Diplôme d\'ingénieur d\'État'],
    description:'La plus ancienne et prestigieuse école d\'ingénieurs du Maroc.',
    lat:33.9985, lng:-6.8512, tags:['top','concours','public'] },

  { id:'ensias', nom:'ENSIAS — École Nationale Supérieure d\'Informatique', ville:'Rabat', region:'Rabat-Salé-Kénitra',
    type:'École d\'ingénieurs publique', emoji:'💻',
    filieres:['scientifique','technologique'],
    acces:'Concours national (Classes Prépa)', minAverage:17, duree:'5 ans',
    diplomes:['Diplôme d\'ingénieur'],
    description:'École d\'excellence en informatique et systèmes d\'information.',
    lat:33.9716, lng:-6.8498, tags:['top','concours','public','tech'] },

  { id:'ensa_rabat', nom:'ENSA Rabat', ville:'Rabat', region:'Rabat-Salé-Kénitra',
    type:'École d\'ingénieurs publique', emoji:'⚙️',
    filieres:['scientifique','technologique'],
    acces:'Concours national (bac)', minAverage:15, duree:'5 ans',
    diplomes:['Diplôme d\'ingénieur'],
    description:'ENSA en accès direct bac. Génie industriel, civil, informatique.',
    lat:33.9716, lng:-6.8498, tags:['concours','public'] },

  { id:'ensa_casa', nom:'ENSA Casablanca', ville:'Casablanca', region:'Casablanca-Settat',
    type:'École d\'ingénieurs publique', emoji:'⚙️',
    filieres:['scientifique','technologique'],
    acces:'Concours national (bac)', minAverage:15, duree:'5 ans',
    diplomes:['Diplôme d\'ingénieur'],
    description:'ENSA de Casablanca. Très demandée.',
    lat:33.5731, lng:-7.5898, tags:['concours','public'] },

  { id:'ensa_marrakech', nom:'ENSA Marrakech', ville:'Marrakech', region:'Marrakech-Safi',
    type:'École d\'ingénieurs publique', emoji:'⚙️',
    filieres:['scientifique','technologique'],
    acces:'Concours national (bac)', minAverage:14, duree:'5 ans',
    diplomes:['Diplôme d\'ingénieur'],
    description:'ENSA Marrakech — génie civil, informatique, industriel.',
    lat:31.6295, lng:-7.9811, tags:['concours','public'] },

  { id:'ensa_agadir', nom:'ENSA Agadir', ville:'Agadir', region:'Souss-Massa',
    type:'École d\'ingénieurs publique', emoji:'⚙️',
    filieres:['scientifique','technologique'],
    acces:'Concours national (bac)', minAverage:14, duree:'5 ans',
    diplomes:['Diplôme d\'ingénieur'],
    description:'ENSA Agadir. Spécialités pêche, génie civil, informatique.',
    lat:30.4278, lng:-9.5981, tags:['concours','public'] },

  { id:'ensa_fes', nom:'ENSA Fès', ville:'Fès', region:'Fès-Meknès',
    type:'École d\'ingénieurs publique', emoji:'⚙️',
    filieres:['scientifique','technologique'],
    acces:'Concours national (bac)', minAverage:14, duree:'5 ans',
    diplomes:['Diplôme d\'ingénieur'],
    description:'ENSA Fès — génie électrique, mécanique, informatique.',
    lat:33.9974, lng:-5.0030, tags:['concours','public'] },

  { id:'ensa_tanger', nom:'ENSA Tanger', ville:'Tanger', region:'Tanger-Tétouan-Al Hoceima',
    type:'École d\'ingénieurs publique', emoji:'⚙️',
    filieres:['scientifique','technologique'],
    acces:'Concours national (bac)', minAverage:14, duree:'5 ans',
    diplomes:['Diplôme d\'ingénieur'],
    description:'ENSA Tanger — génie logistique, industriel, informatique.',
    lat:35.7595, lng:-5.8340, tags:['concours','public'] },

  { id:'ehtp', nom:'EHTP — École Hassania des Travaux Publics', ville:'Casablanca', region:'Casablanca-Settat',
    type:'École d\'ingénieurs publique', emoji:'🏗️',
    filieres:['scientifique','technologique'],
    acces:'Concours national (Classes Prépa)', minAverage:17, duree:'5 ans',
    diplomes:['Diplôme d\'ingénieur'],
    description:'Excellence pour le génie civil, travaux publics, hydraulique.',
    lat:33.5731, lng:-7.5898, tags:['top','concours','public'] },

  { id:'iav', nom:'IAV Hassan II — Institut Agronomique et Vétérinaire', ville:'Rabat', region:'Rabat-Salé-Kénitra',
    type:'École d\'ingénieurs publique', emoji:'🌾',
    filieres:['scientifique'],
    acces:'Concours national', minAverage:16, duree:'5 ans',
    diplomes:['Ingénieur agronome','Ingénieur vétérinaire'],
    description:'Référence nationale en agronomie, horticulture, médecine vétérinaire.',
    lat:33.9716, lng:-6.8498, tags:['top','concours','public'] },

  { id:'ena_archi', nom:'ENA — École Nationale d\'Architecture', ville:'Rabat', region:'Rabat-Salé-Kénitra',
    type:'École spécialisée publique', emoji:'🏛️',
    filieres:['scientifique','artistique'],
    acces:'Concours (entretien + dossier)', minAverage:13, duree:'5 ans',
    diplomes:['Diplôme d\'architecte d\'État'],
    description:'Seule école nationale d\'architecture au Maroc.',
    lat:33.9716, lng:-6.8498, tags:['concours','public'] },

  // ─── MÉDECINE ───
  { id:'fmpr', nom:'Faculté de Médecine et de Pharmacie de Rabat', ville:'Rabat', region:'Rabat-Salé-Kénitra',
    type:'Faculté publique', emoji:'🏥',
    filieres:['scientifique'],
    acces:'Concours national (bac scientifique TB)', minAverage:17, duree:'6-9 ans',
    diplomes:['Doctorat médecine','Pharmacien','Dentiste'],
    description:'Principale faculté de médecine du Maroc.',
    lat:33.9716, lng:-6.8498, tags:['top','concours','public','medecine'] },

  { id:'fmpc', nom:'Faculté de Médecine de Casablanca', ville:'Casablanca', region:'Casablanca-Settat',
    type:'Faculté publique', emoji:'🏥',
    filieres:['scientifique'],
    acces:'Concours national', minAverage:17, duree:'6-9 ans',
    diplomes:['Doctorat médecine'],
    description:'Faculté de médecine de Hassan II Casablanca.',
    lat:33.5731, lng:-7.5898, tags:['top','concours','public','medecine'] },

  { id:'ispits', nom:'ISPITS — Institut Supérieur des Professions Infirmières', ville:'Plusieurs villes', region:'National',
    type:'Institut public (santé)', emoji:'🩺',
    filieres:['scientifique'],
    acces:'Concours national', minAverage:13, duree:'3 ans',
    diplomes:['Diplôme infirmier'],
    description:'Formation aux métiers infirmiers : soins généraux, sage-femme.',
    lat:33.9716, lng:-6.8498, tags:['concours','public','sante'] },

  // ─── COMMERCE & MANAGEMENT ───
  { id:'iscae', nom:'ISCAE — Institut Supérieur de Commerce et d\'Administration', ville:'Casablanca', region:'Casablanca-Settat',
    type:'École de gestion publique', emoji:'📊',
    filieres:['economique','scientifique'],
    acces:'Concours national (bac + tests écrits)', minAverage:15, duree:'5 ans',
    diplomes:['Master en management','MBA'],
    description:'École de commerce et gestion de référence au Maroc.',
    lat:33.5731, lng:-7.5898, tags:['top','concours','public','business'] },

  { id:'encg_casa', nom:'ENCG Casablanca', ville:'Casablanca', region:'Casablanca-Settat',
    type:'École nationale de commerce', emoji:'📊',
    filieres:['economique'],
    acces:'Concours national', minAverage:15, duree:'5 ans',
    diplomes:['Diplôme ENCG'],
    description:'ENCG la plus demandée au Maroc. Commerce, marketing, finance.',
    lat:33.5731, lng:-7.5898, tags:['top','concours','public'] },

  { id:'encg_fes', nom:'ENCG Fès', ville:'Fès', region:'Fès-Meknès',
    type:'École nationale de commerce', emoji:'📊',
    filieres:['economique'],
    acces:'Concours national', minAverage:14, duree:'5 ans',
    diplomes:['Diplôme ENCG'],
    description:'ENCG de Fès. Solide réputation régionale.',
    lat:33.9974, lng:-5.0030, tags:['concours','public'] },

  { id:'encg_agadir', nom:'ENCG Agadir', ville:'Agadir', region:'Souss-Massa',
    type:'École nationale de commerce', emoji:'📊',
    filieres:['economique'],
    acces:'Concours national', minAverage:13, duree:'5 ans',
    diplomes:['Diplôme ENCG'],
    description:'ENCG Agadir, spécialité tourisme et marketing.',
    lat:30.4278, lng:-9.5981, tags:['concours','public'] },

  { id:'encg_tanger', nom:'ENCG Tanger', ville:'Tanger', region:'Tanger-Tétouan-Al Hoceima',
    type:'École nationale de commerce', emoji:'📊',
    filieres:['economique'],
    acces:'Concours national', minAverage:13, duree:'5 ans',
    diplomes:['Diplôme ENCG'],
    description:'ENCG Tanger — logistique, commerce international.',
    lat:35.7595, lng:-5.8340, tags:['concours','public'] },

  // ─── AVIATION ───
  { id:'iatca', nom:'IATCA — Institut Contrôle Aérien', ville:'Casablanca', region:'Casablanca-Settat',
    type:'Institut spécialisé', emoji:'✈️',
    filieres:['scientifique','technologique'],
    acces:'Concours très sélectif (maths, physique, anglais)', minAverage:16, duree:'4 ans',
    diplomes:['Contrôleur aérien'],
    description:'Seule école de contrôle aérien au Maroc.',
    lat:33.5731, lng:-7.5898, tags:['top','concours','aviation'] },

  // ─── OFPPT ───
  { id:'ofppt_dev', nom:'OFPPT — TS Développement Informatique', ville:'Toutes villes', region:'National',
    type:'Formation professionnelle publique', emoji:'🛠️',
    filieres:['technologique','scientifique'],
    acces:'Dossier (bac ou niveau bac)', minAverage:10, duree:'2 ans',
    diplomes:['TS Développement Informatique'],
    description:'Formation technique rapide. Très bon taux d\'insertion.',
    lat:33.9716, lng:-6.8498, tags:['ofppt','tech'] },

  { id:'ofppt_compta', nom:'OFPPT — TS Comptabilité et Gestion', ville:'Toutes villes', region:'National',
    type:'Formation professionnelle publique', emoji:'🛠️',
    filieres:['economique'],
    acces:'Dossier (bac)', minAverage:10, duree:'2 ans',
    diplomes:['TS Comptabilité'],
    description:'Formation comptable pratique et employable rapidement.',
    lat:33.9716, lng:-6.8498, tags:['ofppt'] },

  { id:'ofppt_reseau', nom:'OFPPT — TS Réseaux Informatiques', ville:'Toutes villes', region:'National',
    type:'Formation professionnelle publique', emoji:'🛠️',
    filieres:['technologique'],
    acces:'Dossier (bac)', minAverage:10, duree:'2 ans',
    diplomes:['TS Réseaux et Systèmes'],
    description:'Administration réseaux, cybersécurité.',
    lat:33.9716, lng:-6.8498, tags:['ofppt','tech'] },

  { id:'ofppt_electro', nom:'OFPPT — TS Électronique', ville:'Toutes villes', region:'National',
    type:'Formation professionnelle publique', emoji:'🛠️',
    filieres:['technologique'],
    acces:'Dossier (bac scientifique)', minAverage:10, duree:'2 ans',
    diplomes:['TS Électronique'],
    description:'Électronique, automatismes, maintenance industrielle.',
    lat:33.9716, lng:-6.8498, tags:['ofppt'] },

  { id:'ofppt_hotel', nom:'OFPPT — TS Gestion Hôtelière', ville:'Plusieurs villes', region:'National',
    type:'Formation professionnelle publique', emoji:'🛠️',
    filieres:['economique','litteraire'],
    acces:'Dossier (bac)', minAverage:10, duree:'2 ans',
    diplomes:['TS Gestion Hôtelière'],
    description:'Formation aux métiers de l\'hôtellerie et restauration.',
    lat:33.9716, lng:-6.8498, tags:['ofppt','tourisme'] },

  { id:'ofppt_logistique', nom:'OFPPT — TS Logistique', ville:'Tanger / Casablanca', region:'National',
    type:'Formation professionnelle publique', emoji:'🛠️',
    filieres:['economique','technologique'],
    acces:'Dossier (bac)', minAverage:10, duree:'2 ans',
    diplomes:['TS Logistique'],
    description:'Logistique, transport, supply chain. Fort débouché Tanger Med.',
    lat:35.7595, lng:-5.8340, tags:['ofppt'] },

  // ─── PRIVÉES ───
  { id:'um6p', nom:'Université Mohammed VI Polytechnique', ville:'Ben Guerir / Rabat', region:'Marrakech-Safi',
    type:'Université privée (OCP)', emoji:'🔬',
    filieres:['scientifique','technologique','economique'],
    acces:'Concours + dossier (très sélectif)', minAverage:16, duree:'3-5 ans',
    diplomes:['Bachelor','Master','PhD'],
    description:'Université d\'excellence OCP. IA, énergies, recherche. Bourses.',
    lat:32.2351, lng:-7.9539, tags:['top','prive','concours','recherche'] },

  { id:'uir', nom:'UIR — Université Internationale de Rabat', ville:'Rabat', region:'Rabat-Salé-Kénitra',
    type:'Université privée', emoji:'🌐',
    filieres:['scientifique','economique','technologique'],
    acces:'Dossier + entretien', minAverage:13, duree:'3-5 ans',
    diplomes:['Licence','Master','Ingénieur'],
    description:'Université privée avec partenariats internationaux.',
    lat:33.9716, lng:-6.8498, tags:['prive','international'] },

  { id:'emsi', nom:'EMSI — École Marocaine des Sciences de l\'Ingénieur', ville:'Casablanca / Rabat / Marrakech', region:'National',
    type:'École d\'ingénieurs privée', emoji:'💻',
    filieres:['scientifique','technologique'],
    acces:'Dossier (bac scientifique)', minAverage:12, duree:'5 ans',
    diplomes:['Diplôme d\'ingénieur'],
    description:'École d\'ingénieurs privée reconnue. Informatique, télécoms.',
    lat:33.5731, lng:-7.5898, tags:['prive','tech'] },

  { id:'hem', nom:'HEM — Hautes Études de Management', ville:'Casablanca / Rabat / Marrakech / Fès', region:'National',
    type:'École de commerce privée', emoji:'📊',
    filieres:['economique'],
    acces:'Concours + entretien', minAverage:12, duree:'5 ans',
    diplomes:['Master management','MBA'],
    description:'École de commerce de référence. Très bon réseau alumni.',
    lat:33.5731, lng:-7.5898, tags:['prive','top','business'] },

  { id:'aui', nom:'Al Akhawayn University (AUI)', ville:'Ifrane', region:'Fès-Meknès',
    type:'Université privée anglophone', emoji:'🌍',
    filieres:['scientifique','economique','litteraire'],
    acces:'Dossier + TOEFL (très sélectif)', minAverage:15, duree:'4 ans',
    diplomes:['Bachelor','BBA'],
    description:'Université américaine au Maroc. Enseignement en anglais. Bourses.',
    lat:33.5281, lng:-5.1059, tags:['prive','top','international','anglais'] },

  { id:'esav', nom:'ESAV — École Supérieure des Arts Visuels', ville:'Marrakech', region:'Marrakech-Safi',
    type:'École d\'art privée', emoji:'🎨',
    filieres:['artistique'],
    acces:'Portfolio + entretien + test créativité', minAverage:11, duree:'5 ans',
    diplomes:['Master Arts Visuels'],
    description:'École d\'art et design de référence. Design, cinéma, animation.',
    lat:31.6295, lng:-7.9811, tags:['prive','art'] },

  // ─── SPÉCIALISÉES ───
  { id:'isic', nom:'ISIC — Institut Supérieur de l\'Information et Communication', ville:'Rabat', region:'Rabat-Salé-Kénitra',
    type:'Institut public spécialisé', emoji:'📰',
    filieres:['litteraire'],
    acces:'Concours national', minAverage:13, duree:'3-5 ans',
    diplomes:['Licence journalisme','Master communication'],
    description:'Référence pour le journalisme, communication et multimédia.',
    lat:33.9716, lng:-6.8498, tags:['public','concours','media'] },

  { id:'isitt', nom:'ISITT — Institut Supérieur du Tourisme de Tanger', ville:'Tanger', region:'Tanger-Tétouan-Al Hoceima',
    type:'Institut public', emoji:'🏖️',
    filieres:['economique','litteraire'],
    acces:'Concours national', minAverage:12, duree:'3-5 ans',
    diplomes:['Licence tourisme','Master hôtellerie'],
    description:'Meilleure école de tourisme et hôtellerie au Maroc.',
    lat:35.7595, lng:-5.8340, tags:['concours','public','tourisme'] },

  { id:'ena_meknes', nom:'ENA — École Nationale d\'Agriculture de Meknès', ville:'Meknès', region:'Fès-Meknès',
    type:'École spécialisée publique', emoji:'🌾',
    filieres:['scientifique'],
    acces:'Concours national', minAverage:15, duree:'5 ans',
    diplomes:['Ingénieur agronome'],
    description:'Grande école d\'agronomie. Horticulture, élevage, agroalimentaire.',
    lat:33.8935, lng:-5.5473, tags:['concours','public'] },

  { id:'ism', nom:'Institut Supérieur de la Magistrature', ville:'Rabat', region:'Rabat-Salé-Kénitra',
    type:'Institut public spécialisé', emoji:'⚖️',
    filieres:['economique','litteraire'],
    acces:'Concours très sélectif (après licence droit)', minAverage:15, duree:'2 ans après licence',
    diplomes:['Certificat formation judiciaire'],
    description:'Unique voie pour devenir magistrat au Maroc.',
    lat:33.9716, lng:-6.8498, tags:['top','concours','public','droit'] },
];

// ══════════════════════════════════════════════════════
// CONFIG QUESTIONNAIRE
// ══════════════════════════════════════════════════════
const SUBJECTS = [
  { key:'maths',    label:'Mathématiques', emoji:'📐' },
  { key:'physique', label:'Physique-Chimie', emoji:'⚗️' },
  { key:'svt',      label:'SVT', emoji:'🌿' },
  { key:'francais', label:'Français', emoji:'📖' },
  { key:'arabe',    label:'Arabe', emoji:'✍️' },
  { key:'anglais',  label:'Anglais', emoji:'🌍' },
  { key:'histoire', label:'Histoire-Géo', emoji:'🗺️' },
  { key:'philo',    label:'Philosophie', emoji:'💭' },
];

const PREFERENCES = [
  { key:'tech',    label:'Technologie & Informatique', emoji:'💻', desc:'Programmation, IA, réseaux' },
  { key:'bio',     label:'Biologie & Santé',           emoji:'🏥', desc:'Médecine, pharmacie, biologie' },
  { key:'business',label:'Business & Économie',        emoji:'📊', desc:'Commerce, finance, marketing' },
  { key:'art',     label:'Art & Créativité',           emoji:'🎨', desc:'Design, architecture, musique' },
  { key:'social',  label:'Sciences sociales',          emoji:'🤝', desc:'Droit, sociologie, psychologie' },
  { key:'sport',   label:'Sport & Bien-être',          emoji:'⚽', desc:'Kiné, coaching, STAPS' },
  { key:'science', label:'Sciences exactes',           emoji:'🔬', desc:'Physique, chimie, maths' },
  { key:'langue',  label:'Langues & Lettres',          emoji:'🌐', desc:'Traduction, littérature, journalisme' },
];

const OBJECTIVES = [
  { key:'argent',    label:'Bon salaire',              emoji:'💰', desc:'Priorité à la rémunération' },
  { key:'passion',   label:'Passion & épanouissement', emoji:'❤️',  desc:'Faire ce qui me passionne' },
  { key:'stabilite', label:'Stabilité & sécurité',     emoji:'🛡️', desc:'Emploi stable et sûr' },
  { key:'impact',    label:'Impact social',             emoji:'🌱', desc:'Aider la société' },
  { key:'voyage',    label:'Voyager & international',  emoji:'✈️', desc:'Carrière internationale' },
  { key:'creation',  label:'Créer & entreprendre',     emoji:'🚀', desc:'Monter mon entreprise' },
];
/* ============================================================
   engine.js — Moteur de scoring et calcul de compatibilité
   ============================================================ */

/**
 * Calcule les résultats complets à partir du profil utilisateur.
 * @param {Object} profile - { grades, preferences, objectives }
 * @returns {Object} résultats complets
 */
function calculateResults(profile) {
  const { grades, preferences, objectives } = profile;

  // ── 1. Score filières ──
  const filiereScores = FILIERES.map(filiere => {
    let score = 0;

    // Notes (60%)
    filiere.subjectWeights.forEach(({ subject, weight }) => {
      const note = grades[subject] || 0;
      score += (note / 20) * weight * 60;
    });

    // Préférences (25%)
    const prefMatch = filiere.preferences.filter(p => preferences.includes(p)).length;
    score += (prefMatch / Math.max(filiere.preferences.length, 1)) * 25;

    // Objectifs (15%)
    const objMatch = filiere.objectives.filter(o => objectives.includes(o)).length;
    score += (objMatch / Math.max(filiere.objectives.length, 1)) * 15;

    return { ...filiere, score: Math.round(Math.min(score, 100)) };
  });

  filiereScores.sort((a, b) => b.score - a.score);

  // ── 2. Score métiers ──
  const metierScores = METIERS.map(metier => {
    let score = 0;

    // Notes requises (30%)
    if (metier.requiredSubjects && metier.requiredSubjects.length) {
      let subScore = 0;
      metier.requiredSubjects.forEach(({ subject, minNote }) => {
        const note = grades[subject] || 0;
        if (note >= minNote) subScore += 15;
        else subScore += Math.max(0, 15 - (minNote - note) * 3);
      });
      score += subScore;
    } else {
      score += 20; // Pas de prérequis = accessible
    }

    // Préférences (40%)
    const prefMatch = metier.preferences.filter(p => preferences.includes(p)).length;
    score += prefMatch * 20;

    // Objectifs (20%)
    const objMatch = metier.objectives.filter(o => objectives.includes(o)).length;
    score += objMatch * 15;

    // Filière alignée (10%)
    const topFiliere = filiereScores[0];
    if (topFiliere && metier.filieres.includes(topFiliere.id)) score += 15;

    return { ...metier, score: Math.round(Math.min(score, 100)) };
  });

  metierScores.sort((a, b) => b.score - a.score);

  // ── 3. Écoles compatibles ──
  const avg = computeAverage(grades);
  const topFiliereIds = filiereScores.slice(0, 3).map(f => f.id);

  const schoolScores = SCHOOLS.map(school => {
    let score = 0;
    const match = school.filieres.some(f => topFiliereIds.includes(f));
    if (match) score += 50;
    if (avg >= school.minAverage) score += 30;
    else score += Math.max(0, 30 - (school.minAverage - avg) * 5);
    return { ...school, score: Math.round(score) };
  })
  .filter(s => s.score >= 35)
  .sort((a, b) => b.score - a.score);

  return {
    topFilieres: filiereScores.slice(0, 3),
    topMetiers:  metierScores.slice(0, 12),
    topSchools:  schoolScores.slice(0, 16),
    averageNote: avg,
    profile,
  };
}

/** Calcule la moyenne générale */
function computeAverage(grades) {
  const vals = Object.values(grades).filter(v => v > 0);
  if (!vals.length) return 0;
  return Math.round((vals.reduce((a, b) => a + b, 0) / vals.length) * 10) / 10;
}

/** Filtre les écoles proches selon lat/lng */
function filterSchoolsByDistance(lat, lng, maxKm = 100) {
  return SCHOOLS
    .map(s => ({ ...s, distance: haversine(lat, lng, s.lat, s.lng) }))
    .filter(s => s.distance <= maxKm)
    .sort((a, b) => a.distance - b.distance);
}

/** Formule de Haversine (distance en km) */
function haversine(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = Math.sin(dLat/2)**2 + Math.cos(lat1*Math.PI/180)*Math.cos(lat2*Math.PI/180)*Math.sin(dLon/2)**2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
}
/* ============================================================
   chatbot.js — Chatbot sans API, logique JavaScript pure
   ============================================================ */

// ── Détection d'intention ──
function detectIntent(msg) {
  const m = msg.toLowerCase();
  if (/filière|filiere|section|spécialité/.test(m))             return 'FILIERE';
  if (/après bac|apres bac|que faire|quoi faire|post.bac/.test(m)) return 'POST_BAC';
  if (/métier|metier|travail|profession|carrière/.test(m))      return 'METIER';
  if (/école|ecole|université|universite|formation/.test(m))    return 'ECOLE';
  if (/salaire|combien|gagner|rémunération/.test(m))            return 'SALAIRE';
  if (/difficulté|difficile|dur|concours/.test(m))              return 'DIFFICULTE';
  if (/prépa|cpge|classe prépa/.test(m))                        return 'PREPA';
  if (/international|étranger|france|canada/.test(m))           return 'INTERNATIONAL';
  if (/bonjour|salam|salut|hello|bonsoir/.test(m))              return 'GREETING';
  if (/merci|شكرا|barak/.test(m))                               return 'THANKS';
  if (/aide|help|aidez|que peux|comment/.test(m))               return 'HELP';
  if (/médecine|medecine|docteur/.test(m))                      return 'MEDECINE';
  if (/informatique|dev|programmation/.test(m))                 return 'TECH';
  if (/ingénieur|ingenieur/.test(m))                            return 'INGENIEUR';
  if (/rabat|casa|marrakech|fes|agadir|tanger/.test(m))         return 'VILLE';
  return 'GENERAL';
}

// ── Extraction entités ──
function extractEntities(msg) {
  const m = msg.toLowerCase();
  const e = {};
  if (/rabat/.test(m))             e.ville = 'Rabat';
  if (/casablanca|casa/.test(m))   e.ville = 'Casablanca';
  if (/marrakech/.test(m))         e.ville = 'Marrakech';
  if (/fes|fès/.test(m))           e.ville = 'Fès';
  if (/agadir/.test(m))            e.ville = 'Agadir';
  if (/tanger/.test(m))            e.ville = 'Tanger';
  if (/médecine|medecine/.test(m)) e.domaine = 'medecine';
  if (/informatique|dev/.test(m))  e.domaine = 'tech';
  if (/commerce|business/.test(m)) e.domaine = 'business';
  if (/ingénieur/.test(m))         e.domaine = 'ingenieur';
  return e;
}

// ── Contexte utilisateur global ──
let _chatProfile  = null;
let _chatResults  = null;

function setChatContext(profile, results) {
  _chatProfile = profile;
  _chatResults = results;
}

// ── Génération de réponse ──
function generateBotResponse(userMsg) {
  const intent   = detectIntent(userMsg);
  const entities = extractEntities(userMsg);
  const profile  = _chatProfile;
  const results  = _chatResults;
  const hasProfile = profile && Object.values(profile.grades || {}).some(v => v > 0);
  const avg = hasProfile ? computeAverage(profile.grades) : null;

  switch (intent) {

    case 'GREETING':
      return {
        text: hasProfile
          ? `Salam 👋 ! Je vois que tu as rempli ton profil (moyenne ${avg}/20). Comment puis-je t'aider ?`
          : `Salam 👋 ! Je suis ton assistant d'orientation marocaine. Pose-moi tes questions sur ta filière, tes métiers ou tes écoles !`,
        suggestions: ['Quelle filière choisir ?', 'Quels métiers ?', 'Quelles écoles ?'],
      };

    case 'FILIERE':
      if (!hasProfile) {
        return {
          text: `Pour te recommander une filière, j'ai besoin de connaître tes notes. Remplis d'abord le questionnaire !`,
          suggestions: ['Commencer le questionnaire'],
          action: 'quiz',
        };
      }
      if (results && results.topFilieres && results.topFilieres.length) {
        const top = results.topFilieres[0];
        return {
          text: `D'après ton profil (moyenne ${avg}/20), la filière **${top.label}** te correspond le mieux avec un score de **${top.score}%**.\n\nElle ouvre vers : ${top.debouches.join(', ')}.`,
          suggestions: ['Voir mes résultats complets', 'Quels métiers dans cette filière ?'],
          action: 'results',
        };
      }
      if (avg >= 15) {
        return { text: `Avec ${avg}/20, la filière **Scientifique** ou les classes **CPGE** s'ouvrent à toi ! Tu as d'excellentes bases.`, suggestions: ['Passer le questionnaire complet'] };
      }
      if (avg >= 12) {
        return { text: `Ta moyenne de ${avg}/20 convient à plusieurs filières. Complète le questionnaire pour une analyse précise !`, suggestions: ['Commencer le questionnaire'] };
      }
      return { text: `Même avec une moyenne modeste, des filières comme **Économique** ou **Littéraire** te sont accessibles. L'OFPPT propose aussi d'excellentes formations techniques !`, suggestions: ['Voir les formations OFPPT'] };

    case 'MEDECINE':
      return {
        text: `La médecine au Maroc prend **6 à 9 ans** d'études. L'accès est via un **concours national très sélectif** (Numerus Clausus). Il faut un bac scientifique avec de très bonnes notes (SVT et Physique 14+).\n\n💊 Métiers disponibles : Médecin généraliste, Spécialiste, Pharmacien, Dentiste...\n\n💰 Salaire médecin : 15 000 – 40 000 MAD/mois`,
        suggestions: ['Quelles facultés de médecine ?', 'Quel salaire médecin au Maroc ?'],
      };

    case 'TECH':
      return {
        text: `Le secteur tech au Maroc est en **forte croissance** !\n\nMétiers les + demandés :\n• 💻 Développeur web — 6 000-20 000 MAD/mois\n• 🤖 Data Scientist — 10 000-35 000 MAD/mois\n• 🔐 Cybersécurité — 12 000-35 000 MAD/mois\n\nFormations : ENSIAS, EMSI, OFPPT, Universités (MIAGE)`,
        suggestions: ['Écoles informatique Maroc', 'Formation développeur web'],
      };

    case 'INGENIEUR':
      return {
        text: `Pour devenir ingénieur au Maroc, deux voies :\n\n📚 **Voie Classes Prépa → Grandes Écoles** : EMI, EHTP, ENSIAS (très sélectif, moy. 17+)\n\n🎓 **Voie ENSA (accès bac direct)** : 8 ENSA dans le pays (moy. 14-15+)\n\n💰 Salaire ingénieur : 8 000 – 30 000 MAD/mois`,
        suggestions: ['Liste des ENSAs', 'EMI vs EHTP', 'Conditions d\'accès'],
      };

    case 'METIER':
      if (results && results.topMetiers && results.topMetiers.length) {
        const top3 = results.topMetiers.slice(0, 3);
        return {
          text: `D'après ton profil, tes 3 métiers les + compatibles :\n\n${top3.map((m,i) => `${i+1}. ${m.emoji} **${m.label}** (${m.score}%) — ${m.salaire.maroc}`).join('\n')}`,
          suggestions: ['Voir tous mes métiers', 'Plus d\'infos sur un métier'],
          action: 'results',
        };
      }
      return {
        text: `Je peux te parler de beaucoup de métiers ! Tu t'intéresses à quoi ?\n\n🏥 Santé  💻 Tech  📊 Business  ⚖️ Droit  ✈️ Aviation  🌾 Agriculture`,
        suggestions: ['Métiers santé', 'Métiers tech', 'Métiers business', 'Métiers bien payés'],
      };

    case 'ECOLE':
      if (entities.ville) {
        const local = SCHOOLS.filter(s => s.ville.toLowerCase().includes(entities.ville.toLowerCase())).slice(0, 4);
        if (local.length) {
          return {
            text: `Écoles à **${entities.ville}** :\n\n${local.map(s => `• ${s.emoji} **${s.nom}** (${s.type})`).join('\n')}`,
            suggestions: [`Toutes les écoles de ${entities.ville}`, 'Conditions d\'accès'],
          };
        }
      }
      if (results && results.topSchools && results.topSchools.length) {
        const tops = results.topSchools.slice(0, 4);
        return {
          text: `Les écoles les + adaptées à ton profil :\n\n${tops.map(s => `• ${s.emoji} **${s.nom}** — ${s.ville}`).join('\n')}`,
          suggestions: ['Voir toutes mes écoles', 'Explorer toutes les écoles'],
          action: 'results',
        };
      }
      return {
        text: `Je connais **${SCHOOLS.length} écoles** répertoriées au Maroc !\n\nTypes disponibles :\n🎓 Universités publiques\n⚙️ Écoles d\'ingénieurs\n📊 ENCG / ISCAE\n🛠️ OFPPT\n🏫 Universités privées`,
        suggestions: ['Écoles à Casablanca', 'Écoles ingénieurs', 'Écoles privées', 'OFPPT'],
      };

    case 'SALAIRE':
      return {
        text: `Salaires moyens au Maroc :\n\n✈️ **Pilote** : 25 000 – 60 000 MAD\n💊 **Médecin** : 15 000 – 40 000 MAD\n🔐 **Cybersécurité** : 12 000 – 35 000 MAD\n💻 **Ingénieur info** : 8 000 – 30 000 MAD\n📒 **Expert-comptable** : 10 000 – 40 000 MAD\n⚖️ **Avocat** : 8 000 – 40 000 MAD\n🎨 **Designer** : 5 000 – 18 000 MAD`,
        suggestions: ['Métiers les mieux payés', 'Salaires à l\'international'],
      };

    case 'INTERNATIONAL':
      return {
        text: `Métiers avec les meilleures opportunités internationales depuis le Maroc :\n\n💻 Développeur / Data Scientist (Remote possible)\n🔐 Cybersécurité\n✈️ Pilote de ligne\n🌐 Diplomate / Relations Internationales\n🗣️ Traducteur / Interprète\n\nPays les + accessibles : 🇫🇷 France, 🇨🇦 Canada, 🇩🇪 Allemagne, 🇦🇪 EAU`,
        suggestions: ['Formation pour l\'international', 'Écoles avec partenariats étrangers'],
      };

    case 'PREPA':
      return {
        text: `Les **Classes Préparatoires (CPGE)** durent **2 ans** après le bac et préparent aux grandes écoles.\n\nTypes :\n• **MP/MPSI** → EMI, EHTP, ENSAs\n• **BCPST** → IAV, agronomie\n• **ECG** → ISCAE, ENCG\n\n⚠️ Très difficile. Nécessite mention Bien/TB et beaucoup de travail.`,
        suggestions: ['Écoles qui recrutent en prépa', 'Alternatives sans prépa'],
      };

    case 'DIFFICULTE':
      return {
        text: `Niveau de difficulté au Maroc :\n\n🔴 **Très difficile** : Médecine, Contrôle aérien, EMI/EHTP, Magistrature\n🟠 **Difficile** : Pharmacie, ENSIAS, Expert-comptable, Data Science\n🟡 **Modéré** : ENCG, ENSA (bac direct), AUI\n🟢 **Accessible** : OFPPT, Université (licence), Tourisme`,
        suggestions: ['Mes chances d\'accès ?', 'Filières accessibles avec ma moyenne'],
      };

    case 'VILLE':
      if (entities.ville) {
        const schools = SCHOOLS.filter(s => s.ville.toLowerCase().includes(entities.ville.toLowerCase()));
        return {
          text: `${schools.length} établissement(s) trouvé(s) à **${entities.ville}** dans notre base.\n\n${schools.slice(0,4).map(s => `${s.emoji} ${s.nom}`).join('\n')}`,
          suggestions: [`Explorer toutes les écoles de ${entities.ville}`],
        };
      }
      return { text: `De quelle ville parles-tu ? Je connais les écoles dans toutes les régions du Maroc.`, suggestions: ['Rabat', 'Casablanca', 'Marrakech', 'Fès', 'Agadir'] };

    case 'HELP':
      return {
        text: `Je peux t'aider avec :\n\n🎯 **Choisir ta filière** après le bac\n💼 **Découvrir des métiers** compatibles\n🏫 **Trouver des écoles** au Maroc\n💰 **Comprendre les salaires**\n✈️ **Opportunités internationales**\n\nPose-moi n'importe quelle question !`,
        suggestions: ['Quelle filière ?', 'Quels métiers ?', 'Quelles écoles ?', 'Les mieux payés'],
      };

    case 'THANKS':
      return {
        text: `Avec plaisir ! 😊 Bonne chance dans tes études et ton orientation ! 🎓`,
        suggestions: ['Voir mes résultats', 'Explorer les métiers'],
      };

    case 'POST_BAC':
      return {
        text: `Après le bac au Maroc, plusieurs voix s'ouvrent :\n\n🎓 **Université publique** — Licence (3 ans) accessible à tous\n⚙️ **ENSA / Écoles d'ingénieurs** — Concours bac (5 ans)\n📊 **ENCG / ISCAE** — Commerce et gestion (concours)\n🛠️ **OFPPT** — Formation technique (2 ans, insertion rapide)\n🏫 **Écoles privées** — UM6P, UIR, EMSI, HEM...\n✈️ **Spécialisées** — Médecine, Pilotage, Architecture...`,
        suggestions: ['Quelles écoles d\'ingénieurs ?', 'Comment accéder à médecine ?', 'OFPPT ou université ?'],
      };

    default:
      return {
        text: `Je n'ai pas bien compris. Tu veux parler de ta **filière**, de tes **métiers** ou de tes **écoles** ?\n\nEssaie de poser ta question autrement !`,
        suggestions: ['Filière idéale ?', 'Métiers compatibles', 'Écoles recommandées'],
      };
  }
}
/* ============================================================
   ui.js — Gestion des vues, rendu HTML, animations
   ============================================================ */

// ── Navigation pages ──
function showPage(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const el = document.getElementById('page-' + pageId);
  if (el) { el.classList.add('active'); window.scrollTo(0,0); }

  // Active nav link
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  const nl = document.getElementById('nl-' + pageId);
  if (nl) nl.classList.add('active');

  // Init pages on first show
  if (pageId === 'simulation') initSimulation();
  if (pageId === 'explore')    initExplore('filieres');
}

function toggleMenu() {
  const m = document.getElementById('mobileMenu');
  m.classList.toggle('open');
}

// ── Tabs helpers ──
function switchTab(name) {
  document.querySelectorAll('#page-results .tab-content').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('#page-results .tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('tab-' + name).classList.add('active');
  event.target.classList.add('active');
}

function switchExploreTab(name) {
  document.querySelectorAll('.explore-tabs .tab-btn').forEach(b => b.classList.remove('active'));
  event.target.classList.add('active');
  initExplore(name);
}

// ── Score badge color ──
function scoreBadgeClass(score) {
  if (score >= 70) return 'badge-green';
  if (score >= 50) return 'badge-amber';
  return 'badge-slate';
}

// ── Render SVG ring ──
function renderRing(filiere) {
  const R = 40, C = 2 * Math.PI * R;
  const offset = C * (1 - filiere.score / 100);
  return `
    <div class="ring-item">
      <div style="position:relative;width:96px;height:96px;">
        <svg width="96" height="96" viewBox="0 0 100 100" style="transform:rotate(-90deg)">
          <circle cx="50" cy="50" r="${R}" fill="none" stroke="#e2e8f0" stroke-width="10"/>
          <circle cx="50" cy="50" r="${R}" fill="none"
            stroke="${filiere.color}" stroke-width="10"
            stroke-dasharray="${C}" stroke-dashoffset="${offset}"
            stroke-linecap="round"
            style="transition:stroke-dashoffset 1s ease"/>
        </svg>
        <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;flex-direction:column">
          <span style="font-size:1.1rem;font-weight:800;color:#1a1a2e">${filiere.score}%</span>
        </div>
      </div>
      <div class="ring-label">${filiere.icon} ${filiere.label.replace('Filière ','')}</div>
    </div>`;
}

// ── Render result cards ──
function renderFiliereCards(filieres) {
  return filieres.map(f => `
    <div class="result-card">
      <div class="rc-header">
        <div class="rc-left">
          <span class="rc-emoji">${f.icon}</span>
          <div><div class="rc-title">${f.label}</div></div>
        </div>
        <span class="rc-badge ${scoreBadgeClass(f.score)}">${f.score}%</span>
      </div>
      <p class="rc-desc">${f.description}</p>
      <div class="rc-tags">${(f.debouches||[]).map(d=>`<span class="tag">${d}</span>`).join('')}</div>
    </div>`).join('');
}

function renderMetierCards(metiers) {
  return metiers.map(m => `
    <div class="result-card">
      <div class="rc-header">
        <div class="rc-left">
          <span class="rc-emoji">${m.emoji}</span>
          <div>
            <div class="rc-title">${m.label}</div>
            <div class="rc-sub">${m.secteur}</div>
          </div>
        </div>
        <span class="rc-badge ${scoreBadgeClass(m.score)}">${m.score}%</span>
      </div>
      <p class="rc-desc">${m.description}</p>
      <div class="rc-meta">
        <span>🇲🇦 ${m.salaire.maroc}</span>
        <span>📅 ${m.dureeEtudes}</span>
        <span>${'⭐'.repeat(m.difficulte)}</span>
      </div>
      <div class="rc-tags">${(m.competences||[]).slice(0,4).map(c=>`<span class="tag">${c}</span>`).join('')}</div>
    </div>`).join('');
}

function renderSchoolCards(schools) {
  return schools.map(s => `
    <div class="result-card">
      <div class="rc-header">
        <div class="rc-left">
          <span class="rc-emoji">${s.emoji}</span>
          <div>
            <div class="rc-title">${s.nom}</div>
            <div class="rc-sub">📍 ${s.ville} — ${s.type}</div>
          </div>
        </div>
        <span class="rc-badge ${scoreBadgeClass(s.score)}">${s.score}%</span>
      </div>
      <p class="rc-desc">${s.description}</p>
      <div class="rc-meta">
        <span>🎯 ${s.acces}</span>
        <span>📋 Moy. min : ${s.minAverage}/20</span>
        <span>📅 ${s.duree}</span>
      </div>
      ${s.tags?.includes('top') ? '<div class="rc-tags"><span class="tag" style="background:#fef3c7;color:#92400e">⭐ Top école</span></div>' : ''}
    </div>`).join('');
}

// ── Render results page ──
function renderResultsPage(results) {
  // Average
  document.getElementById('results-avg').innerHTML =
    `Moyenne générale : <strong>${results.averageNote}/20</strong>`;

  // Rings
  document.getElementById('ringsRow').innerHTML =
    results.topFilieres.map(renderRing).join('');

  // Top filiere banner
  const top = results.topFilieres[0];
  document.getElementById('topFiliereBanner').innerHTML = top ? `
    <div style="display:flex;align-items:flex-start;gap:1rem">
      <span style="font-size:2rem">${top.icon}</span>
      <div>
        <div style="font-weight:700;color:#1a1a2e">${top.label} recommandée</div>
        <div style="font-size:.875rem;color:#64748b;margin:.3rem 0 .75rem">${top.description}</div>
        <div style="display:flex;flex-wrap:wrap;gap:.35rem">
          ${top.debouches.map(d=>`<span class="tag">${d}</span>`).join('')}
        </div>
      </div>
    </div>` : '';

  // Tabs content
  document.getElementById('tab-filieres').innerHTML =
    `<div class="cards-grid">${renderFiliereCards(results.topFilieres)}</div>`;
  document.getElementById('tab-metiers').innerHTML =
    `<div class="cards-grid">${renderMetierCards(results.topMetiers)}</div>`;
  document.getElementById('tab-schools').innerHTML =
    `<div class="cards-grid">${renderSchoolCards(results.topSchools)}</div>`;
}

// ── Explore ──
let _exploreTab = 'filieres';
let _exploreData = [];

function initExplore(tab) {
  _exploreTab = tab;
  const toolbar = document.getElementById('exploreToolbar');
  const filterEl = document.getElementById('exploreFilter');

  if (tab === 'filieres') {
    toolbar.style.display = 'none';
    renderExploreContent(FILIERES, tab);
  } else {
    toolbar.style.display = 'flex';
    filterEl.innerHTML = '<option value="">Tous</option>';
    if (tab === 'metiers') {
      _exploreData = METIERS;
      const secteurs = [...new Set(METIERS.map(m => m.secteur))].sort();
      secteurs.forEach(s => {
        const opt = document.createElement('option');
        opt.value = s; opt.textContent = s;
        filterEl.appendChild(opt);
      });
    } else {
      _exploreData = SCHOOLS;
      const types = [...new Set(SCHOOLS.map(s => s.type.split(' ')[0] + ' ' + s.type.split(' ')[1]))].sort();
      types.forEach(t => {
        const opt = document.createElement('option');
        opt.value = t; opt.textContent = t;
        filterEl.appendChild(opt);
      });
    }
    document.getElementById('exploreSearch').value = '';
    filterEl.value = '';
    renderExploreContent(_exploreData, tab);
  }
}

function filterExplore() {
  const search = document.getElementById('exploreSearch').value.toLowerCase();
  const filter = document.getElementById('exploreFilter').value;
  let data = _exploreData;
  if (search) data = data.filter(d =>
    (d.label||d.nom||'').toLowerCase().includes(search) ||
    (d.secteur||d.ville||'').toLowerCase().includes(search)
  );
  if (filter) data = data.filter(d =>
    (d.secteur === filter) || (d.type && d.type.startsWith(filter))
  );
  renderExploreContent(data, _exploreTab);
}

function renderExploreContent(data, tab) {
  const el = document.getElementById('explore-content');
  if (!data.length) {
    el.innerHTML = '<div style="text-align:center;padding:3rem;color:#94a3b8;">Aucun résultat trouvé</div>';
    return;
  }
  let html = '<div class="cards-grid">';
  if (tab === 'filieres') {
    html += data.map(f => `
      <div class="result-card">
        <div class="rc-header">
          <div class="rc-left">
            <span class="rc-emoji">${f.icon}</span>
            <div><div class="rc-title">${f.label}</div></div>
          </div>
        </div>
        <p class="rc-desc">${f.description}</p>
        <div class="rc-tags">${f.debouches.map(d=>`<span class="tag">${d}</span>`).join('')}</div>
      </div>`).join('');
  } else if (tab === 'metiers') {
    html += data.map(m => `
      <div class="result-card">
        <div class="rc-header">
          <div class="rc-left">
            <span class="rc-emoji">${m.emoji}</span>
            <div><div class="rc-title">${m.label}</div><div class="rc-sub">${m.secteur}</div></div>
          </div>
        </div>
        <p class="rc-desc">${m.description}</p>
        <div class="rc-meta">
          <span>🇲🇦 ${m.salaire.maroc.split('–')[0].trim()}</span>
          <span>${'⭐'.repeat(m.difficulte)}</span>
        </div>
        <div class="rc-tags">${(m.competences||[]).slice(0,3).map(c=>`<span class="tag">${c}</span>`).join('')}</div>
      </div>`).join('');
  } else {
    html += data.map(s => `
      <div class="result-card">
        <div class="rc-header">
          <div class="rc-left">
            <span class="rc-emoji">${s.emoji}</span>
            <div>
              <div class="rc-title">${s.nom}</div>
              <div class="rc-sub">📍 ${s.ville} — ${s.type}</div>
            </div>
          </div>
        </div>
        <p class="rc-desc">${s.description}</p>
        <div class="rc-meta">
          <span>🎯 ${s.acces}</span>
          <span>📋 Min: ${s.minAverage}/20</span>
        </div>
        ${s.tags?.includes('top') ? '<div class="rc-tags"><span class="tag" style="background:#fef3c7;color:#92400e">⭐ Top</span></div>' : ''}
      </div>`).join('');
  }
  html += '</div>';
  el.innerHTML = html;
}

// ── Simulation ──
let _simGrades = {};

function initSimulation() {
  const defaults = { maths:14, physique:13, svt:12, francais:12, arabe:13, anglais:13, histoire:11, philo:11 };
  SUBJECTS.forEach(s => { _simGrades[s.key] = defaults[s.key] || 12; });
  renderSimSliders();
  updateSimResults();
}

function resetSim() {
  initSimulation();
}

function renderSimSliders() {
  const el = document.getElementById('simSliders');
  el.innerHTML = SUBJECTS.map(s => `
    <div class="grade-row">
      <span class="grade-emoji">${s.emoji}</span>
      <div class="grade-info">
        <div class="grade-label-row">
          <span class="grade-label">${s.label}</span>
          <span class="grade-badge" id="simBadge-${s.key}">${_simGrades[s.key]}/20</span>
        </div>
        <input type="range" min="0" max="20" step="0.5"
          value="${_simGrades[s.key]}"
          oninput="onSimSlider('${s.key}', this.value)" />
      </div>
    </div>`).join('');
}

function onSimSlider(key, val) {
  _simGrades[key] = parseFloat(val);
  document.getElementById('simBadge-' + key).textContent = parseFloat(val).toFixed(0) + '/20';
  updateSimResults();
}

function updateSimResults() {
  const profile = { grades: _simGrades, preferences:[], objectives:[] };
  const res = calculateResults(profile);

  document.getElementById('simAvg').textContent = `Moyenne : ${res.averageNote}/20`;

  // Filieres bars
  document.getElementById('simFilieres').innerHTML = res.topFilieres.map(f => `
    <div class="sim-filiere-row">
      <span class="sim-filiere-emoji">${f.icon}</span>
      <div class="sim-filiere-info">
        <div class="sim-filiere-name">${f.label.replace('Filière ','')}</div>
        <div class="sim-bar-track">
          <div class="sim-bar-fill" style="width:${f.score}%"></div>
        </div>
      </div>
      <span class="sim-filiere-score">${f.score}%</span>
    </div>`).join('');

  // Top metiers
  document.getElementById('simMetiers').innerHTML = res.topMetiers.slice(0,6).map(m => `
    <div class="sim-metier-row">
      <div class="sim-metier-left">
        <span>${m.emoji}</span>
        <span class="sim-metier-name">${m.label}</span>
      </div>
      <span class="sim-score-badge ${scoreBadgeClass(m.score)}">${m.score}%</span>
    </div>`).join('');
}
/* ============================================================
   app.js — Point d'entrée principal, gestion quiz et chatbot
   ============================================================ */

// ══════════════════════════════════════════════════════
// ÉTAT GLOBAL
// ══════════════════════════════════════════════════════
let appState = {
  currentStep: 1,
  totalSteps: 3,
  grades: {},
  preferences: [],
  objectives: [],
  results: null,
};

// ══════════════════════════════════════════════════════
// INIT APP
// ══════════════════════════════════════════════════════
(function init() {
  initGradesUI();
  initPrefsUI();
  initObjUI();
  initChatbot();
})();

// ══════════════════════════════════════════════════════
// QUIZ — Step 1 : Notes
// ══════════════════════════════════════════════════════
function initGradesUI() {
  const grid = document.getElementById('gradesGrid');
  // Init grades
  SUBJECTS.forEach(s => { appState.grades[s.key] = 12; });

  grid.innerHTML = SUBJECTS.map(s => `
    <div class="grade-row">
      <span class="grade-emoji">${s.emoji}</span>
      <div class="grade-info">
        <div class="grade-label-row">
          <span class="grade-label">${s.label}</span>
          <span class="grade-badge" id="badge-${s.key}">12/20</span>
        </div>
        <input type="range" min="0" max="20" step="0.5"
          value="12"
          oninput="onGradeChange('${s.key}', this.value)" />
      </div>
    </div>`).join('');
}

function onGradeChange(key, val) {
  appState.grades[key] = parseFloat(val);
  const badge = document.getElementById('badge-' + key);
  badge.textContent = parseFloat(val).toFixed(0) + '/20';
  // Update badge color
  const n = parseFloat(val);
  badge.style.background = n >= 16
    ? 'linear-gradient(135deg,#10b981,#059669)'
    : n >= 12
    ? 'linear-gradient(135deg,#6366f1,#8b5cf6)'
    : n >= 10
    ? 'linear-gradient(135deg,#f59e0b,#d97706)'
    : 'linear-gradient(135deg,#ef4444,#dc2626)';
}

// ══════════════════════════════════════════════════════
// QUIZ — Step 2 : Préférences
// ══════════════════════════════════════════════════════
function initPrefsUI() {
  const grid = document.getElementById('prefGrid');
  grid.innerHTML = PREFERENCES.map(p => `
    <div class="pref-card" id="pref-${p.key}" onclick="togglePref('${p.key}', 'preferences')">
      <div class="pf-emoji">${p.emoji}</div>
      <div class="pf-title">${p.label}</div>
      <div class="pf-desc">${p.desc}</div>
      <span class="sel-badge">✓ Sélectionné</span>
    </div>`).join('');
}

// ══════════════════════════════════════════════════════
// QUIZ — Step 3 : Objectifs
// ══════════════════════════════════════════════════════
function initObjUI() {
  const grid = document.getElementById('objGrid');
  grid.innerHTML = OBJECTIVES.map(o => `
    <div class="pref-card" id="obj-${o.key}" onclick="togglePref('${o.key}', 'objectives')">
      <div class="pf-emoji">${o.emoji}</div>
      <div class="pf-title">${o.label}</div>
      <div class="pf-desc">${o.desc}</div>
      <span class="sel-badge">✓ Sélectionné</span>
    </div>`).join('');
}

function togglePref(key, type) {
  const prefix = type === 'preferences' ? 'pref-' : 'obj-';
  const arr = appState[type];
  const idx = arr.indexOf(key);
  const card = document.getElementById(prefix + key);

  if (idx === -1) {
    arr.push(key);
    card.classList.add('selected');
    card.querySelector('.sel-badge').style.display = 'inline-block';
  } else {
    arr.splice(idx, 1);
    card.classList.remove('selected');
    card.querySelector('.sel-badge').style.display = 'none';
  }
}

// ══════════════════════════════════════════════════════
// QUIZ — Navigation
// ══════════════════════════════════════════════════════
function quizNext() {
  if (appState.currentStep < appState.totalSteps) {
    goToStep(appState.currentStep + 1);
  } else {
    // Calculer et afficher les résultats
    const profile = {
      grades:      appState.grades,
      preferences: appState.preferences,
      objectives:  appState.objectives,
    };
    const results = calculateResults(profile);
    appState.results = results;

    // Donner le contexte au chatbot
    setChatContext(profile, results);

    renderResultsPage(results);
    showPage('results');
  }
}

function quizBack() {
  if (appState.currentStep > 1) goToStep(appState.currentStep - 1);
}

function goToStep(step) {
  // Masquer ancienne étape
  document.getElementById('step-' + appState.currentStep).classList.add('hidden');

  appState.currentStep = step;

  // Afficher nouvelle étape
  document.getElementById('step-' + step).classList.remove('hidden');

  // Mise à jour UI progress
  document.getElementById('quiz-step-label').textContent = `Étape ${step} sur ${appState.totalSteps}`;
  document.getElementById('progressFill').style.width = `${(step / appState.totalSteps) * 100}%`;

  // Steps indicators
  for (let i = 1; i <= appState.totalSteps; i++) {
    const ps = document.getElementById('ps-' + i);
    if (i < step)      { ps.classList.add('done');   ps.classList.remove('active'); ps.querySelector('span').textContent = '✓'; }
    else if (i === step){ ps.classList.add('active'); ps.classList.remove('done'); ps.querySelector('span').textContent = i; }
    else               { ps.classList.remove('active','done'); ps.querySelector('span').textContent = i; }

    if (i < appState.totalSteps) {
      const pl = document.getElementById('pl-' + i);
      if (i < step) pl.classList.add('done');
      else          pl.classList.remove('done');
    }
  }

  // Boutons
  document.getElementById('btnBack').disabled = step === 1;
  document.getElementById('btnNext').textContent = step === appState.totalSteps ? '🎯 Voir mes résultats' : 'Suivant →';
}

// ══════════════════════════════════════════════════════
// CHATBOT — Gestion
// ══════════════════════════════════════════════════════
let _chatOpen = false;

function initChatbot() {
  // Message de bienvenue
  addBotMessage({
    text: 'Salam 👋 ! Je suis ton assistant d\'orientation marocaine. Pose-moi tes questions !',
    suggestions: ['Quelle filière choisir ?', 'Quels métiers me correspondent ?', 'Quelles écoles ?'],
  });
}

function toggleChat() {
  _chatOpen = !_chatOpen;
  const win = document.getElementById('chatWindow');
  const fab = document.getElementById('chatFab');
  if (_chatOpen) {
    win.classList.add('open');
    fab.textContent = '✕';
    document.getElementById('chatInput').focus();
  } else {
    win.classList.remove('open');
    fab.textContent = '💬';
  }
}

function sendChat() {
  const input = document.getElementById('chatInput');
  const msg = input.value.trim();
  if (!msg) return;
  input.value = '';

  // Afficher message user
  addUserMessage(msg);

  // Effacer suggestions
  document.getElementById('chatSuggestions').innerHTML = '';

  // Typing indicator
  const typingId = addTypingIndicator();

  setTimeout(() => {
    removeTypingIndicator(typingId);
    const response = generateBotResponse(msg);
    addBotMessage(response);

    // Action spéciale
    if (response.action === 'quiz')    setTimeout(() => { toggleChat(); showPage('quiz'); }, 800);
    if (response.action === 'results' && appState.results) setTimeout(() => { toggleChat(); showPage('results'); }, 800);
  }, 600 + Math.random() * 400);
}

function onSuggestion(text) {
  document.getElementById('chatSuggestions').innerHTML = '';
  addUserMessage(text);
  const typingId = addTypingIndicator();
  setTimeout(() => {
    removeTypingIndicator(typingId);
    const response = generateBotResponse(text);
    addBotMessage(response);
  }, 500);
}

function addUserMessage(text) {
  const el = document.createElement('div');
  el.className = 'chat-msg user';
  el.textContent = text;
  document.getElementById('chatMessages').appendChild(el);
  scrollChat();
}

function addBotMessage(response) {
  const msgs = document.getElementById('chatMessages');
  const el = document.createElement('div');
  el.className = 'chat-msg bot';
  // Render **bold** markdown simple
  el.innerHTML = response.text.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br>');
  msgs.appendChild(el);

  // Suggestions
  if (response.suggestions && response.suggestions.length) {
    const sug = document.getElementById('chatSuggestions');
    sug.innerHTML = response.suggestions.map(s =>
      `<button class="sug-btn" onclick="onSuggestion('${s.replace(/'/g,"\\'")}')">${s}</button>`
    ).join('');
  }
  scrollChat();
}

let _typingCount = 0;
function addTypingIndicator() {
  const id = 'typing-' + (++_typingCount);
  const el = document.createElement('div');
  el.className = 'chat-typing';
  el.id = id;
  el.innerHTML = '<span></span><span></span><span></span>';
  document.getElementById('chatMessages').appendChild(el);
  scrollChat();
  return id;
}
function removeTypingIndicator(id) {
  const el = document.getElementById(id);
  if (el) el.remove();
}
function scrollChat() {
  const msgs = document.getElementById('chatMessages');
  setTimeout(() => { msgs.scrollTop = msgs.scrollHeight; }, 50);
}

// ══════════════════════════════════════════════════════
// GÉOLOCALISATION
// ══════════════════════════════════════════════════════
function requestGeolocation(callback) {
  if (!navigator.geolocation) {
    callback(null, 'Géolocalisation non supportée');
    return;
  }
  navigator.geolocation.getCurrentPosition(
    pos => callback({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
    err => callback(null, err.message),
    { timeout: 10000 }
  );
}