import { baseUr1, repositoriesQuantity } from "../variables.js";

// buscar repositórios
async function getRepositories(userName){
    // buscar dados
    const response = await fetch(`${baseUr1}/${userName}/repos?per_page=${repositoriesQuantity}`); // ?per_page=10 ira buscara apenas 10 repositórios
    return await response.json()
}

export { getRepositories }