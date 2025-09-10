import React from 'react';
import './App.css';
import { ArrowRight, Code2, Globe, ShoppingCart, FileText, CheckCircle, Star, Menu, X, Monitor, Smartphone, MessageCircle, Eye } from 'lucide-react';
import { useState } from 'react';
import logo from './assets/logo2-Photoroom.png';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    whatsapp: '',
    tipo_site: '',
    projeto: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const formData = new FormData(e.target);
      
      const response = await fetch('https://formspree.io/f/xdklbbbj', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitMessage('Mensagem enviada com sucesso! Entraremos em contato em breve.');
        setFormData({
          nome: '',
          email: '',
          whatsapp: '',
          tipo_site: '',
          projeto: ''
        });
        e.target.reset();
      } else {
        setSubmitMessage('Erro ao enviar mensagem. Tente novamente.');
      }
    } catch (error) {
      setSubmitMessage('Erro de conexão. Tente novamente mais tarde.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img src={logo} alt="YvesX" className="h-8 w-auto" />
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#inicio" className="text-gray-900 hover:text-gray-600 transition-colors font-medium">Início</a>
              <a href="#servicos" className="text-gray-900 hover:text-gray-600 transition-colors font-medium">Serviços</a>
              <a href="#portfolio" className="text-gray-900 hover:text-gray-600 transition-colors font-medium">Portfólio</a>
              <a href="#sobre" className="text-gray-900 hover:text-gray-600 transition-colors font-medium">Sobre</a>
              <a href="#contato" className="text-gray-900 hover:text-gray-600 transition-colors font-medium">Contato</a>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-900 hover:text-gray-600 transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <a
                href="https://wa.me/5511921355191"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-all duration-300 inline-flex items-center gap-2 font-medium"
              >
                WhatsApp
                <MessageCircle size={16} />
              </a>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100">
                <a href="#inicio" className="block px-3 py-2 text-gray-900 hover:text-gray-600 transition-colors font-medium">Início</a>
                <a href="#servicos" className="block px-3 py-2 text-gray-900 hover:text-gray-600 transition-colors font-medium">Serviços</a>
                <a href="#portfolio" className="block px-3 py-2 text-gray-900 hover:text-gray-600 transition-colors font-medium">Portfólio</a>
                <a href="#sobre" className="block px-3 py-2 text-gray-900 hover:text-gray-600 transition-colors font-medium">Sobre</a>
                <a href="#contato" className="block px-3 py-2 text-gray-900 hover:text-gray-600 transition-colors font-medium">Contato</a>
                <a
                  href="#contato"
                  className="block mx-3 mt-4 bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors text-center font-medium"
                >
                  Solicitar Orçamento
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex flex-col md:flex-row items-center justify-center mb-6">
              <img src={logo} alt="YvesX Logo" className="h-32 md:h-72 w-auto mb-4 md:mb-0 md:mr-8" />
              <div className="flex items-center">
                <div className="border-l-2 border-black h-32 md:h-32 mx-4 hidden md:block"></div>
                <h1 className="text-6xl md:text-8xl font-bold text-gray-900 leading-tight text-center md:text-left">
                  Criamos Sites
                  <span className="block text-gray-700">Profissionais</span>
                </h1>
              </div>
            </div>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Especializados em criação de sites modernos e funcionais. 
              Desenvolvemos soluções web personalizadas para impulsionar seu negócio online.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="#portfolio"
                className="bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-all duration-300 inline-flex items-center justify-center gap-2 text-lg font-medium"
              >
                Ver Nossos Projetos
                <ArrowRight size={20} />
              </a>
              <a
                href="https://wa.me/5511921355191"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-black text-black px-8 py-4 rounded-lg hover:bg-black hover:text-white transition-all duration-300 inline-flex items-center justify-center gap-2 text-lg font-medium"
              >
                WhatsApp
                <MessageCircle size={20} />
              </a>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">100+</div>
                <div className="text-gray-600 font-medium">Sites Criados</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">5+</div>
                <div className="text-gray-600 font-medium">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">98%</div>
                <div className="text-gray-600 font-medium">Clientes Satisfeitos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">24h</div>
                <div className="text-gray-600 font-medium">Suporte Técnico</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Tipos de Sites que Criamos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Desenvolvemos sites personalizados para cada tipo de negócio, sempre focando em qualidade e funcionalidade
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
                <ShoppingCart className="text-gray-700" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">E-commerce</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Lojas virtuais completas com sistema de pagamento, gestão de produtos e integração com marketplaces. 
                Desenvolvemos e-commerces funcionais e modernos.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle size={18} className="text-gray-500 flex-shrink-0" />
                  <span>Integração com gateways de pagamento</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle size={18} className="text-gray-500 flex-shrink-0" />
                  <span>Gestão completa de produtos</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle size={18} className="text-gray-500 flex-shrink-0" />
                  <span>Relatórios de vendas detalhados</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
                <Globe className="text-gray-700" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Sites Institucionais</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Sites corporativos elegantes que transmitem credibilidade e profissionalismo. 
                Perfeitos para apresentar sua empresa e seus serviços.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle size={18} className="text-gray-500 flex-shrink-0" />
                  <span>Design profissional e moderno</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle size={18} className="text-gray-500 flex-shrink-0" />
                  <span>Otimização para SEO</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle size={18} className="text-gray-500 flex-shrink-0" />
                  <span>Formulários de contato integrados</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
                <Monitor className="text-gray-700" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Landing Pages</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Páginas de conversão otimizadas para campanhas de marketing digital. 
                Desenvolvidas para maximizar suas vendas e captação de leads.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle size={18} className="text-gray-500 flex-shrink-0" />
                  <span>Foco em conversão</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle size={18} className="text-gray-500 flex-shrink-0" />
                  <span>Integração com ferramentas de marketing</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle size={18} className="text-gray-500 flex-shrink-0" />
                  <span>Design otimizado para conversão</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
                <FileText className="text-gray-700" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Blogs e Portais</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Plataformas de conteúdo robustas com sistema de gerenciamento intuitivo. 
                Ideais para marketing de conteúdo e engajamento.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle size={18} className="text-gray-500 flex-shrink-0" />
                  <span>CMS personalizado</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle size={18} className="text-gray-500 flex-shrink-0" />
                  <span>Sistema de comentários</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle size={18} className="text-gray-500 flex-shrink-0" />
                  <span>Newsletter integrada</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
                <Code2 className="text-gray-700" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Sistemas Web</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Aplicações web personalizadas para automatizar processos do seu negócio. 
                Soluções sob medida para suas necessidades específicas.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle size={18} className="text-gray-500 flex-shrink-0" />
                  <span>Desenvolvimento personalizado</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle size={18} className="text-gray-500 flex-shrink-0" />
                  <span>Integração com APIs</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle size={18} className="text-gray-500 flex-shrink-0" />
                  <span>Painel administrativo completo</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
                <Smartphone className="text-gray-700" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Sites Responsivos</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Todos os nossos sites são desenvolvidos com design responsivo, 
                garantindo perfeita visualização em qualquer dispositivo.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle size={18} className="text-gray-500 flex-shrink-0" />
                  <span>Mobile-first design</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle size={18} className="text-gray-500 flex-shrink-0" />
                  <span>Compatibilidade total</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle size={18} className="text-gray-500 flex-shrink-0" />
                  <span>Performance otimizada</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nossos Projetos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conheça alguns dos sites que desenvolvemos para nossos clientes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "E-commerce Fashion Store",
                category: "Loja Virtual",
                description: "Loja de roupas online moderna e funcional com sistema completo de vendas"
              },
              {
                title: "Clínica Médica Premium",
                category: "Site Institucional", 
                description: "Site corporativo para clínica médica com sistema de agendamento online"
              },
              {
                title: "Curso Online de Marketing",
                category: "Landing Page",
                description: "Landing page para curso online com design focado em conversão"
              },
              {
                title: "Restaurante Gourmet",
                category: "Site + Delivery",
                description: "Site com sistema de delivery integrado e cardápio digital"
              },
              {
                title: "Consultoria Empresarial",
                category: "Site Corporativo",
                description: "Portal corporativo com blog integrado e área de clientes"
              },
              {
                title: "Academia Fitness",
                category: "Sistema Web",
                description: "Sistema completo de gestão com área para alunos e professores"
              }
            ].map((project, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 h-64 flex flex-col justify-between mb-6 group-hover:from-gray-700 group-hover:to-gray-800 transition-all duration-300">
                  <div>
                    <div className="text-gray-300 text-sm font-medium mb-2">{project.category}</div>
                    <h4 className="text-2xl font-bold text-white mb-4">{project.title}</h4>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 text-white font-medium text-center">
                    Ver Projeto
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="#contato"
              className="bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-all duration-300 inline-flex items-center gap-2 text-lg font-medium"
            >
              Ver Mais Projetos
              <Eye size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Sobre a YvesX
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                Somos uma agência especializada em desenvolvimento web, focada em criar soluções digitais que impulsionam o crescimento dos nossos clientes.
              </p>
              <p className="text-gray-600 mb-8">
                Com anos de experiência no mercado, nossa equipe combina criatividade, tecnologia e estratégia para entregar sites que não apenas impressionam visualmente, mas também geram resultados concretos para o seu negócio.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-2">100+</div>
                  <div className="text-gray-600">Projetos Entregues</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-2">98%</div>
                  <div className="text-gray-600">Clientes Satisfeitos</div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Nossa Missão</h3>
              <p className="text-gray-600 leading-relaxed">
                Transformar ideias em experiências digitais excepcionais, ajudando empresas a alcançarem seus objetivos através de soluções web inovadoras e eficazes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              O que nossos clientes dizem
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Depoimentos de empresários que confiaram em nosso trabalho
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Carlos Mendes",
                company: "Loja Fashion Online",
                text: "A YvesX criou um site incrível para nossa loja. O design é moderno e a funcionalidade é perfeita. Recomendo muito!"
              },
              {
                name: "Dra. Ana Silva",
                company: "Clínica Médica Premium",
                text: "Profissionais excepcionais! O site ficou elegante e funcional. O sistema de agendamento facilitou muito nosso trabalho."
              },
              {
                name: "Roberto Costa",
                company: "Restaurante Gourmet",
                text: "O sistema de delivery que desenvolveram é fantástico. Nossos clientes adoraram a facilidade de fazer pedidos online."
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="text-gray-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-500 text-sm">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Vamos conversar?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Entre em contato conosco e descubra como podemos ajudar seu negócio a crescer online
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-8">Fale Conosco</h3>
              <div className="space-y-6 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <div className="font-semibold">WhatsApp</div>
                    <div className="text-gray-300">+55 11 92135-5191</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
                    <Globe size={24} />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-gray-300">contato@yves.com.br</div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 rounded-2xl p-6">
                <h4 className="text-xl font-bold mb-3">Orçamento Gratuito</h4>
                <p className="text-gray-300 mb-4">
                  Receba uma proposta personalizada em até 24 horas, sem compromisso!
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} />
                    <span>Análise gratuita do seu projeto</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} />
                    <span>Proposta detalhada e cronograma</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} />
                    <span>Consultoria inicial sem custo</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Nome Completo *</label>
                  <input
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent text-white placeholder-gray-400"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent text-white placeholder-gray-400"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">WhatsApp *</label>
                  <input
                    type="tel"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent text-white placeholder-gray-400"
                    placeholder="(11) 99999-9999"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Tipo de Site</label>
                  <select 
                    name="tipo_site"
                    value={formData.tipo_site}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent text-white"
                  >
                    <option value="">Selecione o tipo de site</option>
                    <option value="ecommerce">E-commerce</option>
                    <option value="institucional">Site Institucional</option>
                    <option value="landing">Landing Page</option>
                    <option value="blog">Blog/Portal</option>
                    <option value="sistema">Sistema Web</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Conte-nos sobre seu projeto *</label>
                  <textarea
                    rows={4}
                    name="projeto"
                    value={formData.projeto}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent text-white placeholder-gray-400"
                    placeholder="Descreva seu projeto, objetivos e prazo desejado..."
                  ></textarea>
                </div>
                
                {submitMessage && (
                  <div className={`p-4 rounded-lg ${submitMessage.includes('sucesso') ? 'bg-green-800 text-green-100' : 'bg-red-800 text-red-100'}`}>
                    {submitMessage}
                  </div>
                )}
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-white text-black px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Enviando...' : 'Solicitar Orçamento Gratuito'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <img src={logo} alt="YvesX" className="h-8 w-auto filter invert" />
              <div className="ml-4">
                <div className="font-bold">YvesX - Criação de Sites</div>
                <div className="text-gray-400 text-sm">Desenvolvendo soluções web profissionais</div>
              </div>
            </div>
            <div className="text-gray-400 text-center md:text-right">
              <p>&copy; 2024 YvesX. Todos os direitos reservados.</p>
              <p className="mt-1">Desenvolvido com ❤️ pela equipe YvesX</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
