
const formulario = document.getElementById("form-atendimento");
const numeroWhatsApp = "5571991515130";

document.getElementById("ano").textContent =
  new Date().getFullYear();

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  if (!formulario.reportValidity()) {
    return;
  }

  const nome = document.getElementById("nome").value.trim();
  const veiculo = document.getElementById("veiculo").value.trim();
  const problema = document.getElementById("problema").value.trim();
  const telefone = document.getElementById("telefone").value.trim();

  const digitosTelefone = telefone.replace(/\D/g, "");

  if (!nome || !veiculo || !problema ||
      ![10, 11, 12, 13].includes(digitosTelefone.length)) {
    alert("Confira os campos e informe um telefone válido.");
    return;
  }

  const mensagem = [
  "🔧 *DX HIDRÁULICA — SOLICITAÇÃO DE ATENDIMENTO*",
  "",
  "Olá, DX Hidráulica! Gostaria de solicitar atendimento.",
  "",
  `👤 *Nome:* ${nome}`,
  `🚗 *Veículo:* ${veiculo}`,
  `🛠️ *Problema:* ${problema}`,
  `📱 *WhatsApp:* ${telefone}`,
  "",
  "Aguardo retorno para conversar sobre o serviço."
].join("\n");

  const url =
    "https://wa.me/" +
    numeroWhatsApp +
    "?text=" +
    encodeURIComponent(mensagem);

  window.location.href = url;
});
