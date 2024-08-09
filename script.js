function toggleSubButtons(id) {
    // Seleciona todos os elementos com a classe 'sub-buttons'
    const allSubButtons = document.querySelectorAll('.sub-buttons');
    
    // Seleciona todas as seções de conteúdo
    const allContentSections = document.querySelectorAll('.content-section');
    
    // Verifica se o ID clicado é "curriculo"
    if (id === 'curriculo') {
        // Oculta todos os sub-botões
        allSubButtons.forEach(subButtons => {
            subButtons.classList.remove('active');
        });
        
        // Oculta todas as seções de conteúdo
        allContentSections.forEach(section => {
            section.style.display = 'none';
        });
        
        // Mostra a seção correspondente ao "curriculo"
        document.getElementById('curriculo').style.display = 'block';
    } else {
        // Verifica se o submenu correspondente ao ID clicado está visível
        const currentSubButtons = document.getElementById(id);

        // Oculta todos os submenus
        allSubButtons.forEach(subButtons => {
            if (subButtons !== currentSubButtons) {
                subButtons.classList.remove('active');
            }
        });

        // Garante que o submenu clicado esteja visível
        currentSubButtons.classList.add('active');
        
        // Oculta todas as seções de conteúdo
        allContentSections.forEach(section => {
            section.style.display = 'none';
        });
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
