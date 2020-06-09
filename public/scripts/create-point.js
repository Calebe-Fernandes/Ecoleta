

function populateUFs(){

    const UfSelect =  document.querySelector("select[name=uf]")
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then( function(res){return res.json() })  
    .then( states => { 
            

        for( const state of states){
            UfSelect.innerHTML += `<option value ="${state.id}">${state.nome}</option>`

        }
    
    })
}

populateUFs()


function getCities(event){
    const citySelect =  document.querySelector("select[name=city]")
    const stateInput = document.querySelector("[name=state]")

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text
    
    const ufValue = event.target.value

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`
    
    
    citySelect.innerHTML = "<option value>Selecione a Cidade</option>"
    citySelect.disabled = true

    fetch(url)
    .then( function(res){return res.json() })  
    .then( cities => { 
            

        for( const city of cities){
            citySelect.innerHTML += `<option value ="${city.nome}">${city.nome}</option>`

        }
        citySelect.disabled = false
    })

}

document
   .querySelector("select[name=uf]")
    .addEventListener("change",getCities)


//itens de coleta
//seleciona dentro do documento os elementos em .items-grid li
const itensToCollect = document.querySelectorAll(".items-grid li")
//cria uma const chamada item que armazena os itens anteriores ("para cada item do itensToCollect")
for (const item of itensToCollect){
    //para cada item adiciona um ouvidor de eventos do tipo click e aciona  uma função
    item.addEventListener("click",handleSelectedItem)
}

const collectedItems = document.querySelector("input[name=items]")
let selectedItems = []



function handleSelectedItem(event){
    //pega o evento ("click") e armazena anuma variavel
    const itemLi = event.target

    //adicionar ou remover uma classe com JS
    //entra na constante na propriedade classlist e modifica ela
    itemLi.classList.toggle("selected")
    //armazena a propriedade "id" na constante
    const itemId = itemLi.dataset.id



    //verificar se existem itens selecionados, e pegar caso tenha
    const alreadySelected = selectedItems.findIndex( item => {
        const itemFound = item == itemId
        return itemFound
    })
    
    //se já estiver selecionado, tirar da seleção
    //verifica se já existe o valor dentro da array selectedItems e retira se tiver
    if(alreadySelected >=0){
        const filteredItems = selectedItems.filter( item => {
            const itemIsDifferent = item != itemId
            return itemIsDifferent
        })

        selectedItems = filteredItems
    

    }
    //se não estiver selecionado, adicionar a seleção
    else {
        selectedItems.push(itemId)
    }
    //atualizar o campo hidden com os dados selecionados
    collectedItems.value = selectedItems


}

