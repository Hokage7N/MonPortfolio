import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

// Configuration du transporteur Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'testhacking@gmail.com',
    pass: 'monmondepasse' // Remplacez par votre mot de passe de messagerie
  }
});

app.post('/send-email', (req, res) => {
  const { name, emailAddress, message } = req.body;

  const mailOptions = {
    from: 'testhacking@gmail.com',
    to: 'testhacking@gmail.com', // Remplacez par votre adresse e-mail ici
    subject: 'Nouveau message de contact',
    text: `Nom : ${name}\nAdresse e-mail : ${emailAddress}\nMessage : ${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Erreur lors de l\'envoi de l\'e-mail :', error);
      res.status(500).json({ error: 'Une erreur est survenue lors de l\'envoi de l\'e-mail.' });
    } else {
      console.log('E-mail envoyé avec succès !');
      res.json({ success: 'Votre e-mail a été envoyé avec succès.' });
    }
  });
});


app.listen(port, () => {
  console.log(`Serveur en écoute sur le port ${port}`);
});
