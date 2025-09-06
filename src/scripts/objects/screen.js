const screen = {
    userProfile: document.querySelector('.profile-data'),
    userEvents: document.querySelector('.events'),
    renderUser(user){
        this.userProfile.innerHTML = `<div class="info">
                                        <img src="${user.avatarUrl}" alt="Foto do perfil" />
                                        <div class="data"> 
                                            <h1>${user.name ?? 'Não posue nome cadastrado &#128546'}</h1>
                                            <p>${user.bio ?? 'Não posue bio cadastrado &#128546'}</p>
                                            <p>&#128101 Seguidores ${user.userSeguidores}</p>
                                            <p>&#128101 Seguindo ${user.userSeguindo}</p>
                                        </div>
                                    </div>`
        let repositoriesItens = ''
        user.repositories.forEach(repo => repositoriesItens += `<li><a href="${repo.html_url}" target="_blank">${repo.name} 
            <div class="info-com-emogi">
                <p>&#127860 ${repo.forks ?? 'Sem forks'}</p>
                <p>⭐ ${repo.stargazers_count ?? 'Sem estrelas'}</p>
                <p>&#128064 ${repo.watchers ?? 'Sem watchers'}</p>
                <p>👨‍💻 ${repo.language ?? 'Sem language'}</p>
            </div></a></li>`);
        
        if(repositoriesItens.length > 0){
            this.userProfile.innerHTML += `<div class="repositories section">
                                                <h2>Repositorios</h2>
                                                <ul>${repositoriesItens}</ul>
                                           </div>`
        }

        let eventsItens = ''
        user.events.forEach( event => { 
            
            if(event.payload.commits){
                eventsItens += `<li><b>${event.repo.name}</b> -${event.payload.commits[0].message}</li>`
            } else if(event.type === "CreateEvent"){
                eventsItens += `<li><b>${event.repo.name}</b> -Sem mensagem de commit</li>`
            }
        
        });
        

        if(eventsItens.length > 0){
            this.userEvents.innerHTML = `<h2>Eventos</h2>
                                         <ul>${eventsItens}</ul>`
        }
        
    },

    renderNotFound(){
        this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>"
    }

}

export { screen }