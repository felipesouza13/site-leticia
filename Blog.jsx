import React, { useState } from 'react';
import { Calendar, User, Tag, ArrowRight, Search, Heart, Brain, Users, Sparkles } from 'lucide-react';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  
  const categories = [
    'Todos',
    'Relacionamentos',
    'Autoestima',
    'Bem-estar',
    'Amor-próprio',
    'Dicas de Psicologia'
  ];

  const blogPosts = [
    {
      id: 1,
      title: "5 Sinais de que Você Precisa Trabalhar sua Autoestima",
      excerpt: "Descubra os principais indicadores de baixa autoestima e como a terapia pode ajudar você a desenvolver uma relação mais saudável consigo mesma.",
      category: "Autoestima",
      date: "15 de Janeiro, 2025",
      author: "Letícia Tomé",
      image: "/src/assets/w0DljNJwSrGD.jpg",
      readTime: "5 min"
    },
    {
      id: 2,
      title: "Como Cultivar o Amor-próprio no Dia a Dia",
      excerpt: "Práticas simples e eficazes para desenvolver uma relação amorosa e compassiva consigo mesma, fortalecendo sua autoconfiança.",
      category: "Amor-próprio",
      date: "10 de Janeiro, 2025",
      author: "Letícia Tomé",
      image: "/src/assets/BFdh62xdKX7w.jpg",
      readTime: "7 min"
    },
    {
      id: 3,
      title: "Comunicação Não-Violenta em Relacionamentos",
      excerpt: "Aprenda técnicas de comunicação que fortalecem vínculos e reduzem conflitos em seus relacionamentos pessoais e amorosos.",
      category: "Relacionamentos",
      date: "5 de Janeiro, 2025",
      author: "Letícia Tomé",
      image: "/src/assets/plPFFtQ13QKR.jpg",
      readTime: "6 min"
    },
    {
      id: 4,
      title: "Ansiedade: Quando Buscar Ajuda Profissional",
      excerpt: "Entenda a diferença entre ansiedade normal e transtorno de ansiedade, e saiba quando é importante procurar acompanhamento psicológico.",
      category: "Bem-estar",
      date: "28 de Dezembro, 2024",
      author: "Letícia Tomé",
      image: "/src/assets/mcHFZsrQPMaH.jpg",
      readTime: "8 min"
    },
    {
      id: 5,
      title: "O Poder da Autocompaixão na Cura Emocional",
      excerpt: "Descubra como ser gentil consigo mesma pode transformar sua relação com os próprios erros e dificuldades da vida.",
      category: "Amor-próprio",
      date: "20 de Dezembro, 2024",
      author: "Letícia Tomé",
      image: "/src/assets/6dVKqMKX0xJs.jpg",
      readTime: "6 min"
    },
    {
      id: 6,
      title: "Estabelecendo Limites Saudáveis nos Relacionamentos",
      excerpt: "Como definir e manter limites pessoais que protegem seu bem-estar emocional sem prejudicar seus relacionamentos.",
      category: "Relacionamentos",
      date: "15 de Dezembro, 2024",
      author: "Letícia Tomé",
      image: "/src/assets/2anY9sYpI6Ao.png",
      readTime: "7 min"
    }
  ];

  const filteredPosts = selectedCategory === 'Todos' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Relacionamentos':
        return <Users className="h-4 w-4" />;
      case 'Autoestima':
        return <Heart className="h-4 w-4" />;
      case 'Bem-estar':
        return <Brain className="h-4 w-4" />;
      case 'Amor-próprio':
        return <Sparkles className="h-4 w-4" />;
      default:
        return <Tag className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Blog <span className="text-gradient">Terapêutico</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Artigos sobre psicologia, relacionamentos, autoestima e bem-estar emocional 
            para apoiar sua jornada de autoconhecimento.
          </p>
          
          <div className="bg-primary/10 p-6 rounded-xl border-l-4 border-primary max-w-2xl mx-auto">
            <p className="text-lg text-foreground font-medium">
              "Conhecimento é poder, e autoconhecimento é liberdade."
            </p>
          </div>
        </div>
      </section>

      {/* Categorias e Busca */}
      <section className="py-8 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Categorias */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center space-x-2 ${
                    selectedCategory === category
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'
                  }`}
                >
                  {getCategoryIcon(category)}
                  <span>{category}</span>
                </button>
              ))}
            </div>
            
            {/* Busca */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Buscar artigos..."
                className="pl-10 pr-4 py-2 border border-border rounded-full bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Posts do Blog */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article key={post.id} className="bg-card rounded-2xl shadow-sm border border-border overflow-hidden card-hover">
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-medium bg-primary text-primary-foreground`}>
                      {getCategoryIcon(post.category)}
                      <span>{post.category}</span>
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {post.readTime} de leitura
                    </span>
                    
                    <button className="text-primary hover:text-primary/80 font-medium text-sm flex items-center space-x-1 transition-colors">
                      <span>Ler mais</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          {/* Paginação */}
          <div className="flex justify-center mt-12">
            <div className="flex space-x-2">
              <button className="px-4 py-2 border border-border rounded-lg text-muted-foreground hover:bg-muted transition-colors">
                Anterior
              </button>
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg">
                1
              </button>
              <button className="px-4 py-2 border border-border rounded-lg text-muted-foreground hover:bg-muted transition-colors">
                2
              </button>
              <button className="px-4 py-2 border border-border rounded-lg text-muted-foreground hover:bg-muted transition-colors">
                3
              </button>
              <button className="px-4 py-2 border border-border rounded-lg text-muted-foreground hover:bg-muted transition-colors">
                Próximo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Receba Conteúdos Exclusivos
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8">
            Inscreva-se na nossa newsletter e receba artigos, dicas e reflexões 
            sobre psicologia e bem-estar emocional diretamente no seu e-mail.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              className="flex-1 px-4 py-3 border border-border rounded-full bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <button className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors">
              Inscrever-se
            </button>
          </div>
          
          <p className="text-sm text-muted-foreground mt-4">
            Não enviamos spam. Você pode cancelar a qualquer momento.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Quer conversar sobre algum tema específico?
          </h2>
          
          <p className="text-xl mb-8 opacity-90">
            Agende uma sessão e vamos explorar juntas as questões que mais te interessam.
          </p>
          
          <a
            href="https://wa.me/5511999999999?text=Olá%20Letícia,%20gostaria%20de%20conversar%20sobre%20um%20tema%20específico"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-primary px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition-colors inline-flex items-center space-x-2 shadow-lg"
          >
            <span>Agendar Conversa</span>
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Blog;

