const user = {
    avatarUrl: '',
    name: '',
    bio: '',
    userName: '',
    userSeguidores: '',
    userSeguindo: '',
    repositories: [],
    events: [],

    setInfo(gitHubUser){
        this.avatarUrl = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio
        this.userName = gitHubUser.login
        this.userSeguidores = gitHubUser.followers 
        this.userSeguindo = gitHubUser.following 
    },

    setRepositories(repositories){
        this.repositories = repositories
    },

    setEvents(events){
        this.events = events
    }
}

export { user }