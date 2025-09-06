import { baseUr1, repositoriesQuantity } from '../variables.js'

async function getEvents(userName){
    const response = await fetch(`${baseUr1}/${userName}/events?per_page=${repositoriesQuantity}`);
    // console.log(await response.json())
    // const events = [response.json()];
    // return events.filter(element => element.type === 'CreateEvent' || element.type === 'PushEvent'); // usando filter para filtrar dados nescessarios

    return await response.json()

}

export { getEvents }