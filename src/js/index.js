const botaoTrailer = document.querySelector(".botao-trailer");
const botaoFecharModal = document.querySelector(".fechar-modal");
console.log(document);
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;

function alternarModal (){
    modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => {
   alternarModal();
   video.setAttribute("src", linkDoVideo)
});

botaoFecharModal.addEventListener("click", () => {
    modal.classList.remove("aberto");
    video.setAttribute("src", "");
});


