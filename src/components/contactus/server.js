const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const admin = require('firebase-admin');

const app = express();

// Initialize Firebase Admin SDK
// Add your Firebase Admin SDK credentials file path here
const serviceAccount = require('./path/to/your/firebase-credentials.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://your-firebase-project-id.firebaseio.com',
});

app.use(cors());
app.use(bodyParser.json());

app.post('/submit-form', async (req, res) => {
  const formData = req.body;

  try {
    // Save form data to Firebase Realtime Database
    const db = admin.database();
    const ref = db.ref('contacts');
    await ref.push(formData);

    console.log('Form data submitted to Firebase.');
    res.status(200).json({ message: 'Form data submitted successfully.' });
  } catch (error) {
    console.error('Error submitting the form:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
