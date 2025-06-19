import React from 'react';
import { GraduationCap, Heart, Users, Award, CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-12">
            Sobre <span className="text-gradient">Letícia Tomé</span>
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Coluna do texto */}
            <div className="space-y-6">
              <p className="text-xl text-muted-foreground mb-6">
                Sou Letícia Tomé, psicóloga formada com especialização em Terapia Cognitivo-Comportamental. 
                Minha jornada na psicologia começou com o desejo profundo de ajudar pessoas a se reconectarem 
                com sua essência e construírem vínculos mais saudáveis.
              </p>

              <p className="text-xl text-muted-foreground mb-6">
                Com anos de experiência em atendimento clínico, trabalho principalmente com questões relacionadas 
                a relacionamentos afetivos, autoestima e bem-estar emocional. Acredito que cada pessoa tem dentro 
                de si a capacidade de crescer e se transformar.
              </p>

              <div className="bg-primary/10 p-6 rounded-xl border-l-4 border-primary">
                <p className="text-lg text-foreground font-medium">
                  "Acredito que cada pessoa carrega dentro de si a capacidade de transformação 
                  e crescimento. Meu papel é acompanhar você nessa jornada de autoconhecimento 
                  e fortalecimento do amor-próprio."
                </p>
              </div>
            </div>

            {/* Coluna da imagem */}
            <div className="flex justify-center items-start">
              <img
                src="https://i.imgur.com/NCdriRC.jpeg"
                alt="Letícia Tomé"
                className="w-full max-w-sm rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Formação e Experiência */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Formação e Experiência
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Uma trajetória dedicada ao estudo da mente humana e ao desenvolvimento de relacionamentos saudáveis
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Formação Acadêmica
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Graduação em Psicologia - Universidade Federal</li>
                    <li>• Especialização em Terapia Cognitivo-Comportamental</li>
                    <li>• Formação em Psicologia Humanista</li>
                    <li>• Curso de Terapia de Casal e Família</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Certificações
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• CRP 09/20277 - Conselho Regional de Psicologia</li>
                    <li>• Certificação em Terapia Online</li>
                    <li>• Formação em Mindfulness e Autocompaixão</li>
                    <li>• Workshop em Comunicação Não-Violenta</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Experiência Clínica
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• +5 anos de experiência em atendimento clínico</li>
                    <li>• Especialista em relacionamentos e autoestima</li>
                    <li>• Atendimento individual e de casal</li>
                    <li>• Experiência em terapia online</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Áreas de Interesse
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Psicologia Positiva e Bem-estar</li>
                    <li>• Desenvolvimento do Amor-próprio</li>
                    <li>• Comunicação em Relacionamentos</li>
                    <li>• Inteligência Emocional</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Abordagem Terapêutica */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Minha Abordagem Terapêutica
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Combino diferentes técnicas para oferecer um atendimento personalizado e eficaz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[{
              title: "Terapia Cognitivo-Comportamental",
              description: "Identificação e modificação de padrões de pensamento e comportamento que causam sofrimento emocional."
            }, {
              title: "Psicologia Humanista",
              description: "Foco no potencial humano, autoconhecimento e desenvolvimento pessoal através de uma abordagem acolhedora."
            }, {
              title: "Mindfulness e Autocompaixão",
              description: "Técnicas de atenção plena e cultivo da autocompaixão para reduzir ansiedade e aumentar o bem-estar."
            }].map((approach, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {approach.title}
                </h3>
                <p className="text-muted-foreground">
                  {approach.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Missão e Valores */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/src/assets/KAldhcwfklb7.webp"
                alt="Ambiente terapêutico acolhedor"
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Minha Missão
                </h2>
                <p className="text-lg text-muted-foreground">
                  Ajudar pessoas a se reconectarem com sua essência, desenvolverem o amor-próprio 
                  e construírem relacionamentos mais saudáveis e satisfatórios. Acredito que cada 
                  pessoa tem o potencial para transformar sua vida e encontrar equilíbrio emocional.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Meus Valores
                </h3>
                <div className="space-y-3">
                  {["Acolhimento e empatia em cada sessão", "Respeito à individualidade e ritmo de cada pessoa", "Ética profissional e sigilo absoluto", "Compromisso com o bem-estar emocional", "Abordagem humanizada e personalizada"].map((value, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Vamos conversar sobre seu bem-estar?
          </h2>

          <p className="text-xl mb-8 opacity-90">
            Estou aqui para acompanhar você em sua jornada de autoconhecimento e crescimento pessoal.
          </p>

          <a
            href="https://wa.me/5511999999999?text=Olá%20Letícia,%20gostaria%20de%20conhecer%20mais%20sobre%20seu%20trabalho"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-primary px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition-colors inline-flex items-center space-x-2 shadow-lg"
          >
            <span>Agendar conversa inicial</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
