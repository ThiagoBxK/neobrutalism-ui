async function getData() {
  try {
    const response = await fetch("technologies.json");
    if (!response.ok) throw new Error(response.status);

    return response.json();
  } catch (error) {
    return {
      error: `Ops! Ocorreu um erro ao carregar o arquivo technologies.json: ${error}`,
    };
  }
}

function cardElement(card) {
  return `<div class="card-container">
  <a target="_blank" ${
    card.name === "GitHub" && "href='https://github.com/ThiagoBxK'"
  }>
  <div class="card">
    <div class="card-front">
      <div class="card-image">
        <img src="${card.image}" />
      </div>

      <div class="card-badge">${card.badge}</div>
    </div>
    <div class="card-back">
      <h2 class="back-title">${card.name}</h2>
      <span class="back-description">
        ${card.description}
      </span>
    </div>
  </div></a>
</div>`;
}

async function renderCards() {
  const data = await getData();
  if (data.error) return alert(data.error);

  const html = data.items.map((technology) => cardElement(technology));
  document.getElementById("card-list").innerHTML = html
    .toString()
    .replace(/,/g, "");
}

document.addEventListener("DOMContentLoaded", renderCards());
