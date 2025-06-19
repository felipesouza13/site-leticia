import React from 'react';
import { Clock, Shield, Users, MessageCircle, CheckCircle, HelpCircle, ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Primeiro Contato",
      description: "Entre em contato pelo WhatsApp ou formulário. Vamos conversar sobre suas necessidades e agendar uma primeira sessão.",
      icon: <MessageCircle className="h-8 w-8" />
    },
    {
      number: "02",
      title: "Sessão Inicial",
      description: "Na primeira sessão, nos conhecemos melhor. Você compartilha suas questões e definimos objetivos terapêuticos juntas.",
      icon: <Users className="h-8 w-8" />
    },
    {
      number: "03",
      title: "Plano Terapêutico",
      description: "Desenvolvemos um plano personalizado baseado em suas necessidades, com frequência e abordagem adequadas para você.",
      icon: <CheckCircle className="h-8 w-8" />
    },
    {
      number: "04",
      title: "Acompanhamento",
      description: "Sessões regulares focadas no seu desenvolvimento, com ferramentas práticas e suporte contínuo em sua jornada.",
      icon: <Clock className="h-8 w-8" />
    }
  ];

  const faqs = [
    {
      question: "Como funciona a terapia online?",
      answer: "A terapia online acontece através de videochamada em plataforma segura e confidencial. Você precisa apenas de um dispositivo com internet, câmera e microfone, em um local privado e confortável."
    },
    {
      question: "Qual a duração de cada sessão?",
      answer: "Cada sessão tem duração de 50 minutos. A frequência é definida conforme suas necessidades, geralmente semanal ou quinzenal."
    },
    {
      question: "Como é garantido o sigilo?",
      answer: "Sigo rigorosamente o Código de Ética do Psicólogo. Todas as informações compartilhadas são confidenciais e protegidas por sigilo profissional."
    },
    {
      question: "Preciso de algum equipamento especial?",
      answer: "Não. Você precisa apenas de um computador, tablet ou celular com internet estável, câmera e microfone funcionando."
    },
    {
      question: "Como faço o pagamento?",
      answer: "O pagamento pode ser feito via PIX, transferência bancária ou cartão de crédito. Conversamos sobre as opções na primeira sessão."
    },
    {
      question: "E se eu precisar cancelar uma sessão?",
      answer: "Você pode cancelar ou remarcar com até 24 horas de antecedência. Cancelamentos em menor prazo podem ser cobrados."
    },
    {
      question: "Quanto tempo dura o processo terapêutico?",
      answer: "Cada processo é único. Algumas questões podem ser trabalhadas em poucos meses, outras requerem mais tempo. Avaliamos juntas o progresso regularmente."
    },
    {
      question: "Posso fazer terapia mesmo sem ter um 'problema grave'?",
      answer: "Claro! A terapia é para qualquer pessoa que deseje se conhecer melhor, desenvolver-se pessoalmente ou melhorar sua qualidade de vida."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Como <span className="text-gradient">Funciona</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Entenda como é o processo terapêutico e tire todas suas dúvidas sobre 
            o atendimento psicológico online.
          </p>
          
          <div className="bg-primary/10 p-6 rounded-xl border-l-4 border-primary max-w-2xl mx-auto">
            <p className="text-lg text-foreground font-medium">
              "Um espaço seguro e acolhedor para seu crescimento pessoal, 
              no conforto da sua casa."
            </p>
          </div>
        </div>
      </section>

      {/* Processo Passo a Passo */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Passo a Passo do Atendimento
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Um processo simples e acolhedor para começar sua jornada terapêutica
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                
                <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto mb-4">
                  <div className="text-primary">{step.icon}</div>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detalhes do Atendimento */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Detalhes do Atendimento
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Horários Flexíveis
                    </h3>
                    <p className="text-muted-foreground">
                      Atendimento de segunda a sexta, das 8h às 18h. 
                      Horários especiais podem ser negociados conforme disponibilidade.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Sigilo Profissional
                    </h3>
                    <p className="text-muted-foreground">
                      Todas as informações compartilhadas são protegidas por sigilo profissional, 
                      conforme o Código de Ética do Psicólogo.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Atendimento Personalizado
                    </h3>
                    <p className="text-muted-foreground">
                      Cada processo é único e desenvolvido especialmente para suas necessidades, 
                      respeitando seu ritmo e objetivos pessoais.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <img
                src="/src/assets/aFNf33hqBB7c.jpg"
                alt="Atendimento psicológico online"
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-lg text-muted-foreground">
              Tire suas principais dúvidas sobre o processo terapêutico
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-card p-6 rounded-xl border border-border">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <HelpCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-muted-foreground">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preparação para a Primeira Sessão */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Como se Preparar para a Primeira Sessão
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Algumas dicas para aproveitar ao máximo seu primeiro encontro terapêutico
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Ambiente Adequado",
                description: "Escolha um local privado, silencioso e confortável onde você se sinta à vontade para conversar."
              },
              {
                title: "Conexão Estável",
                description: "Certifique-se de que sua internet está funcionando bem e teste câmera e microfone previamente."
              },
              {
                title: "Mente Aberta",
                description: "Venha sem expectativas rígidas. A primeira sessão é para nos conhecermos e entender suas necessidades."
              },
              {
                title: "Reflexão Prévia",
                description: "Pense sobre o que te trouxe até aqui e quais mudanças gostaria de ver em sua vida."
              },
              {
                title: "Tempo Disponível",
                description: "Reserve um tempo antes e depois da sessão para se preparar e processar o que foi conversado."
              },
              {
                title: "Honestidade",
                description: "Seja autêntica e honesta. Quanto mais verdadeira for, mais eficaz será o processo terapêutico."
              }
            ].map((tip, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {tip.title}
                </h3>
                <p className="text-muted-foreground">
                  {tip.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronta para dar o primeiro passo?
          </h2>
          
          <p className="text-xl mb-8 opacity-90">
            Agende sua primeira sessão e comece sua jornada de autoconhecimento e crescimento pessoal.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5511999999999?text=Olá%20Letícia,%20gostaria%20de%20agendar%20minha%20primeira%20sessão"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition-colors inline-flex items-center justify-center space-x-2 shadow-lg"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Agendar Primeira Sessão</span>
            </a>
            
            <a
              href="/contato"
              className="border border-white text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white hover:text-primary transition-colors inline-flex items-center justify-center space-x-2"
            >
              <span>Outras Formas de Contato</span>
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;

