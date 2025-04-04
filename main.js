let botao = document.getElementById(`btn`)
let tarefa = document.getElementById(`input-tarefa`)
let lista =  document.getElementById(`list`)
let shadow = document.getElementById(`#shadow`)


botao.addEventListener("click", function(){
    let paragrafo = document.createElement('p')
    paragrafo.innerHTML = tarefa.value
    paragrafo.classList.add(`estilo-paragrafo`)
    lista.appendChild(paragrafo)
    paragrafo.addEventListener('click', function(){
        paragrafo.style.textDecoration = 'underline'
    })
    paragrafo.addEventListener('dblclick', function(){
        lista.removeChild(paragrafo)
    })
})



const mouse_shadow = function(event) {
  shadow.style.top = event.pageY + 'px';
  shadow.style.left = event.pageX + 'px';
}
document.querySelector("body").onload = function() {
    this.addEventListener("mousemove", mouse_shadow)
  }