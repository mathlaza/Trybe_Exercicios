function handleSubmit(manga) {
    manga.preventDefault();
    
    const valida = validation();
    if (valida === false) {
        alert('Dados inválidos');
    } else {
        alert('Enviado com sucesso!');
    }
}

function clearAll() {
    const formElements = document.querySelectorAll('input');
    const textArea = document.querySelector('textarea');
    for (let i = 0; i < formElements.length; i += 1) {
        formElements[i].value = '';
        formElements[i].checked = false;
    }
    textArea.value = '';
}

function enableSubmit() {
    const submitBtn = document.querySelector('#submit-btn');
    const agreement = document.querySelector('#agreement');
    submitBtn.disabled = !agreement.checked;
}

function validation() {
    const name = document.querySelector('#fullName').value.length;
    const invalidName = name < 10 || name > 40;

    const email = document.querySelector('#email').value.length;
    const invalidEmail = email < 10 || email > 50;

    const reason = document.querySelector('#why').value.length;
    const invalidReason = reason > 500;

    if (invalidName || invalidEmail || invalidReason) {
        return false;
    } else {
        return true;
    }
}

window.onload = function () {
    const submitBtn = document.querySelector('#submit-btn');
    submitBtn.addEventListener('click', handleSubmit);
    const clearBtn = document.querySelector('#clear-btn');
    clearBtn.addEventListener('click', clearAll);
    const agreement = document.querySelector('#agreement');
    agreement.addEventListener('change', enableSubmit);
};


