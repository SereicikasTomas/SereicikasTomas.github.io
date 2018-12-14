function bindModals(modals) {
    modals.forEach(name => {
        let modal = document.getElementById(`modal-${name}`)
        let button = document.getElementById(`button-${name}`)
        let close = modal.querySelector('.close');
    
        button.addEventListener ('click', function(){
            modal.classList.remove('out');
            modal.classList.add('in');
        });
        close.addEventListener('click', function (){
            modal.classList.add('out');
        });
    });
}
bindModals(['intro', 'work', 'about', 'contact']);