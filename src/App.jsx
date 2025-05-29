import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './App.css'; 

function Popup({ show, onClose }) {
    const [state, handleSubmit] = useForm("xvgaedlq");

    if (!show) {
        return null;
    }

    if (state.succeeded) {
        return (
            <div className="popup-container">
                <div className="popup-content">
                    <span className="close-btn" onClick={onClose}>&times;</span>
                    <p>Obrigado! Entraremos em contato em breve.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="popup-container">
            <div className="popup-content">
                <span className="close-btn" onClick={onClose}>&times;</span>
                <h2>Entre em Contato!</h2>
                <p>Preencha o formulário abaixo e entraremos em contato para explicar tudo!</p>
                <form onSubmit={handleSubmit} method='POST' id="contactForm">
                    <label htmlFor="nome">Seu Nome:</label>
                    <input type="text" id="nome" name="nome" required />
                    <ValidationError prefix="Nome" field="nome" errors={state.errors} />

                    <label htmlFor="loja">Nome da Loja:</label>
                    <input type="text" id="loja" name="loja" required />
                    <ValidationError prefix="Loja" field="loja" errors={state.errors} />

                    <label htmlFor="email">Seu Email:</label>
                    <input type="email" id="email" name="email" required />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />

                    <label htmlFor="whatsapp">Seu WhatsApp:</label>
                    <input type="tel" id="whatsapp" name="whatsapp" required />
                    <ValidationError prefix="Whatsapp" field="whatsapp" errors={state.errors} />

                    <button type="submit" disabled={state.submitting}>Enviar Interesse</button>
                </form>
            </div>
        </div>
    );
}


function App() {
   
    const [isPopupVisible, setPopupVisible] = useState(false);

    
    const handleOpenPopup = () => {
        setPopupVisible(true);
    };

    
    const handleClosePopup = () => {
        setPopupVisible(false);
    };

    const startupName = "Achô!"; 

    return (
        <div className="App">
            <header>
              
            </header>

            <div className="grid-container">
                <section id="problema">
                    <h2>Sua loja física está perdendo vendas online?</h2>
                    <p>Você trabalha duro, atende bem, mas vê os clientes a comprar cada vez mais pela internet? Sente que a concorrência dos grandes sites está a apertar e que é difícil competir online? Muitos clientes adorariam comprar de você pela internet, mas não encontram a sua loja lá. Não deixe as suas vendas escaparem!</p>
                </section>

                <section id="solucao">
                    <h2>Nós Trazemos a Sua Loja para o Mundo Digital!</h2>
                    <p>Chegou a <strong>{startupName}</strong>! A plataforma de vendas online feita <em>exclusivamente</em> para o comércio da nossa cidade. Nós criamos a sua loja online, mostramos os seus produtos e conectamos você diretamente aos clientes que querem comprar localmente, com a confiança e a agilidade que só você pode oferecer.</p>
                </section>

                <section id="mvp">
                    <h2>O Que é o MVP?</h2>
                    <p>Nosso MVP (Produto Mínimo Viável) é a sua loja online personalizada, pronta para receber pedidos e interagir com os clientes. É uma solução simples, rápida e eficaz para você começar a vender online sem complicações.</p>
                    <div className="mvp-gallery">
                        <img src="/1.png" alt="Começo" />
                        <img src="/2.png" alt="Tela de login" />
                        <img src="/3.png" alt="Tela inicial" />
                        <img src="/4.png" alt="Tela de avaliação" />       
                        <img src="/5.png" alt="Tela de produtos" />
                    </div>
                </section>

                <section id="como-funciona">
                    <h2>Como Funciona? É Simples!</h2>
                    <ol>
                        <li><strong>Conversa Rápida:</strong> Entendemos a sua loja e o que você precisa.</li>
                        <li><strong>Sua Vitrine Online:</strong> Criamos a sua página com os seus produtos e a sua marca.</li>
                        <li><strong>Clientes Comprando:</strong> Você começa a receber pedidos e a interagir com os clientes (pela plataforma ou direto no WhatsApp!).</li>
                        <li><strong>Suporte Sempre Perto:</strong> Estamos aqui na cidade para ajudar no que for preciso.</li>
                    </ol>
                </section>
                <section id="beneficios">
                    <h2>O Que Você Ganha?</h2>
                    <ul>
                        <li>✅ <strong>Mais Visibilidade:</strong> Apareça para quem procura comprar na nossa cidade.</li>
                        <li>✅ <strong>Aumento nas Vendas:</strong> Não perca mais nenhum cliente por não estar online.</li>
                        <li>✅ <strong>Conexão Local:</strong> Fortaleça o seu laço com a comunidade.</li>
                        <li>✅ <strong>Facilidade Total:</strong> Deixe a tecnologia conosco e foque no seu negócio.</li>
                        <li>✅ <strong>Entrega Ágil:</strong> Use a sua proximidade como vantagem competitiva.</li>
                    </ul>
                </section>
            </div>

            <section id="cta">
                <h2>Pronto para Vender Mais?</h2>
                <p>Quer fazer parte do grupo exclusivo de <strong>15 lojas pioneiras</strong> que vão transformar o comércio local e garantir <strong>condições super especiais</strong>? Esta é a sua chance de sair na frente! Clique no botão abaixo, preencha o formulário (não leva nem 2 minutos!) e nós entraremos em contato para explicar tudo, sem compromisso.</p>
                <button onClick={handleOpenPopup}>Sim, Quero Vender Online!</button>
            </section>

            <footer>
                <p>&copy; 2025 {startupName}. Todos os direitos reservados.</p>
            </footer>

            {/* Renderiza o Popup apenas se isPopupVisible for true */}
            <Popup show={isPopupVisible} onClose={handleClosePopup} />
        </div>
    );
}

export default App;