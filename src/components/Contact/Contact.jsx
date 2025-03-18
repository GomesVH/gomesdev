import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FaRegAddressBook, FaRegEnvelope, FaRegMap } from 'react-icons/fa';
import './contact.css';

// Componente principal do formulário de contato
const Contact = () => {
    // Estado para armazenar os valores do formulário
    const [form, setForm] = useState({
        name: '', 
        email: '', 
        subject: '',
        message: '',
    });

    // Estado para gerenciar a mensagem de status e o tipo de feedback (sucesso/erro)
    const [status, setStatus] = useState({ message: '', type: '' });

    // Função para lidar com as mudanças nos inputs do formulário
    const handleChange = (e) => {
        const { name, value } = e.target; // Captura o nome e o valor do campo
        setForm({ ...form, [name]: value }); // Atualiza apenas o campo alterado no estado
    };

    // Função para enviar o formulário usando o serviço de emailjs
    const handleSubmit = async (e) => {
        e.preventDefault(); // Evita o comportamento padrão do formulário

        try {
            // Chamada ao serviço do emailjs para enviar os dados
            const response = await emailjs.send(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,  // Service ID (armazenado em variável de ambiente)
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID, // Template ID (armazenado em variável de ambiente)
                form,                                     // Dados do formulário preenchido pelo usuário
                process.env.REACT_APP_EMAILJS_PUBLIC_KEY   // Public Key (armazenada em variável de ambiente)
            );

            console.log('SUCCESS!', response.status, response.text); // Log de sucesso para depuração

            // Reset do formulário após o envio bem-sucedido
            setForm({ name: '', email: '', subject: '', message: '' });

            // Define uma mensagem de sucesso no estado
            setStatus({ message: 'Mensagem enviada com sucesso!', type: 'success' });
        } catch (error) {
            console.error('FAILED...', error); // Log de erro para depuração

            // Define uma mensagem de erro no estado
            setStatus({ message: 'Houve um erro ao enviar a mensagem. Por favor, tente novamente.', type: 'error' });
        }
    };

    return (
        <section className="contact section" id="contact">
            {/* Título e subtítulo do formulário */}
            <h2 className="section__title text-cs">Contato</h2>
            <p className="section__subtitle">
                Venha <span>Falar comigo</span>
            </p>

            <div className="contact__container container grid">
                {/* Cartões de contato com informações pessoais */}
                <div className="contact__content">
                    <ContactCard icon={<FaRegMap />} title="Endereço" data="Barueri/SP" />
                    <ContactCard icon={<FaRegEnvelope />} title="Email" data="victorgomeslucio1@hotmail.com" />
                    <ContactCard icon={<FaRegAddressBook />} title="Telefone" data="(11) 99826-8492" />
                </div>

                {/* Formulário de contato */}
                <form className="contact__form" onSubmit={handleSubmit}>
                    {/* Exibição de mensagens de status (sucesso ou erro) */}
                    {status.message && (
                        <div className={`alert ${status.type}`}>
                            {status.message}
                        </div>
                    )}

                    {/* Grupo de campos para Nome e Email */}
                    <div className="contact__form--group grid">
                        <FormInput
                            label="Seu Nome e Sobrenome"
                            type="text"
                            name="name"
                            value={form.name}
                            handleChange={handleChange}
                            required
                        />
                        <FormInput
                            label="Seu Endereço de Email"
                            type="email"
                            name="email"
                            value={form.email}
                            handleChange={handleChange}
                            required
                        />
                    </div>

                    {/* Campo para o assunto */}
                    <FormInput
                        label="Seu Assunto"
                        type="text"
                        name="subject"
                        value={form.subject}
                        handleChange={handleChange}
                        required
                    />

                    {/* Campo para a mensagem */}
                    <FormTextArea
                        label="Sua Mensagem"
                        name="message"
                        value={form.message}
                        handleChange={handleChange}
                        required
                    />

                    {/* Botão de envio e mensagem sobre termos */}
                    <div className="contact__submit">
                        <p>* Aceite os termos e condições.</p>
                        <button type="submit" className="btn text-cs" aria-label="Enviar mensagem">
                            Enviar Mensagem
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

// Componente para exibir um cartão de contato
const ContactCard = ({ icon, title, data }) => (
    <div className="contact__card">
        <span className="contact__card--icon">{icon}</span> {/* Ícone do cartão */}
        <h3 className="contact__card--title">{title}</h3>  {/* Título do cartão */}
        <p className="contact__card--data">{data}</p>      {/* Informações do cartão */}
    </div>
);

// Componente para campos de entrada (input)
const FormInput = ({ label, type, name, value, handleChange, required }) => (
    <div className="contact__form--div">
        <label className="contact__form--tag text-cs">
            {label} {required && <b>*</b>} {/* Adiciona o asterisco para campos obrigatórios */}
        </label>
        <input
            type={type}
            name={name}
            value={value}
            onChange={handleChange}
            className="contact__form--input"
            required={required} // Define o campo como obrigatório se necessário
            aria-label={label} // Atributo para acessibilidade
        />
    </div>
);

// Componente para campos de texto longo (textarea)
const FormTextArea = ({ label, name, value, handleChange, required }) => (
    <div className="contact__form--div contact__form--area">
        <label className="contact__form--tag text-cs">
            {label} {required && <b>*</b>} {/* Adiciona o asterisco para campos obrigatórios */}
        </label>
        <textarea
            name={name}
            value={value}
            onChange={handleChange}
            className="contact__form--input"
            required={required} // Define o campo como obrigatório se necessário
            aria-label={label} // Atributo para acessibilidade
        ></textarea>
    </div>
);

export default Contact;
