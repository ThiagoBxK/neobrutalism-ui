const technologies = [
  {
    image: "./icons/technologies/html.png",
    badge: "HTML",
    name: "HTML",
    description:
      "É a estrutura básica de páginas web. Define o conteúdo e a organização dos elementos (como textos, imagens, links, tabelas, etc.) na página",
  },
  {
    image: "./icons/technologies/css.png",
    badge: "CSS",
    name: "CSS",
    description:
      "Usado para estilizar páginas web. Define cores, fontes, layout e outras propriedades visuais dos elementos HTML.",
  },
  {
    image: "./icons/technologies/javascript.png",
    badge: "JavaScript",
    name: "JavaScript",
    description:
      "Linguagem de programação usada para adicionar interatividade e dinamicidade às páginas web.",
  },
  {
    image: "./icons/technologies/java.png",
    badge: "Java",
    name: "Java",
    description:
      "Linguagem de programação orientada a objetos, usada em diversos tipos de aplicações, incluindo web, mobile e enterprise.",
  },
  {
    image: "./icons/technologies/php.png",
    badge: "PHP",
    name: "PHP",
    description:
      "Linguagem de programação usada principalmente para desenvolvimento web dinâmico no lado do servidor.",
  },
  {
    image: "./icons/technologies/react.png",
    badge: "React",
    name: "React",
    description:
      "Biblioteca JavaScript para construção de interfaces de usuário dinâmicas e interativas, especialmente em aplicativos de página única.",
  },
  {
    image: "./icons/technologies/nodejs.png",
    badge: "Node.js",
    name: "Node.js",
    description:
      "Ambiente de execução JavaScript no servidor, que permite criar aplicações rápidas e escaláveis.",
  },
  {
    image: "./icons/technologies/git.png",
    badge: "Git",
    name: "Git",
    description:
      "Sistema de controle de versão distribuído, utilizado para gerenciar e versionar o código-fonte de projetos de software.",
  },
  {
    image: "./icons/technologies/github.png",
    badge: "@ThiagoBxK",
    name: "GitHub",
    href: "https://github.com/ThiagoBxK",
    description:
      "GitHub é uma plataforma para armazenar e colaborar em projetos de código usando Git.",
  },
];

function renderTechnologies(technologies) {
  const element = document.getElementById("card-list");
  const html = technologies.map((technology) => {
    return `
 <div class="card-container">
          <a target="_blank" ${
            technology.name === "GitHub" &&
            "href='https://github.com/ThiagoBxK'"
          }>
          <div class="card">
            <div class="front">
              <div class="image">
                <img src="${technology.image}" />
              </div>

              <div class="badge">${technology.badge}</div>
            </div>
            <div class="back">
              <h2 class="title">${technology.name}</h2>
              <span class="description">
                ${technology.description}
              </span>
            </div>
          </div></a>
        </div>`;
  });

  element.innerHTML = html.toString().replace(/,/g, "");
}

renderTechnologies(technologies);
alert("Projeto criado por: @ThiagoBxK, caso use o projeto deixe os creditos.");
