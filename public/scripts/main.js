import Modal from './modal.js'

const modal = Modal();

//Pegar o click do marcar como lido
const deleteButtons = document.querySelectorAll(".action a.delete");

const modalTitle = document.querySelector('.modal h2');
const modalDescription = document.querySelector('.modal p');
const modalButton = document.querySelector('.modal button');
const modalInput = document.querySelector('.modal #password');

const checkButtons = document.querySelectorAll(".action a.check");

deleteButtons.forEach(button => {
    button.addEventListener("click", (event) => handleClick(event, false))
})

checkButtons.forEach(button => {
    button.addEventListener("click", handleClick)
})

function handleClick(event, check = true) {
    event.preventDefault()
    //console.log('clicado');

    const text = check ? "Marcar como lida" : "Excluir"
    const slug = check ? "check" : "delete" 

    //pegando o id da sala do html
    const roomId = document.querySelector('#room-id').dataset.id
    const questionId = event.target.dataset.id

    //atribuindo valores a tag action do html
    const form = document.querySelector(".modal form")
    form.setAttribute("action", `/question/${roomId}/${questionId}/${slug}`)

    modalTitle.innerHTML = `${text} essa pergunta?`
    //modalDescription.innerHTML = check ? "testa lido" : "testa excluir"
    modalButton.innerHTML = `Sim, ${text.toLowerCase()} `
    check ? modalButton.classList.remove("red") : modalButton.classList.add("red")
    check ? modalInput.classList.add("sr-only2") : modalInput.classList.remove("sr-only2")
    //abrir modal
    modal.open()
}


/*checkButtons.forEach(button => {
    //adicionar a escuta
    button.addEventListener("click", event => {
        console.log('check');

        modalTitle.innerHTML = "Marcar como lida?"
        modal.open();
    });
});

deleteButtons.forEach(button => {
    //adicionar a escuta
    button.addEventListener("click", event => {
        console.log('delete');

        modalTitle.innerHTML = "Excluir pergunta?"
        modal.open();
    });
});*/

