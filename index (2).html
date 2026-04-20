// ============================================================
// DIGGA GROUP — SHARED CONFIG
// Replace these values after setting up Airtable
// ============================================================
const AIRTABLE_API_KEY = 'patlKvHGDtaXPGzqB.233c1a4e5171390463744c9b15f5ce9ec644c8b00ac5fc0d606d3dfce716a3b0';  // paste from Airtable
const AIRTABLE_BASE_ID = 'appILPYnmVRt5yAfh';            // paste from Airtable
const BASE_URL = 'https://diggagroup.github.io/Digga-quote-'; // your GitHub Pages URL

const AIRTABLE_URL = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/Jobs`;

// Field names matching your Airtable columns
const FIELDS = {
  jobId:        'Job ID',
  status:       'Status',
  address:      'Property Address',
  contactName:  'Contact Name',
  phone:        'Phone',
  email:        'Email',
  adminNotes:   'Admin Notes',
  occupancy:    'Occupancy',
  power:        'Power',
  gas:          'Gas',
  powerMeter:   'Power Meter',
  gasMeter:     'Gas Meter',
  vacancyDate:  'Vacancy Date',
  demolition:   'Demolition Scope',
  structure:    'Structure Type',
  storeys:      'Storeys',
  basement:     'Basement',
  roof:         'Roof',
  asbestos:     'Asbestos',
  asbestosOther:'Asbestos Other',
  walls:        'External Walls',
  outbuildings: 'Outbuildings',
  outbuildingsOther: 'Outbuildings Other',
  outbuildingsM2: 'Outbuildings M2',
  rubbish:      'Rubbish',
  yard:         'Yard',
  fences:       'Fences',
  access:       'Access',
  equipment:    'Equipment',
  excavator:    'Excavator Size',
  equipmentOther: 'Equipment Other',
  height:       'Height',
  safety:       'Safety',
  permit:       'Permit Required',
  protection:   'Protection Works',
  boundaryRear: 'Boundary Rear',
  boundaryFront:'Boundary Front',
  boundaryLeft: 'Boundary Left',
  boundaryRight:'Boundary Right',
  itemsRetained:'Items Retained',
  notes:        'Notes',
  estimatorNotes:'Estimator Notes',
  estimatorName: 'Estimator Name',
  estimatedCost: 'Estimated Cost',
  photos:       'Photos',  // stored as JSON string
  createdAt:    'Created At',
  updatedAt:    'Updated At',
};

// Generate unique job ID
function generateJobId() {
  const d = new Date();
  const yr = d.getFullYear().toString().slice(2);
  const mo = String(d.getMonth()+1).padStart(2,'0');
  const day = String(d.getDate()).padStart(2,'0');
  const rand = Math.random().toString(36).slice(2,6).toUpperCase();
  return `DGG-${yr}${mo}${day}-${rand}`;
}

// Save job to Airtable
async function saveToAirtable(fields, recordId = null) {
  const method = recordId ? 'PATCH' : 'POST';
  const url = recordId ? `${AIRTABLE_URL}/${recordId}` : AIRTABLE_URL;
  const resp = await fetch(url, {
    method,
    headers: {
      'Authorization': `Bearer ${AIRTABLE_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ fields })
  });
  if (!resp.ok) throw new Error(`Airtable error: ${resp.status}`);
  return resp.json();
}

// Load job from Airtable by Job ID field
async function loadJobByJobId(jobId) {
  const url = `${AIRTABLE_URL}?filterByFormula=${encodeURIComponent(`{Job ID}="${jobId}"`)}`;
  const resp = await fetch(url, {
    headers: { 'Authorization': `Bearer ${AIRTABLE_API_KEY}` }
  });
  if (!resp.ok) throw new Error(`Airtable error: ${resp.status}`);
  const data = await resp.json();
  if (!data.records || data.records.length === 0) return null;
  return data.records[0];
}

// Toast notification
function showToast(msg, type='info') {
  let t = document.getElementById('toast');
  if (!t) { t = document.createElement('div'); t.id='toast'; document.body.appendChild(t); }
  t.textContent = msg;
  t.className = `toast toast-${type} show`;
  setTimeout(() => t.classList.remove('show'), 3000);
}

// Get URL param
function getParam(name) {
  return new URLSearchParams(window.location.search).get(name);
}
