document.addEventListener('DOMContentLoaded', () => {
  /* =========================================
     1. REFERÊNCIAS DOS ELEMENTOS DO DOM
     ========================================= */
  const botaoTema = document.getElementById('botaoTema');
  const iconeTema = document.getElementById('iconeTema');
  const rotuloTema = document.getElementById('rotuloTema');
  const ondaTema = document.getElementById('ondaTema');

  const botaoIdioma = document.getElementById('botaoIdioma');
  const rotuloIdioma = document.getElementById('rotuloIdioma');

  const corpo = document.body;

  /* =========================================
     2. ESTADO SALVO NO NAVEGADOR (LOCALSTORAGE)
     ========================================= */
  let modoClaroAtivo = localStorage.getItem('portfolio_modo_claro') === 'true';
  let idiomaAtual = localStorage.getItem('portfolio_idioma') || 'pt';

  if (modoClaroAtivo) {
    corpo.classList.add('modo-claro');
  }

  /* =========================================
     3. DICIONÁRIO DE TRADUÇÕES (PT / EN)
     ========================================= */
  const traducoes = {
    pt: {
      // Barra Lateral
      categoriasBarra: ['Menu Principal', 'Carreira'],
      cursoBarra: 'Ciência da Computação',
      linksBarra: ['Início', 'Formação', 'Skills', 'Projetos', 'Trajetória', 'Recomendações', 'Contato'],
      voltarPerfil: 'Trocar Perfil',

      // Página Início
      etiquetaInicio: 'Estudante',
      subtituloInicio: 'Designer de Moda (UFPI) & Estudante de Ciência da Computação',
      descricaoInicio:
        'Formado em design de moda na UFPI, e atualmente estou cursando Ciência da Computação, na Uninassau, tenho interesse em banco de dados e desenvolvimento de sistemas.',
      acoesInicio: ['Ver Projetos ↗', 'Minha Formação 🎓'],
      tituloDominios: 'Domínios <span class="cabecalho-pagina__titulo--destaque">Técnicos</span>',
      dominios: [
        {
          titulo: 'Eficiência em Python',
          descricao:
            'Desenvolvimento de sistemas em terminal, manipulação de matrizes, validação de entradas, lógica de jogos e automação de rotinas estruturadas.'
        },
        {
          titulo: 'Eficiência em Linguagem C',
          descricao:
            'Programação estruturada de baixo nível, controle de fluxo, vetores, funções modulares e construção de algoritmos eficientes.'
        },
        {
          titulo: 'Eficiência em CSS3',
          descricao:
            'Estilização responsiva com Flexbox, CSS Grid Layout, metodologia BEM, animações suaves e adaptação de temas claro e escuro.'
        },
        {
          titulo: 'Eficiência em HTML5',
          descricao:
            'Estruturação semântica de páginas web, acessibilidade, organização limpa de documentos e navegação multi-páginas interligada.'
        }
      ],

      // Página Formação
      tituloFormacao: 'FORMAÇÃO <span class="cabecalho-pagina__titulo--destaque">ACADÊMICA</span>',
      introFormacao:
        'Graduado em <strong>Design da Moda e Estilismo</strong> pela Universidade Federal do Piauí (UFPI) e atualmente graduando em <strong>Ciência da Computação</strong>. Minha formação une a visão estética, projetação e experiência do usuário ao desenvolvimento lógico, algoritmos e engenharia de software.',
      tituloCertificados: 'Certificados & Diplomas',
      certificados: [
        {
          etiqueta: 'Graduação • Diploma',
          titulo: 'Bacharelado em Design da Moda e Estilismo',
          instituicao: 'Universidade Federal do Piauí (UFPI)',
          descricao: 'Conclusão em Março de 2025. Formação superior completa com registro oficial MEC (Reg. 63327).',
          botao: 'Visualizar Diploma ↗'
        },
        {
          etiqueta: 'Curso Técnico • Certificado',
          titulo: 'Lógica de Programação',
          instituicao: 'SESC — Serviço Social do Comércio',
          descricao:
            'Fundamentos de algoritmos, estruturas de controle, variáveis, laços de repetição e resolução de problemas computacionais.',
          botao: 'Visualizar Certificado ↗'
        }
      ],

      // Página Skills
      tituloSkills: 'HARD & <span class="cabecalho-pagina__titulo--destaque">SOFT SKILLS</span>',
      subtituloSkills:
        'Mapeamento das minhas competências técnicas em desenvolvimento, design e habilidades interpessoais.',
      tituloHardSkills: 'Hard Skills (Competências Técnicas)',
      hardSkills: [
        {
          titulo: 'Front-End & Web',
          descricao: 'Estruturação semântica, layouts responsivos e estilização moderna com foco em UI/UX.'
        },
        {
          titulo: 'Programação & Lógica',
          descricao: 'Desenvolvimento de sistemas em terminal, manipulação de matrizes, lógica estruturada e algoritmos.'
        },
        {
          titulo: 'Ferramentas & Sistemas',
          descricao: 'Controle de versão colaborativo, organização de projetos ágeis e depuração de sistemas.'
        },
        {
          titulo: 'Design & Identidade Visual',
          descricao: 'Bagagem acadêmica em Design aplicada à criação de interfaces intuitivas e harmonia visual.'
        }
      ],
      tituloSoftSkills: 'Soft Skills (Competências Interpessoais)',
      softSkills: [
        {
          titulo: 'Trabalho em Equipe',
          descricao: 'Colaboração ativa em projetos acadêmicos, divisão de tarefas e versionamento conjunto.'
        },
        {
          titulo: 'Resolução de Problemas',
          descricao: 'Análise lógica para depurar erros de código e estruturar soluções eficientes.'
        },
        {
          titulo: 'Criatividade Interdisciplinar',
          descricao: 'Integração entre pensamento analítico da computação e sensibilidade estética do design.'
        },
        {
          titulo: 'Organização & Documentação',
          descricao: 'Estruturação limpa de código, relatórios técnicos e planejamento de entregas.'
        }
      ],

      // Página Projetos
      tituloProjetos: 'MEUS <span class="cabecalho-pagina__titulo--destaque">PROJETOS</span>',
      subtituloProjetos:
        'Sistemas e aplicações desenvolvidos na área de Engenharia de Software e Lógica de Programação.',
      projetos: [
        {
          etiqueta: 'Engenharia de Software',
          titulo: 'Sospety — Hemoterapia Animal',
          descricao:
            'Aplicação concebida para conectar tutores de pets, doadores de sangue animal e clínicas veterinárias em Teresina (PI) para transfusões de emergência.',
          botao: 'Ver Detalhes ↗'
        },
        {
          etiqueta: 'Lógica & Algoritmos',
          titulo: 'Sudoku Terminal em Python',
          descricao:
            'Jogo completo via linha de comando (<code>sdk.py</code>) com modo competitivo para 2 jogadores, modo solo contra a máquina (9x9) e validação de matrizes sem exceções.',
          botao: 'Ver Repositório ↗'
        }
      ],

      // Página Trajetória
      tituloTrajetoria: 'Minha <span class="cabecalho-pagina__titulo--destaque">Trajetória</span>',
      marcosTrajetoria: [
        {
          cargo: 'Design da Moda e Estilismo',
          organizacao: 'Graduação • UFPI',
          descricao:
            'Ingresso no ensino superior em 2020.2 e conclusão do bacharelado na Universidade Federal do Piauí (UFPI), consolidando o domínio em projetação visual, teoria das cores, design e ergonomia.'
        },
        {
          cargo: 'Lógica de Programação',
          organizacao: 'Curso Técnico • SESC',
          descricao:
            'Transição para a área da tecnologia através da formação técnica em Lógica de Programação, dominando algoritmos, estruturas condicionais, laços de repetição e resolução estruturada de problemas.'
        },
        {
          cargo: 'Ciência da Computação',
          organizacao: 'Graduação • Ensino Superior',
          descricao:
            'Aprofundamento em Engenharia de Software, Arquitetura de Computadores e desenvolvimento em Python, C, HTML5 e CSS3 — unindo a visão criativa do Design à construção de sistemas eficientes.'
        }
      ],

      // Página Recomendações
      tituloRecomendacoes: 'RECOMENDAÇÕES & <span class="cabecalho-pagina__titulo--destaque">DEPOIMENTOS</span>',
      introRecomendacoes:
        'Este espaço é reservado para reunir relatos, avaliações e depoimentos de professores, colegas de curso e parceiros de projetos sobre a minha atuação académica, colaboração em equipa e desenvolvimento de soluções em Design e Tecnologia.',
      tituloAvisoRec: 'Nenhuma recomendação publicada ainda',
      descAvisoRec:
        'Novos depoimentos e feedbacks de projetos colaborativos serão adicionados nesta secção em breve.',

      // Página Contato
      tituloContato: 'Entre em <span class="cabecalho-pagina__titulo--destaque">Contato</span>',
      subtituloContato: 'Vamos conversar sobre seu próximo projeto ou oportunidade de colaboração',
      tituloInfoContato: 'Informações de Contato',
      rotulosInfoContato: ['Email', 'WhatsApp', 'Localização', 'Disponibilidade'],
      valorDispContato: 'Atendimento em até 1000 dias',
      tituloFormContato: 'Envie sua Mensagem',
      rotulosFormContato: ['Nome Completo *', 'Email *', 'Telefone *', 'Assunto *', 'Mensagem *'],
      placeholdersFormContato: [
        'Digite seu nome completo',
        'seuemail@gmail.com',
        '+55 (86) 99999-9999',
        'Qual projeto você deseja tratar?',
        'Conte-me mais sobre o seu projeto...'
      ],
      botaoEnviarContato: 'Enviar Mensagem ✈️',
      statusEnviando: 'Enviando mensagem...',
      statusSucesso: 'Mensagem enviada com sucesso!',
      statusErro: 'Erro ao enviar. Tente novamente ou use o WhatsApp.'
    },

    en: {
      // Sidebar
      categoriasBarra: ['Main Menu', 'Career'],
      cursoBarra: 'Computer Science',
      linksBarra: ['Home', 'Education', 'Skills', 'Projects', 'Journey', 'Recommendations', 'Contact'],
      voltarPerfil: 'Switch Profile',

      // Home Page
      etiquetaInicio: 'Student',
      subtituloInicio: 'Fashion Designer (UFPI) & Computer Science Student',
      descricaoInicio:
        'Graduated in Fashion Design at UFPI, and currently studying Computer Science at Uninassau, interested in databases and systems development.',
      acoesInicio: ['View Projects ↗', 'My Education 🎓'],
      tituloDominios: 'Technical <span class="cabecalho-pagina__titulo--destaque">Domains</span>',
      dominios: [
        {
          titulo: 'Python Proficiency',
          descricao:
            'Terminal-based systems development, matrix manipulation, input validation, game logic, and structured routine automation.'
        },
        {
          titulo: 'C Language Proficiency',
          descricao:
            'Low-level structured programming, flow control, arrays, modular functions, and efficient algorithm building.'
        },
        {
          titulo: 'CSS3 Proficiency',
          descricao:
            'Responsive styling with Flexbox, CSS Grid Layout, BEM methodology, smooth animations, and light/dark theme adaptation.'
        },
        {
          titulo: 'HTML5 Proficiency',
          descricao:
            'Semantic web page structuring, accessibility, clean document organization, and interconnected multi-page navigation.'
        }
      ],

      // Education Page
      tituloFormacao: 'ACADEMIC <span class="cabecalho-pagina__titulo--destaque">EDUCATION</span>',
      introFormacao:
        'Graduated in <strong>Fashion Design and Styling</strong> from the Federal University of Piauí (UFPI) and currently pursuing a degree in <strong>Computer Science</strong>. My background combines aesthetic vision, visual design, and user experience with logical development, algorithms, and software engineering.',
      tituloCertificados: 'Certificates & Diplomas',
      certificados: [
        {
          etiqueta: 'Undergraduate • Diploma',
          titulo: 'B.A. in Fashion Design and Styling',
          instituicao: 'Federal University of Piauí (UFPI)',
          descricao: 'Completed in March 2025. Full higher education degree with official MEC registration (Reg. 63327).',
          botao: 'View Diploma ↗'
        },
        {
          etiqueta: 'Technical Course • Certificate',
          titulo: 'Programming Logic',
          instituicao: 'SESC — Social Service of Commerce',
          descricao:
            'Fundamentals of algorithms, control structures, variables, loops, and computational problem solving.',
          botao: 'View Certificate ↗'
        }
      ],

      // Skills Page
      tituloSkills: 'HARD & <span class="cabecalho-pagina__titulo--destaque">SOFT SKILLS</span>',
      subtituloSkills:
        'Overview of my technical competencies in software development, design, and interpersonal collaboration.',
      tituloHardSkills: 'Hard Skills (Technical Competencies)',
      hardSkills: [
        {
          titulo: 'Front-End & Web',
          descricao: 'Semantic structuring, responsive layouts, and modern styling focused on UI/UX.'
        },
        {
          titulo: 'Programming & Logic',
          descricao: 'Terminal systems development, matrix manipulation, structured logic, and algorithms.'
        },
        {
          titulo: 'Tools & Systems',
          descricao: 'Collaborative version control, agile project organization, and system debugging.'
        },
        {
          titulo: 'Design & Visual Identity',
          descricao: 'Academic design background applied to intuitive interfaces and visual harmony.'
        }
      ],
      tituloSoftSkills: 'Soft Skills (Interpersonal Competencies)',
      softSkills: [
        {
          titulo: 'Teamwork',
          descricao: 'Active collaboration in academic projects, task division, and joint version control.'
        },
        {
          titulo: 'Problem Solving',
          descricao: 'Logical analysis to debug code issues and architect efficient solutions.'
        },
        {
          titulo: 'Interdisciplinary Creativity',
          descricao: 'Integrating analytical computing thinking with aesthetic design sensitivity.'
        },
        {
          titulo: 'Organization & Documentation',
          descricao: 'Clean code structure, technical reports, and structured delivery planning.'
        }
      ],

      // Projects Page
      tituloProjetos: 'MY <span class="cabecalho-pagina__titulo--destaque">PROJECTS</span>',
      subtituloProjetos: 'Systems and applications developed in Software Engineering and Programming Logic.',
      projetos: [
        {
          etiqueta: 'Software Engineering',
          titulo: 'Sospety — Animal Hemotherapy',
          descricao:
            'Application designed to connect pet owners, animal blood donors, and veterinary clinics in Teresina (PI) for emergency transfusions.',
          botao: 'View Details ↗'
        },
        {
          etiqueta: 'Logic & Algorithms',
          titulo: 'Terminal Sudoku in Python',
          descricao:
            'Complete command-line game (<code>sdk.py</code>) featuring a 2-player competitive mode, solo mode against the machine (9x9), and exception-free matrix validation.',
          botao: 'View Repository ↗'
        }
      ],

      // Journey Page
      tituloTrajetoria: 'My <span class="cabecalho-pagina__titulo--destaque">Journey</span>',
      marcosTrajetoria: [
        {
          cargo: 'Fashion Design and Styling',
          organizacao: 'Undergraduate • UFPI',
          descricao:
            'Entered higher education in 2020.2 and completed the bachelor’s degree at the Federal University of Piauí (UFPI), consolidating mastery in visual design, color theory, design, and ergonomics.'
        },
        {
          cargo: 'Programming Logic',
          organizacao: 'Technical Course • SESC',
          descricao:
            'Transitioned into the technology field through technical training in Programming Logic, mastering algorithms, conditional structures, loops, and structured problem solving.'
        },
        {
          cargo: 'Computer Science',
          organizacao: 'Undergraduate • Higher Education',
          descricao:
            'Deepening studies in Software Engineering, Computer Architecture, and development in Python, C, HTML5, and CSS3 — uniting the creative vision of Design with building efficient systems.'
        }
      ],

      // Recommendations Page
      tituloRecomendacoes: 'RECOMMENDATIONS & <span class="cabecalho-pagina__titulo--destaque">TESTIMONIALS</span>',
      introRecomendacoes:
        'This space is reserved for stories, reviews, and testimonials from professors, classmates, and project partners regarding my academic work, teamwork, and Design & Technology solutions.',
      tituloAvisoRec: 'No recommendations published yet',
      descAvisoRec:
        'New testimonials and feedback from collaborative projects will be added to this section soon.',

      // Contact Page
      tituloContato: 'Get in <span class="cabecalho-pagina__titulo--destaque">Touch</span>',
      subtituloContato: "Let's talk about your next project or collaboration opportunity",
      tituloInfoContato: 'Contact Information',
      rotulosInfoContato: ['Email', 'WhatsApp', 'Location', 'Availability'],
      valorDispContato: 'Response within 1000 days',
      tituloFormContato: 'Send your Message',
      rotulosFormContato: ['Full Name *', 'Email *', 'Phone *', 'Subject *', 'Message *'],
      placeholdersFormContato: [
        'Enter your full name',
        'youremail@gmail.com',
        '+55 (86) 99999-9999',
        'Which project would you like to discuss?',
        'Tell me more about your project...'
      ],
      botaoEnviarContato: 'Send Message ✈️',
      statusEnviando: 'Sending message...',
      statusSucesso: 'Message sent successfully!',
      statusErro: 'Failed to send. Please try again or reach out via WhatsApp.'
    }
  };

  /* =========================================
     4. CONEXÃO COM A API DO GITHUB NO CARD DO SUDOKU
     ========================================= */
  let sudokuDadosApi = null;

  async function carregarSudokuGithubApi() {
    const cartaoSudoku = document.getElementById('cartaoSudokuApi');
    if (!cartaoSudoku) return;

    try {
      const resposta = await fetch('https://api.github.com/repos/alpacaf99-cloud/Trabalho-segunda-avalia-o--coding');
      if (!resposta.ok) throw new Error('Erro na API do GitHub');
      sudokuDadosApi = await resposta.json();
      atualizarCardSudokuApi();
    } catch (erro) {
      // Mantém os dados estáticos do HTML caso esteja offline
    }
  }

  function atualizarCardSudokuApi() {
    if (!sudokuDadosApi) return;

    const etiquetasContainer = document.getElementById('etiquetasSudokuApi');
    const botaoSudoku = document.getElementById('botaoSudokuApi');
    const linguagem = sudokuDadosApi.language || 'Python';
    const dataAtualizacao = new Date(sudokuDadosApi.updated_at).toLocaleDateString(
      idiomaAtual === 'en' ? 'en-US' : 'pt-BR'
    );

    if (etiquetasContainer) {
      etiquetasContainer.innerHTML = `
        <span class="etiqueta-habilidade">${linguagem}</span>
        <span class="etiqueta-habilidade">GitHub API</span>
        <span class="etiqueta-habilidade">${dataAtualizacao}</span>
      `;
    }

    if (botaoSudoku && sudokuDadosApi.html_url) {
      botaoSudoku.href = sudokuDadosApi.html_url;
    }
  }

  /* =========================================
     5. ENVIO REAL DO FORMULÁRIO VIA API (CONTATO)
     ========================================= */
  const formularioContato = document.getElementById('formularioContato');
  if (formularioContato) {
    formularioContato.addEventListener('submit', async (evento) => {
      evento.preventDefault();
      const t = traducoes[idiomaAtual];
      const botaoEnviar = document.getElementById('botaoEnviarContato');
      const statusEnvio = document.getElementById('statusEnvioContato');

      if (botaoEnviar) botaoEnviar.disabled = true;
      if (statusEnvio) statusEnvio.textContent = t.statusEnviando;

      const dadosFormulario = new FormData(formularioContato);

      try {
        const resposta = await fetch('https://formsubmit.co/ajax/joaofilipideoli@gmail.com', {
          method: 'POST',
          headers: { Accept: 'application/json' },
          body: dadosFormulario
        });

        if (!resposta.ok) throw new Error('Erro no envio');
        if (statusEnvio) statusEnvio.textContent = t.statusSucesso;
        formularioContato.reset();
      } catch (erro) {
        if (statusEnvio) statusEnvio.textContent = t.statusErro;
      } finally {
        if (botaoEnviar) botaoEnviar.disabled = false;
      }
    });
  }

  /* =========================================
     6. ATUALIZAÇÃO DE NOME (JOÃO FELIPE / ALPACA)
     ========================================= */
  function atualizarNomeExibicao() {
    const ehClaro = corpo.classList.contains('modo-claro');
    const nomeBarra = document.querySelector('.barra-lateral__nome');
    const tituloInicio = document.getElementById('tituloInicio');

    if (nomeBarra) {
      nomeBarra.textContent = ehClaro ? 'ALPACA' : 'JOÃO FELIPE';
    }

    if (tituloInicio) {
      const saudacao = idiomaAtual === 'en' ? "Hi, I'm" : 'Olá, eu sou o';
      const nomeDestaque = ehClaro ? 'Alpaca' : 'João Felipe';
      tituloInicio.innerHTML = `${saudacao} <br><span class="apresentacao__titulo--destaque">${nomeDestaque}</span>`;
    }
  }

  /* =========================================
     7. ATUALIZAÇÃO DO BOTÃO DE TEMA
     ========================================= */
  function atualizarBotaoTema() {
    if (!iconeTema || !rotuloTema) return;
    const ehClaro = corpo.classList.contains('modo-claro');

    if (ehClaro) {
      iconeTema.textContent = '🌙';
      rotuloTema.textContent = idiomaAtual === 'en' ? 'Dark Mode' : 'Modo Escuro';
    } else {
      iconeTema.textContent = '☀️';
      rotuloTema.textContent = idiomaAtual === 'en' ? 'Light Mode' : 'Modo Claro';
    }
  }

  /* =========================================
     8. FUNÇÃO DE TRADUÇÃO DA PÁGINA ATUAL
     ========================================= */
  function aplicarIdioma(idioma) {
    const t = traducoes[idioma];
    if (!t) return;

    // 1. Barra Lateral
    const categorias = document.querySelectorAll('.barra-lateral__categoria');
    categorias.forEach((cat, i) => {
      if (t.categoriasBarra[i]) cat.textContent = t.categoriasBarra[i];
    });

    const cursoBarra = document.querySelector('.barra-lateral__curso');
    if (cursoBarra) cursoBarra.textContent = t.cursoBarra;

    const linksNavegacao = document.querySelectorAll('.barra-lateral__navegacao .barra-lateral__texto');
    linksNavegacao.forEach((span, i) => {
      if (t.linksBarra[i]) span.textContent = t.linksBarra[i];
    });

    const textoVoltar = document.querySelector('.barra-lateral__link--voltar .barra-lateral__texto');
    if (textoVoltar) textoVoltar.textContent = t.voltarPerfil;

    // 2. Botão de Idioma
    if (rotuloIdioma) {
      rotuloIdioma.textContent = idioma === 'pt' ? 'EN' : 'PT';
    }

    // 3. Página Início
    const etiquetaInicio = document.getElementById('etiquetaInicio');
    if (etiquetaInicio) {
      etiquetaInicio.textContent = t.etiquetaInicio;
      document.getElementById('subtituloInicio').textContent = t.subtituloInicio;
      document.getElementById('descricaoInicio').textContent = t.descricaoInicio;
      document.getElementById('tituloDominios').innerHTML = t.tituloDominios;

      const botoesHero = document.querySelectorAll('.apresentacao__acoes .botao');
      botoesHero.forEach((btn, i) => {
        if (t.acoesInicio[i]) btn.textContent = t.acoesInicio[i];
      });

      const itensDominio = document.querySelectorAll('.item-dominio');
      itensDominio.forEach((item, i) => {
        if (t.dominios[i]) {
          item.querySelector('.item-dominio__titulo').textContent = t.dominios[i].titulo;
          item.querySelector('.item-dominio__descricao').textContent = t.dominios[i].descricao;
        }
      });
    }

    // 4. Página Formação
    const tituloFormacao = document.getElementById('tituloFormacao');
    if (tituloFormacao) {
      tituloFormacao.innerHTML = t.tituloFormacao;
      document.getElementById('introFormacao').innerHTML = t.introFormacao;
      document.getElementById('tituloCertificados').textContent = t.tituloCertificados;

      const cartoesCert = document.querySelectorAll('.cartao-certificado');
      cartoesCert.forEach((cartao, i) => {
        if (t.certificados[i]) {
          cartao.querySelector('.cartao-certificado__etiqueta').textContent = t.certificados[i].etiqueta;
          cartao.querySelector('.cartao-certificado__titulo').textContent = t.certificados[i].titulo;
          cartao.querySelector('.cartao-certificado__instituicao').textContent = t.certificados[i].instituicao;
          cartao.querySelector('.cartao-certificado__descricao').textContent = t.certificados[i].descricao;
          cartao.querySelector('.cartao-certificado__botao').textContent = t.certificados[i].botao;
        }
      });
    }

    // 5. Página Skills
    const tituloSkills = document.getElementById('tituloSkills');
    if (tituloSkills) {
      tituloSkills.innerHTML = t.tituloSkills;
      document.getElementById('subtituloSkills').textContent = t.subtituloSkills;
      document.getElementById('tituloHardSkills').textContent = t.tituloHardSkills;
      document.getElementById('tituloSoftSkills').textContent = t.tituloSoftSkills;

      const cartoesHard = document.querySelectorAll('.cartao-habilidade');
      cartoesHard.forEach((cartao, i) => {
        if (t.hardSkills[i]) {
          cartao.querySelector('.cartao-habilidade__titulo').textContent = t.hardSkills[i].titulo;
          cartao.querySelector('.cartao-habilidade__descricao').textContent = t.hardSkills[i].descricao;
        }
      });

      const cartoesSoft = document.querySelectorAll('.cartao-interpessoal');
      cartoesSoft.forEach((cartao, i) => {
        if (t.softSkills[i]) {
          cartao.querySelector('.cartao-interpessoal__titulo').textContent = t.softSkills[i].titulo;
          cartao.querySelector('.cartao-interpessoal__descricao').textContent = t.softSkills[i].descricao;
        }
      });
    }

    // 6. Página Projetos
    const tituloProjetos = document.getElementById('tituloProjetos');
    if (tituloProjetos) {
      tituloProjetos.innerHTML = t.tituloProjetos;
      document.getElementById('subtituloProjetos').textContent = t.subtituloProjetos;

      const cartoesProjeto = document.querySelectorAll('.cartao-projeto');
      cartoesProjeto.forEach((cartao, i) => {
        if (t.projetos[i]) {
          cartao.querySelector('.cartao-projeto__etiqueta').textContent = t.projetos[i].etiqueta;
          cartao.querySelector('.cartao-projeto__titulo').textContent = t.projetos[i].titulo;
          cartao.querySelector('.cartao-projeto__descricao').innerHTML = t.projetos[i].descricao;
          cartao.querySelector('.cartao-projeto__botao').textContent = t.projetos[i].botao;
        }
      });

      atualizarCardSudokuApi();
    }

    // 7. Página Trajetória
    const tituloTrajetoria = document.getElementById('tituloTrajetoria');
    if (tituloTrajetoria) {
      tituloTrajetoria.innerHTML = t.tituloTrajetoria;

      const itensLinha = document.querySelectorAll('.linha-tempo__item');
      itensLinha.forEach((item, i) => {
        if (t.marcosTrajetoria[i]) {
          item.querySelector('.linha-tempo__cargo').textContent = t.marcosTrajetoria[i].cargo;
          item.querySelector('.linha-tempo__organizacao').textContent = t.marcosTrajetoria[i].organizacao;
          item.querySelector('.linha-tempo__texto').textContent = t.marcosTrajetoria[i].descricao;
        }
      });
    }

    // 8. Página Recomendações
    const tituloRecomendacoes = document.getElementById('tituloRecomendacoes');
    if (tituloRecomendacoes) {
      tituloRecomendacoes.innerHTML = t.tituloRecomendacoes;
      document.getElementById('introRecomendacoes').textContent = t.introRecomendacoes;
      document.getElementById('tituloAvisoRec').textContent = t.tituloAvisoRec;
      document.getElementById('descAvisoRec').textContent = t.descAvisoRec;
    }

    // 9. Página Contato
    const tituloContato = document.getElementById('tituloContato');
    if (tituloContato) {
      tituloContato.innerHTML = t.tituloContato;
      document.getElementById('subtituloContato').textContent = t.subtituloContato;
      document.getElementById('tituloInfoContato').textContent = t.tituloInfoContato;
      document.getElementById('tituloFormContato').textContent = t.tituloFormContato;
      document.getElementById('valorDispContato').textContent = t.valorDispContato;

      const rotulosInfo = document.querySelectorAll('.info-contato__rotulo');
      rotulosInfo.forEach((rotulo, i) => {
        if (t.rotulosInfoContato[i]) rotulo.textContent = t.rotulosInfoContato[i];
      });

      const rotulosForm = document.querySelectorAll('.formulario-contato__rotulo');
      rotulosForm.forEach((rotulo, i) => {
        if (t.rotulosFormContato[i]) rotulo.textContent = t.rotulosFormContato[i];
      });

      const camposForm = document.querySelectorAll('.formulario-contato__campo, .formulario-contato__area-texto');
      camposForm.forEach((campo, i) => {
        if (t.placeholdersFormContato[i]) campo.placeholder = t.placeholdersFormContato[i];
      });

      const botaoEnviar = document.getElementById('botaoEnviarContato');
      if (botaoEnviar) botaoEnviar.textContent = t.botaoEnviarContato;
    }

    atualizarNomeExibicao();
    atualizarBotaoTema();
  }

  /* 9. EVENTOS DE CLIQUE (TEMA E IDIOMA)*/
  if (botaoTema) {
    botaoTema.addEventListener('click', () => {
      const ativandoClaro = !corpo.classList.contains('modo-claro');
      corpo.classList.toggle('modo-claro');
      localStorage.setItem('portfolio_modo_claro', ativandoClaro);

      if (ondaTema) {
        ondaTema.removeAttribute('data-animacao-tema');
        void ondaTema.offsetWidth;
        ondaTema.setAttribute('data-animacao-tema', ativandoClaro ? 'entrar' : 'sair');
      }

      atualizarNomeExibicao();
      atualizarBotaoTema();
    });
  }

  if (botaoIdioma) {
    botaoIdioma.addEventListener('click', () => {
      idiomaAtual = idiomaAtual === 'pt' ? 'en' : 'pt';
      localStorage.setItem('portfolio_idioma', idiomaAtual);
      aplicarIdioma(idiomaAtual);
    });
  }

  // Inicializa o estado e conecta o card do Sudoku à API do GitHub
  aplicarIdioma(idiomaAtual);
  carregarSudokuGithubApi();
});