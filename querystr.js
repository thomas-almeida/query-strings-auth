


function storeUserData(){

    authUrl()

    const queryString = new URLSearchParams(window.location.search)
    const userAuthDataToStore = {}

    for(const [key, value] of queryString){
        userAuthDataToStore[key] = value
        localStorage.setItem(key, value)
    }

}

function authUrl() {

    let authMessage = document.querySelector('h3')

    if(!window.location.search) {
        authMessage.innerText = 'Não foi possível autenticar usuário'
        return
    }

    authMessage.innerText = 'Autenticado via query string com sucesso!'

}

window.onload = storeUserData()