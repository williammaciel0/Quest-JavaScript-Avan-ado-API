import { baseUr1, repositoriesQuantity } from '../variables.js'

async function getEvents(userName){
    const response = await fetch(`${baseUr1}/${userName}/events?per_page=${repositoriesQuantity}`)
    // console.log(await response.json())
    return await response.json()
}

export { getEvents }