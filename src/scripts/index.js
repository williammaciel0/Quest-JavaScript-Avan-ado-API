import { getUser } from "./services/users.js";
import { getRepositories } from './services/repositories.js'
import { getEvents } from './services/events.js'

import { user } from "./objects/user.js";
import { screen } from "./objects/screen.js"

function validateEmptyInput(userName){
    if(userName.length === 0){
        alert('Preencha o campo!')
        return true
    }
}

// event para click com mouse
document.getElementById('btn-search').addEventListener('click', () => {
    const userName = document.getElementById('input-search').value
    if(validateEmptyInput(userName)) return
    getUserData(userName)
})

// event para o input, acionará quando apertar Enter
document.getElementById('input-search').addEventListener('keyup', (e) => {
    // numero 13 é o identificador da tecla Enter
    const userName = e.target.value // valor dentro do input
    const key = e.which || e.keyCode // código da chave identificadora
    const isEnterKeyPressed = key === 13
    if(isEnterKeyPressed){
        if(validateEmptyInput(userName)) return
        getUserData(userName)
    }
})

async function getUserData(userName){
    const userResponse = await getUser(userName)
    
    if(userResponse.message === "Not Found"){
        screen.renderNotFound()
        return
    }
    const repositoriesResponse = await getRepositories(userName)
    const eventsResponse = await getEvents(userName)

    user.setInfo(userResponse)
    user.setRepositories(repositoriesResponse)
    user.setEvents(eventsResponse)

    screen.renderUser(user)
    
}
