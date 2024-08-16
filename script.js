document.addEventListener('DOMContentLoaded', () => {
    function setInitialState() {
        const initialButtonId = 'sub-btn1';
        const initialSubButtonId = 'cadastro-pf';

        const initialMainButton = document.querySelector(`button[onclick="toggleSubButtons('${initialButtonId}')"]`);
        if (initialMainButton) {
            initialMainButton.classList.add('active-main');
        }

        const initialSubButtons = document.getElementById(initialButtonId);
        if (initialSubButtons) {
            initialSubButtons.classList.add('active');
        }

        const initialSubButton = initialSubButtons.querySelector(`button[onclick="showSection('cadastro-pf'); activateSubButton(this)"]`);
        if (initialSubButton) {
            initialSubButton.classList.add('active-sub');
        }

        showSection('cadastro-pf');
    }

    setInitialState();
});

function toggleSubButtons(id) {
    const allSubButtons = document.querySelectorAll('.sub-buttons');
    const allMainButtons = document.querySelectorAll('button[type="button"]');

    allMainButtons.forEach(button => {
        button.classList.remove('active-main');
    });

    allSubButtons.forEach(subButtons => {
        subButtons.classList.remove('active');
        subButtons.querySelectorAll('button').forEach(button => {
            button.classList.remove('active-sub');
        });
    });

    if (id === 'curriculo') {
        document.getElementById('curriculo').style.display = 'block';
    } else {
        const currentSubButtons = document.getElementById(id);
        if (currentSubButtons) {
            currentSubButtons.classList.add('active');
        }

        const activeButton = document.querySelector(`button[onclick="toggleSubButtons('${id}')"]`);
        if (activeButton) {
            activeButton.classList.add('active-main');
        }
    }
}

function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');

    sections.forEach(section => {
        section.style.display = 'none';
    });

    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'flex';
    }
}

function activateSubButton(button) {
    document.querySelectorAll('.sub-buttons button').forEach(btn => {
        btn.classList.remove('active-sub');
    });

    if (button) {
        button.classList.add('active-sub');
    }
}

let dependenteCount = 1;

function addDependente() {
    dependenteCount++;
    const container = document.getElementById('dependentes-container');
    const newDependente = document.createElement('div');
    newDependente.className = 'dependente-item';
    newDependente.id = `dependente-${dependenteCount}`;
    newDependente.innerHTML = `
        <label for="dependente${dependenteCount}-fun">Dependente
            <input type="text" id="dependente${dependenteCount}-fun" name="dependente${dependenteCount}-fun" class="dependente-input dependente-input-field" required />
        </label>
        <label for="cpf${dependenteCount}-fun">CPF
            <input type="text" id="cpf${dependenteCount}-fun" name="cpf${dependenteCount}-fun" class="cpf-input cpf-input-field" required />
        </label>
        <label for="idade${dependenteCount}-fun">Idade
            <input type="text" id="idade${dependenteCount}-fun" name="idade${dependenteCount}-fun" class="idade-input idade-input-field" required />
        </label>
        <label for="parentesco${dependenteCount}-fun">Parentesco
            <select type="text" id="parentesco1-fun" name="parentesco1-fun"
                                    class="parentesco-input parentesco-input-field" required />
                                <option value="" Selecionar selected>Selecione...</option>
                                <option value="conjuge">Cônjuge</option>
                                <option value="filhoate18">Filho até 18 anos</option>
                                <option value="filhouniversitario">Filho até 24 anos Universitário</option>
                                <option value="filhopcd">Filho PCD</option>
                                </select>
        </label>
        <span class="remove-dependente" onclick="removeDependente(this)">❌</span>
    `;
    container.appendChild(newDependente);
}

function removeDependente(element) {
    const container = document.getElementById('dependentes-container');
    container.removeChild(element.parentElement);
}
