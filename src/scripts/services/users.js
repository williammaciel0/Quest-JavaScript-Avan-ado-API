import { baseUr1 } from "../variables.js";

// função para buscar dados de usuário
async function getUser(userName){
    // buscar dados
    const response = await fetch(`${baseUr1}/${userName}`);
    return await response.json()

}

export { getUser } 