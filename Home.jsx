import React from 'react';
import { ArrowRight, Heart, Users, Brain, Sparkles, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                <span className="text-gradient">Letícia Tomé</span>
                <br />
                <span className="text-2xl md:text-3xl lg:text-4xl font-medium text-muted-foreground">
                  Psicóloga | CRP 09/20277
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-foreground font-medium">
                "Cultivar o amor-próprio é o primeiro passo para viver relacionamentos saudáveis"
              </p>
              
              <p className="text-lg text-muted-foreground max-w-lg">
                Especialista em relacionamentos, autoestima, bem-estar emocional e amor-próprio. 
                Ajudo pessoas a se reconectarem com sua essência e construírem vínculos saudáveis.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/5511999999999?text=Olá%20Letícia,%20gostaria%20de%20agendar%20uma%20consulta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-medium hover:bg-primary/90 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>Agende sua sessão</span>
                </a>
                
                <Link
                  to="/sobre"
                  className="border border-primary text-primary px-8 py-4 rounded-full text-lg font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Conheça meu trabalho</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="/src/assets/VshLKVUVvCoB.jpeg"
                  alt="Ambiente acolhedor para terapia"
                  className="rounded-2xl shadow-2xl w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-full h-full bg-secondary rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Áreas de Atuação Preview */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Como posso te ajudar?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ofereço acompanhamento psicológico especializado em diferentes áreas para seu bem-estar emocional
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Users className="h-8 w-8" />,
                title: "Relacionamentos",
                description: "Ciúmes, separações, comunicação e carência emocional"
              },
              {
                icon: <Heart className="h-8 w-8" />,
                title: "Autoestima",
                description: "Insegurança, autoimagem e autocrítica"
              },
              {
                icon: <Brain className="h-8 w-8" />,
                title: "Bem-estar Emocional",
                description: "Ansiedade, estresse e exaustão"
              },
              {
                icon: <Sparkles className="h-8 w-8" />,
                title: "Amor-próprio",
                description: "Valorização pessoal e autoconhecimento"
              }
            ].map((service, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl shadow-sm border border-border card-hover"
              >
                <div className="text-primary mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/areas-atuacao"
              className="bg-accent text-accent-foreground px-8 py-3 rounded-full text-lg font-medium hover:bg-accent/90 transition-colors inline-flex items-center space-x-2"
            >
              <span>Ver todas as áreas</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Terapia Online */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/src/assets/REGTv1y4H08N.jpg"
                alt="Consultório de psicologia acolhedor"
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
            
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Terapia Online
              </h2>
              
              <p className="text-lg text-muted-foreground">
                Acolhimento com praticidade, conforto e sigilo. Atendo de forma online, 
                proporcionando um espaço seguro e acolhedor para seu processo terapêutico, 
                no conforto da sua casa.
              </p>
              
              <div className="space-y-4">
                {[
                  "Sessões individuais personalizadas",
                  "Horários flexíveis",
                  "Sigilo profissional garantido",
                  "Plataforma segura e confiável"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <Link
                to="/como-funciona"
                className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors inline-flex items-center space-x-2"
              >
                <span>Saiba como funciona</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronta para começar sua jornada de autoconhecimento?
          </h2>
          
          <p className="text-xl mb-8 opacity-90">
            Agende uma conversa inicial e dê o primeiro passo para uma vida mais equilibrada e feliz.
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

export default Home;

