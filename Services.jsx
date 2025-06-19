import React from 'react';
import { 
  Heart, 
  HeartHandshake, 
  Sparkles, 
  Brain, 
  Monitor, 
  ShieldCheck, 
  ArrowRight,
  Presentation
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <HeartHandshake className="h-12 w-12" />,
      title: "Relacionamentos Afetivos",
      description: "Trabalho especializado para fortalecer vínculos e melhorar a comunicação em relacionamentos.",
      topics: [
        "Ciúmes e insegurança no relacionamento",
        "Dificuldades de comunicação entre parceiros",
        "Separações e términos de relacionamento",
        "Carência emocional e dependência afetiva",
        "Conflitos conjugais e familiares",
        "Reconstrução da confiança"
      ],
      color: "bg-pink-50 border-pink-200 text-pink-600"
    },
    {
      icon: <ShieldCheck className="h-12 w-12" />,
      title: "Autoestima",
      description: "Desenvolvimento da autoconfiança e construção de uma autoimagem positiva e realista.",
      topics: [
        "Insegurança e baixa autoestima",
        "Autocrítica excessiva e perfeccionismo",
        "Dificuldades com autoimagem corporal",
        "Síndrome do impostor",
        "Medo de julgamento e rejeição",
        "Fortalecimento da autoconfiança"
      ],
      color: "bg-rose-50 border-rose-200 text-rose-600"
    },
    {
      icon: <Brain className="h-12 w-12" />,
      title: "Bem-estar Emocional",
      description: "Apoio para lidar com questões emocionais e desenvolver estratégias de enfrentamento saudáveis.",
      topics: [
        "Ansiedade e transtornos de ansiedade",
        "Estresse e esgotamento emocional",
        "Depressão e tristeza profunda",
        "Dificuldades de regulação emocional",
        "Traumas e experiências difíceis",
        "Desenvolvimento de resiliência"
      ],
      color: "bg-purple-50 border-purple-200 text-purple-600"
    },
    {
      icon: <Heart className="h-12 w-12" />,
      title: "Amor-próprio",
      description: "Cultivo do amor-próprio e desenvolvimento de uma relação saudável consigo mesmo.",
      topics: [
        "Autoconhecimento e autodescoberta",
        "Valorização pessoal e autoaceitação",
        "Estabelecimento de limites saudáveis",
        "Autocuidado e bem-estar pessoal",
        "Desenvolvimento da autocompaixão",
        "Construção de uma identidade sólida"
      ],
      color: "bg-amber-50 border-amber-200 text-amber-600"
    },
    {
      icon: <Monitor className="h-12 w-12" />,
      title: "Terapia Online",
      description: "Atendimento psicológico com a mesma qualidade do presencial, no conforto da sua casa.",
      topics: [
        "Sessões individuais personalizadas",
        "Horários flexíveis e convenientes",
        "Plataforma segura e confidencial",
        "Acompanhamento contínuo e eficaz",
        "Acesso de qualquer lugar do Brasil",
        "Sigilo profissional garantido"
      ],
      color: "bg-green-50 border-green-200 text-green-600"
    },
    {
      icon: <Presentation className="h-12 w-12" />,
      title: "Palestras",
      description: "Palestras Motivacionais para empresas e instituições, focadas em desenvolvimento pessoal e profissional.",
      topics: [
        "Palestras corporativas personalizadas",
        "Desenvolvimento de liderança",
        "Gestão do estresse e bem-estar no trabalho",
        "Comunicação efetiva e relacionamentos",
        "Inteligência emocional",
        "Motivação e produtividade"
      ],
      color: "bg-blue-50 border-blue-200 text-blue-600"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Áreas de <span className="text-gradient">Atuação</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Ofereço acompanhamento psicológico especializado em diferentes áreas, 
            sempre com uma abordagem acolhedora e personalizada para suas necessidades.
          </p>
          
          <div className="bg-primary/10 p-6 rounded-xl border-l-4 border-primary max-w-2xl mx-auto">
            <p className="text-lg text-foreground font-medium">
              "Cada pessoa é única, e por isso cada processo terapêutico é desenvolvido 
              de forma personalizada, respeitando seu ritmo e suas necessidades específicas."
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-2xl shadow-sm border border-border card-hover"
              >
                <div className={`inline-flex p-4 rounded-2xl mb-6 ${service.color}`}>
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 text-lg">
                  {service.description}
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">
                    O que trabalhamos:
                  </h4>
                  <ul className="space-y-2">
                    {service.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processo Terapêutico */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Como é o Processo Terapêutico?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Um caminho estruturado e acolhedor para seu desenvolvimento pessoal
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Acolhimento Inicial",
                description: "Primeira conversa para nos conhecermos e entender suas necessidades e objetivos terapêuticos."
              },
              {
                step: "02",
                title: "Desenvolvimento",
                description: "Sessões regulares focadas no autoconhecimento, desenvolvimento de estratégias e fortalecimento emocional."
              },
              {
                step: "03",
                title: "Transformação",
                description: "Consolidação dos aprendizados e aplicação prática das ferramentas desenvolvidas no dia a dia."
              }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {phase.title}
                </h3>
                <p className="text-muted-foreground">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Benefícios da Terapia
              </h2>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Autoconhecimento Profundo",
                    description: "Compreenda melhor seus padrões, emoções e comportamentos."
                  },
                  {
                    title: "Relacionamentos Mais Saudáveis",
                    description: "Desenvolva habilidades de comunicação e vínculos mais fortes."
                  },
                  {
                    title: "Bem-estar Emocional",
                    description: "Aprenda a lidar com ansiedade, estresse e outras questões emocionais."
                  },
                  {
                    title: "Crescimento Pessoal",
                    description: "Desenvolva seu potencial e construa a vida que deseja viver."
                  }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <ArrowRight className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-1">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <img
                src="/src/assets/6PbLM7zo9TWp.jpg"
                alt="Benefícios da terapia"
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronta para iniciar sua jornada de transformação?
          </h2>
          
          <p className="text-xl mb-8 opacity-90">
            Agende uma conversa inicial e descubra como posso ajudar você a alcançar seus objetivos.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5511999999999?text=Olá%20Letícia,%20gostaria%20de%20agendar%20uma%20consulta"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition-colors inline-flex items-center justify-center space-x-2 shadow-lg"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Agendar Consulta</span>
            </a>
            
            <a
              href="/como-funciona"
              className="border border-white text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white hover:text-primary transition-colors inline-flex items-center justify-center space-x-2"
            >
              <span>Como Funciona</span>
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

