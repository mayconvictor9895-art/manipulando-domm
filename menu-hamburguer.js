/*clicar no button
 
 - mostrar o menu
 - alterar propriedades de acessibilidade 
 - trocar o icone do menu
*/

const btnMenu = document.getElementById("btn-menu")
console.log(btnMenu)
const navPrincipal = document.getElementById("navegacao-primaria")
const icone = btnMenu.querySelector("i")


console.log(navPrincipal)
// addeventlistener - serve para observar ações/eventos em elementos do HTML 
// e executgar uma função quando esse evento acontece
// addEventListener(evento/ação, função)
btnMenu.addEventListener("click", abrirMenu)

// toggle - adicione/remove a classe
    function abrirMenu() {
    //     navPrincipal.style.display = "block"
    navPrincipal.classList.toggle("nav-ativa")

    // verifica se o menu está aberto. O metodo cointains, retorna verdadeiro ou falso
    const menuAberto = navPrincipal.classList.contains("nav-ativa")

    // atualiza acessibilidade
    btnMenu.setAttribute("aria-expanded", menuAberto)

    if(menuAberto){
        icone.classList.remove("fi-sr-menu-burger")
        icone.classList.add("fi-sr-x")
    } else{
        icone.classList.remove("fi-sr-x")
        icone.classList.add("fi-sr-menu-burger")
    }
}