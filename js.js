function addToList() {
    //variaveis p pegar os valores digitados
    const name = document.querySelector("#name").value;
    const descricao = document.querySelector("#descricao").value;
    const dataFinal = document.querySelector("#dataFinal").value;
    //nova variavel tipo date pegando data atual
    const currentDate = new Date();
    //usando a funçao para formatar a variavel date para DD/MM/AA
    const formattedDate = formatDate(currentDate);
    //nova variavel para formatar a data passada pelo usuario, usando a funçao ja criada
    const formattedDataFinal = formatDate(new Date(dataFinal));

    //buscando no html a parte em que vai ficar salva
    let tBody = document.querySelector("#tBody");
    //variaveis chamando funcoes passando os dados p/ serem adicionados
    let tr = createTr();
    let tdName = createTd(name);
    let tdDescricao = createTd(descricao);
    let tdDataInicial = createTd(formattedDate);
    let tdDataFinal = createTd(formattedDataFinal);
    let tdCheck = createTd("");
    let btnRemove = createTd("");
    
    //verificação de informaçoes vazias
    if (name == "" || descricao == "" || dataFinal == "") {
        error();
    } else {
        //utilizando a funçao appendchild para juntar
        btnRemove.appendChild(createBtn());
        tdCheck.appendChild(createCheckbox());
        tr.appendChild(tdName);
        tr.appendChild(tdDescricao);
        tr.appendChild(tdDataInicial);
        tr.appendChild(tdDataFinal);
        tr.appendChild(tdCheck);
        tr.appendChild(btnRemove);
        tBody.appendChild(tr);
        error();
    }
}
//funçao de formatar data
function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}
//funçao de error se nao completar os campos
function error() {
    const name = document.querySelector("#name").value;
    const descricao = document.querySelector("#descricao").value;
    const dataInicial = document.querySelector("#dataInicial");
    const dataFinal = document.querySelector("#dataFinal").value;

    if (name == "" || descricao == "" || dataInicial == "" || dataFinal == "") {
        let errorMsg = document.querySelector("#errorM");
        errorMsg.innerText = "All fields are required!";
        return errorMsg;
    } else {
        let correctMsg = document.querySelector("#errorM");
        correctMsg.innerText = "";
        return correctMsg;
    }
}
//funçao para criar linha na tabela
function createTr() {
    let tr = document.createElement("tr");
    return tr;
}
//funçao do botao de remover
function createBtn() {
    let btn = document.createElement("span");
    btn.innerText = "Remove";
    btn.addEventListener('click', () => {
        btn.parentNode.parentNode.remove();
    });
    return btn;
}
//funçao de colunas
function createTd(text) {
    let td = document.createElement("td");
    td.innerHTML = text;
    return td;
}
//funçao do checkbox
function createCheckbox() {
    let checkbox = document.createElement("input");
    checkbox.type = 'checkbox';
    return checkbox;
}