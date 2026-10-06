// Troque pelo número real, com código do país e DDD, só dígitos.
const WHATSAPP = "5500000000000";

const burger = document.getElementById("burger");
const menu = document.getElementById("menu");

burger.addEventListener("click", () => {
  const open = menu.classList.toggle("open");
  burger.setAttribute("aria-expanded", String(open));
});

menu.addEventListener("click", event => {
  if (event.target.tagName === "A") {
    menu.classList.remove("open");
    burger.setAttribute("aria-expanded", "false");
  }
});

// Apenas uma área aberta por vez.
document.querySelectorAll(".areas details").forEach(details => {
  details.addEventListener("toggle", () => {
    if (details.open) {
      document.querySelectorAll(".areas details").forEach(other => {
        if (other !== details) other.open = false;
      });
    }
  });
});

document.getElementById("form").addEventListener("submit", event => {
  event.preventDefault();

  const form = new FormData(event.target);
  const msg = document.getElementById("msg");
  const nome = form.get("nome").trim();
  const contato = form.get("contato").trim();
  const caso = form.get("caso").trim();

  if (!nome || !contato || !caso) {
    msg.textContent = "Preencha nome, contato e resumo do caso.";
    return;
  }

  const texto = `Olá, meu nome é ${nome}.\nAssunto: ${form.get("area")}\nContato: ${contato}\n\n${caso}`;
  msg.textContent = "Abrindo o WhatsApp com a sua mensagem.";
  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(texto)}`, "_blank", "noopener");
});
