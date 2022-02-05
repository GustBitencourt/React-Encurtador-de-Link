//Buscar links salvos no storage
export async function getLinksSaved(key) {
    //localStorage recebe uma 'chave' pra salvar
    const myLinksSaved = await localStorage.getItem(key);

    //converter pra array
    let linksSaves = JSON.parse(myLinksSaved) || [];

    return linksSaves;
}


//salvar links no  LocalStorage
export async function saveLink(key, newLink) {
    //buscar item salvo na funcao getLinksSaved
    let linksStored = await getLinksSaved(key);

    //Se já tiver algum link com o mesmo id não deixar duplicar
    const hasLink = linksStored.some(link => link.id === newLink.id);

    if(hasLink) {
        console.log('Link já está salvo na sua lista');
        return;
    }

    //adicionando link na lista de salvos
    linksStored.push(newLink);
    await localStorage.setItem(key, JSON.stringify(linksStored));
    console.log("Link Salvo com sucesso!")
}


//deletar link salvo
export function deleteLink(links, id) {
    //filtrando links
    let myLinks = links.filter(item => {
        //retorna apenas o link selecionado
        return (item.id !== id)
    })

    localStorage.setItem('shortLink', JSON.stringify(myLinks));

    //retorna o array sem o link selecionado
    return myLinks;
}