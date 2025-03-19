import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { 
    FaRegAddressBook, 
    FaRegEnvelope, 
    FaRegUser, 
    FaRegMap 
} from 'react-icons/fa';
import './contact.css';

const Contact = () => {
    const [form, setForm] = useState({
        name: '', 
        email: '', 
        subject: '',
        message: '',
    });

    const [statusMessage, setStatusMessage] = useState(''); // Estado para a mensagem de status
    const [statusClass, setStatusClass] = useState(''); // Estado para a classe CSS de sucesso/erro

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(
                'service_h7m1ghq',  // Seu Service ID
                'template_84v1edx', // Seu Template ID
                form,               // O objeto 'form' com os dados preenchidos pelo usuário
                'nbdoT5-iTxefkM_fr' // Seu Public Key (User ID)
        ).then((response) => {
            console.log('SUCCESS!', response.status, response.text);

            // Limpa o formulário
            setForm({
                name: '', 
                email: '', 
                subject: '',
                message: ''
            });

            // Exibe mensagem de sucesso
            setStatusMessage('Mensagem enviada com sucesso!');
            setStatusClass('success');

        }).catch((error) => {
            console.error('FAILED...', error);

            // Exibe mensagem de erro
            setStatusMessage('Houve um erro ao enviar a mensagem. Por favor, tente novamente.');
            setStatusClass('error');
        });
    };

    return (
        <section className="contact section" id="contact">
            <h2 className="section__title text-cs">Contato</h2>
            <p className="section__subtitle">
                Venha <span>Falar comigo</span>
            </p>

            <div className="contact__container container grid">
                <div className="contact__content">
                    <div className="contact__card">
                        <span className="contact__card--icon">
                            <FaRegMap />
                        </span>

                        <h3 className="contact__card--title">Endereço</h3>
                        <p className="contact__card--data">Barueri/SP</p>
                    </div>


                    <div className="contact__card">
                        <span className="contact__card--icon">
                            <FaRegEnvelope />
                        </span>

                        <h3 className="contact__card--title">Email</h3>
                        <p className="contact__card--data">Victorgomeslucio1@hotmail.com</p>
                    </div>

                    <div className="contact__card">
                        <span className="contact__card--icon">
                            <FaRegAddressBook />
                        </span>

                        <h3 className="contact__card--title">Telefone</h3>
                        <p className="contact__card--data">(11) 99826-8492</p>
                    </div>
                </div>

                <form className="contact__form" onSubmit={handleSubmit}>
                    {/* Exibe a mensagem de status se houver */}
                    {statusMessage && (
                        <div className={`alert ${statusClass}`}>
                            {statusMessage}
                        </div>
                    )}

                    <div className="contact__form--group grid">
                        <div className="contact__form--div">
                            <label className="contact__form--tag text-cs">Seu Nome e Sobrenome <b>*</b></label>
                            <input
                                type="text" 
                                name="name" 
                                onChange={handleChange}
                                value={form.name} 
                                className="contact__form--input" 
                                required
                            />
                        </div>

                        <div className="contact__form--div">
                            <label className="contact__form--tag text-cs">Seu Endereço de Email <b>*</b></label>
                            <input 
                                type="email"
                                name="email" 
                                onChange={handleChange}
                                value={form.email}  
                                className="contact__form--input" 
                                required
                            />
                        </div>
                    </div>

                    <div className="contact__form--div">
                        <label className="contact__form--tag text-cs">Seu Assunto <b>*</b></label>
                        <input 
                            type="text" 
                            name="subject" 
                            onChange={handleChange}
                            value={form.subject} 
                            className="contact__form--input" 
                            required
                        />
                    </div>

                    <div className="contact__form--div contact__form--area">
                        <label className="contact__form--tag text-cs">Sua Mensagem <b>*</b></label>
                        <textarea 
                            name="message" 
                            onChange={handleChange}
                            value={form.message} 
                            className="contact__form--input"
                            required
                        ></textarea>
                    </div> 

                    <div className="contact__submit">
                        <p>* Aceite os termos e condições.</p>
                        <button type="submit" className="btn text-cs">
                            Enviar Mensagem
                        </button>
                    </div>                  
                </form>
            </div>
        </section>
    );
};

export default Contact;