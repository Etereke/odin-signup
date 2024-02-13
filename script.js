const pw1Container = document.querySelector('#pw1');
const pw2Container = document.querySelector('#pw2');
const pw1Input = document.querySelector('#pw1>input');
const pw2Input = document.querySelector('#pw2>input');

pw2Input.addEventListener('blur', (e) => {
    if (pw1Input.value !== pw2Input.value) {
        pw1Container.classList.add('error');
        pw2Container.classList.add('error');
    } else {
        pw1Container.classList.remove('error');
        pw2Container.classList.remove('error');
    }
})