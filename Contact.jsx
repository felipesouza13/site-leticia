import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageCircle, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você implementaria o envio do formulário
    console.log('Formulário enviado:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Entre em <span className="text-gradient">Contato</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Estou aqui para esclarecer suas dúvidas e ajudar você a dar o primeiro passo 
            em direção ao seu bem-estar emocional.
          </p>
          
          <div className="bg-primary/10 p-6 rounded-xl border-l-4 border-primary max-w-2xl mx-auto">
            <p className="text-lg text-foreground font-medium">
              "O primeiro passo para a transformação é a coragem de buscar ajuda."
            </p>
          </div>
        </div>
      </section>

      {/* Informações de Contato e Formulário */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Informações de Contato */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Vamos Conversar?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Escolha a forma de contato que for mais conveniente para você. 
                  Respondo todas as mensagens com carinho e atenção.
                </p>
              </div>
              
              {/* Formas de Contato */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MessageCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      WhatsApp (Preferencial)
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      A forma mais rápida de entrar em contato comigo. 
                      Respondo em até 2 horas durante horário comercial.
                    </p>
                    <a
                      href="https://wa.me/5511999999999?text=Olá%20Letícia,%20gostaria%20de%20conversar%20sobre%20terapia"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-500 text-white px-6 py-3 rounded-full font-medium hover:bg-green-600 transition-colors inline-flex items-center space-x-2"
                    >
                      <MessageCircle className="h-5 w-5" />
                      <span>(11) 99999-9999</span>
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      E-mail
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      Para dúvidas mais detalhadas ou agendamentos. 
                      Respondo em até 24 horas.
                    </p>
                    <a
                      href="mailto:contato@leticiatome.com.br"
                      className="text-primary hover:text-primary/80 font-medium flex items-center space-x-2"
                    >
                      <Mail className="h-5 w-5" />
                      <span>contato@leticiatome.com.br</span>
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Atendimento
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      Atendimento exclusivamente online, para sua comodidade e segurança.
                    </p>
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <MapPin className="h-5 w-5" />
                      <span>Terapia Online - Todo o Brasil</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Horários */}
              <div className="bg-muted/30 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Horários de Atendimento
                </h3>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Segunda a Sexta:</span>
                    <span>8h às 18h</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sábado:</span>
                    <span>8h às 12h</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Domingo:</span>
                    <span>Fechado</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  * Horários especiais podem ser negociados conforme disponibilidade
                </p>
              </div>
            </div>
            
            {/* Formulário de Contato */}
            <div className="bg-card p-8 rounded-2xl shadow-sm border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Envie uma Mensagem
              </h3>
              
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="bg-green-100 p-4 rounded-full w-fit mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-2">
                    Mensagem Enviada!
                  </h4>
                  <p className="text-muted-foreground">
                    Obrigada pelo contato. Responderei em breve!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="seu@email.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Assunto *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Selecione um assunto</option>
                      <option value="primeira-consulta">Primeira Consulta</option>
                      <option value="informacoes-terapia">Informações sobre Terapia</option>
                      <option value="agendamento">Agendamento</option>
                      <option value="duvidas-gerais">Dúvidas Gerais</option>
                      <option value="outros">Outros</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Mensagem *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                      placeholder="Conte-me um pouco sobre o que você gostaria de conversar..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground px-6 py-4 rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center justify-center space-x-2"
                  >
                    <Send className="h-5 w-5" />
                    <span>Enviar Mensagem</span>
                  </button>
                  
                  <p className="text-sm text-muted-foreground text-center">
                    Ao enviar esta mensagem, você concorda com nossa{' '}
                    <a href="/politica-privacidade" className="text-primary hover:text-primary/80">
                      Política de Privacidade
                    </a>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Emergência */}
      <section className="section-padding bg-red-50 border-l-4 border-red-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-red-800 mb-4">
            Em Caso de Emergência
          </h2>
          
          <p className="text-red-700 mb-6">
            Se você está passando por uma crise emocional ou pensamentos de autolesão, 
            procure ajuda imediatamente:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-lg border border-red-200">
              <h3 className="font-semibold text-red-800 mb-2">CVV</h3>
              <p className="text-red-700 text-sm mb-2">Centro de Valorização da Vida</p>
              <a href="tel:188" className="text-red-600 font-bold">188</a>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-red-200">
              <h3 className="font-semibold text-red-800 mb-2">SAMU</h3>
              <p className="text-red-700 text-sm mb-2">Serviço de Atendimento Móvel</p>
              <a href="tel:192" className="text-red-600 font-bold">192</a>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-red-200">
              <h3 className="font-semibold text-red-800 mb-2">Emergência</h3>
              <p className="text-red-700 text-sm mb-2">Polícia Militar</p>
              <a href="tel:190" className="text-red-600 font-bold">190</a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronta para começar sua jornada?
          </h2>
          
          <p className="text-xl mb-8 opacity-90">
            O primeiro passo é sempre o mais importante. Estou aqui para acompanhar você.
          </p>
          
          <a
            href="https://wa.me/5511999999999?text=Olá%20Letícia,%20gostaria%20de%20agendar%20uma%20consulta"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-primary px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition-colors inline-flex items-center space-x-2 shadow-lg"
          >
            <MessageCircle className="h-5 w-5" />
            <span>Conversar no WhatsApp</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;

