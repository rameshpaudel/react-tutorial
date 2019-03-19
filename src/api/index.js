async function fetchAPI(url){
    var fetchRequest = await fetch(url);
    return fetchRequest.json();
}

export {
    fetchAPI
}