# 🌐 Portfólio Duplo - Projeto Acadêmico

Um site de portfólio colaborativo desenvolvido para apresentar a trajetória, habilidades e projetos de dois estudantes de Ciência da Computação. O projeto conta com uma página inicial de seleção de perfil e navegabilidade dedicada para cada desenvolvedor.

---

## 📌 Sobre o Projeto

A ideia principal do projeto é servir como uma vitrine profissional compartilhada. Ao acessar a aplicação, o usuário encontra uma landing page central onde pode escolher qual portfólio deseja navegar.

### 🗺️ Fluxo de Navegação

1. **Página de Seleção (Início Global):** Apresenta os dois desenvolvedores com fotos e botões de acesso direto ao perfil de cada um.
2. **Portfólio Individual:** Cada perfil conta com uma **barra de navegação lateral (Sidebar)** interativa para alternar entre as seções:
   - **Início:** Apresentação geral e resumo profissional.
   - **Formação:** Informações acadêmicas, cursos e certificações.
   - **Skills:** Tecnologias, linguagens e ferramentas dominadas.
   - **Projetos:** Galeria com os principais trabalhos e repositórios.
   - **Trajetória:** Linha do tempo com marcos da carreira e estudos.
   - **Recomendações:** Depoimentos, feedbacks e avaliações.
   - **Contato:** Links para redes sociais, GitHub, LinkedIn e formulário/e-mail.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estruturação semântica das páginas e da navegação.
- **CSS3:** Estilização responsiva, layout da barra lateral e efeitos visuais.
- **JavaScript:** Manipulação do DOM e lógica de alternância/navegação entre páginas.

---

## 📂 Estrutura de Arquivos

```text
portfolio/
│
├── index.html                   # Página de seleção inicial (fotos dos dois)
├── assets/                      # Recursos globais compartilhados
│   ├── css/
│   │   └── global.css           # Estilos globais/comuns
│   ├── js/
│   │   └── global.js            # Scripts globais
│   └── images/                  # Imagens da tela inicial e logos
│
├── dev1/                        # Pasta do Desenvolvedor 1
│   ├── index.html               # Página principal do Dev 1 (resumo)
│   ├── formacao.html
│   ├── skills.html
│   ├── projetos.html
│   ├── trajetoria.html
│   ├── recomendacoes.html
│   ├── contato.html
│   ├── css/                     # Estilos específicos do Dev
│   └── imagens/                  # Fotos/prints do Dev
│
└── dev2/                        # Pasta do Desenvolvedor 2
    ├── index.html               # Página principal do Dev 1 (resumo)
│   ├── formacao.html
│   ├── skills.html
│   ├── projetos.html
│   ├── trajetoria.html
│   ├── recomendacoes.html
│   ├── contato.html
│   ├── css/                     # Estilos específicos do Dev 
│   └── imagens/                  # Fotos/prints do Dev