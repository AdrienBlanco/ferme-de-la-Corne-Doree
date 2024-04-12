import React, { useState, useEffect } from "react";
import "./ContactForm.scss";

export default function ContactForm() {
    const captchas = [
        { question: 'Que font 7 + 2 ?', answer: '9' },
        { question: 'Que font 5 + 1 ?', answer: '6' },
        { question: 'Que font 6 + 1 ?', answer: '7' },
    ]
    const [formData, setFormData] = useState({ prenom: '', nom: '', email: '', objet: '', message: '', captcha: ''});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [currentCaptcha, setCurrentCaptcha] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const randomCaptcha = captchas[Math.floor(Math.random() * captchas.length)];
        setCurrentCaptcha(randomCaptcha);
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (currentCaptcha && formData.captcha !== currentCaptcha.answer) {
            setErrorMessage('Captcha incorrect')
            return;
        }
        setIsSubmitted(true);
        setFormData({ prenom: '', nom: '', email: '', objet: '', message: '', captcha: '' });
        setErrorMessage('');
    }

    return (
        <section className="contact" id="Contact">
            <h2 className="contact__title">Contact</h2>
            <form method="POST" className="contact__form" onSubmit={handleSubmit}>
                <div className="contact__form__inputs">
                    <div className="contact__form__inputs--wrapper">
                        <div>
                            <label htmlFor="prenom">Prénom</label>
                            <input type="text" name="prenom" id="prenom" value={formData.prenom} onChange={handleChange} required />
                        </div>
                        <div>
                            <label htmlFor="nom">Nom</label>
                            <input type="text" name="nom" id="nom" value={formData.nom} onChange={handleChange} required />
                        </div>
                    </div>
                    <div className="contact__form__inputs--wrapper">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="contact__form__inputs--wrapper">
                        <label htmlFor="objet">Objet</label>
                        <select name="objet" id="objet" value={formData.objet} onChange={handleChange} required>
                            <option value=''>Choisir...</option>
                            <option value='Chèvrerie'>Chèvrerie</option>
                            <option value='Centre équestre'>Centre équestre</option>
                        </select>
                    </div>
                    <div className="contact__form__inputs--wrapper">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" value={formData.message} onChange={handleChange} required></textarea>
                    </div>
                    <div className="contact__form__inputs--wrapper">
                        <label htmlFor="captcha">{currentCaptcha ? currentCaptcha.question : ''}</label>
                        <input type="text" name="captcha" id="captcha" value={formData.captcha} onChange={handleChange} required />
                    </div>
                </div>
                {errorMessage && <p className="error">{errorMessage}</p>}
                {isSubmitted && <p>Merci pour votre message !</p>}
                <button type="submit" className="contact__form__btn">Envoyer</button>
            </form>
        </section>
    );
}