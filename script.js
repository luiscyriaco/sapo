function toggleSubButtons(id) {
    // Seleciona todos os elementos com a classe 'sub-buttons'
    const allSubButtons = document.querySelectorAll('.sub-buttons');
    // Seleciona todos os botões principais
    const allMainButtons = document.querySelectorAll('button[type="button"]');

    // Remove a classe 'active-main' de todos os botões principais
    allMainButtons.forEach(button => {
        button.classList.remove('active-main');
    });

    // Remove a classe 'active' de todos os sub-botões
    allSubButtons.forEach(subButtons => {
        subButtons.classList.remove('active');
        subButtons.querySelectorAll('button').forEach(button => {
            button.classList.remove('active-sub');
        });
    });

    // Verifica se o ID clicado é "curriculo"
    if (id === 'curriculo') {
        // Mostra a seção correspondente ao "curriculo"
        document.getElementById('curriculo').style.display = 'block';
    } else {
        // Seleciona o submenu correspondente ao ID clicado
        const currentSubButtons = document.getElementById(id);
        if (currentSubButtons) {
            currentSubButtons.classList.add('active');
        }

        // Marca o botão principal como ativo
        const activeButton = document.querySelector(`button[onclick="toggleSubButtons('${id}')"]`);
        if (activeButton) {
            activeButton.classList.add('active-main');
        }
    }
}

function showSection(sectionId) {
    // Seleciona todas as seções de conteúdo
    const sections = document.querySelectorAll('.content-section');

    // Oculta todas as seções de conteúdo
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Mostra a seção selecionada
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
}

// Função para ativar o sub-botão clicado
function activateSubButton(button) {
    // Remove a classe 'active-sub' de todos os sub-botões
    document.querySelectorAll('.sub-buttons button').forEach(btn => {
        btn.classList.remove('active-sub');
    });

    // Adiciona a classe 'active-sub' ao sub-botão clicado
    if (button) {
        button.classList.add('active-sub');
    }
}
