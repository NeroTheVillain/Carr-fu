let contador = 1;
let total = 0;

const form = document.getElementById('compras');
const itemList = document.getElementById('itemList');
const totalValue = document.getElementById('totalValue');
const resetButton = document.getElementById('resetList');

//função que adiciona produto à lista 
form.addEventListener('submit', function (event) {
    event.preventDefault();  // evita que a página recarregue ao enviar formulário 

    const itemInput = document.getElementById('item');
    const valueInput = document.getElementById('value');

    const produto = itemInput.value.trim();
    const preco = parseFloat(valueInput.value);

    if (!produto || isNaN(preco) || preco < 0) {
        alert('Por favor, preencha corretamente o nome do produto e o valor!');
        return;
    }

    //add itens 
    const listItem = document.createElement('li');
    listItem.textContent = `${contador}. ${produto} - R$ ${preco.toFixed(2)}`;
    itemList.appendChild(listItem);

    //obtém valor total 
    total += preco;
    totalValue.textContent = total.toFixed(2);

    //limpa os outros campos 
    itemInput.value = '';
    valueInput.value = '';
    itemInput.focus();

    //soma +1
    contador++;
});

//reset da lista 
resetButton.addEventListener('click', function () {
    itemList.innerHTML = '';  //limpa a lista 
    total = 0;  //zera o total 
    totalValue.textContent = total.toFixed(2);  //atualiza o total no display
    contador = 1;  //reseta a numeração da lista e o contador   
    });
