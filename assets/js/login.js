const mode = document.getElementById('mode-icon');
mode.addEventListener('click',() => {
    const form = document.getElementById('login-container')
    if(mode.classList.contains('fa-moon')){
        mode.classList.remove('fa-moon');
        mode.classList.add('fa-sun');

        form.classList.add('fa-sun');


        return;

    }

    mode.classList.add('fa-moon');
        mode.classList.remove('fa-sun');
        form.classList.remove('dark');

});