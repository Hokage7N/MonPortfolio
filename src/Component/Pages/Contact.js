import React, { useState } from 'react';
import axios from 'axios';
import "./Contact.css";

function Contact() {
  const email = 'testhacking@gmail.com';

  const [name, setName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isMessageSent, setIsMessageSent] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmailAddress(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const validateForm = () => {
    if (!name || !emailAddress || !message) {
      setError('Veuillez remplir tous les champs du formulaire.');
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailAddress)) {
      setError('Veuillez saisir une adresse e-mail valide.');
      return false;
    }

    return true;
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      setError('');
      const formData = {
        name,
        emailAddress,
        message
      };
      axios.post('http://localhost:3000/send-email', formData)
        .then((response) => {
          console.log(response.data);
          setIsMessageSent(true);
        })
        .catch((error) => {
          console.log(error.response.data);
          setError('Une erreur est survenue lors de l\'envoi de l\'e-mail.');
        });
    }
  };
  
  return (
    <div className="contact mt-5">
      <div className="container-fluid contactContainer">
        <div className="contact-form shadow p-4">
          <div className="form-group">
            <label className="con label-center" htmlFor="name">Nom :</label>
            <input
              className="mail"
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={handleNameChange}
              required
            />
          </div>
          <div className="form-group">
            <label className="con label-center" htmlFor="email">Email :</label>
            <input
              className="mail"
              type="email"
              id="email"
              name="email"
              value={emailAddress}
              onChange={handleEmailChange}
              pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
              title="Veuillez saisir une adresse e-mail valide."
              required
            />
          </div>
          <div className="form-group">
            <label className="con label-center" htmlFor="message">Message :</label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={handleMessageChange}
              maxLength="250"
              required
            ></textarea>
          </div>
          {isMessageSent ? (
            <p className="success-message">Le message a été envoyé avec succès!</p>
          ) : (
            <button className="bu" type="submit" onClick={handleSubmit}>Envoyer</button>
          )}

          {error && <p className="error-message">{error}</p>}
        </div>
      </div>
    </div>
  );
}

export default Contact;
