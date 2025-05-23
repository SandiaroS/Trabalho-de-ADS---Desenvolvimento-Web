function toggleMenu() {
    let menu = document.querySelector(".menu");
    let button = document.querySelector(".menu-toggle span");

    menu.classList.toggle("active");

    // Altera o ícone do botão
    button.textContent = menu.classList.contains("active") ? "✖" : "☰";
}

// Aguarda o carregamento do DOM antes de adicionar eventos
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".menu-toggle").addEventListener("click", toggleMenu);
});

function validarFormulario() {
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const msg = document.querySelector("textarea[name='msg']").value.trim();

    if (!nome || !email || !msg) {
        alert("Por favor, preencha todos os campos antes de enviar.");
    } else {
        alert("Mensagem enviada com sucesso!");
        
        // Limpar os campos (clear)
        document.getElementById("form-contato").reset();
    }
}

// Limpa o formulário ao carregar a página
document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("form-contato");
    if (formulario) {
        formulario.reset();
    }
});
