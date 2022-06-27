const btn_incluir = document.getElementById("button_incluir");
const btn_listar = document.getElementById("button_listar");
const btn_pesquisar = document.getElementById("button_pesquisar");
const coment = document.getElementById("info");

let produtos = [];
let id = 0;

btn_incluir.addEventListener("click", incluir);
btn_listar.addEventListener("click", chamaList);
btn_pesquisar.addEventListener("click", pesquisa);

// ---------- Adicionar
function incluir(){
   
    let produto = ler_produtos();
    console.log(produto);
    if(produto == null){
        btn_incluir.removeEventListener("click", incluir);
        btn_incluir.addEventListener("click", incluir);
    }
    else{
        add_array(produto);
        coment.innerHTML=`Produto ${produto.nome} incluído com sucesso!`;
        limpar_campos();
        console.log(produtos);
    }
}

function ler_produtos(){
    
    let prod_id = {};
    let incluidoEm = Date.now();

    prod_id.id = id;
    prod_id.nome = document.getElementById("produto").value;
    prod_id.descricao = document.getElementById("descricao").value;
    prod_id.valor = document.getElementById("value").value;
    prod_id.incluidoEm = incluidoEm;

    if(valid(prod_id)){
        return prod_id;
    }
    else{
        return null;
    }

}

function add_array(prod){
    produtos.push(prod);
    id++;
}

function limpar_campos(){
    document.getElementById("produto").value = "";
    document.getElementById("value").value = "";
    document.getElementById("descricao").value = "";
}

// ---------- Listar
function chamaList(){
    console.log("chamou listar");
    ordenaId();
    listar_tabela(produtos);
}

function listar_tabela(arrProdutos){
    let tbody = document.getElementById("tbody");
    tbody.innerText = "";

    console.log(arrProdutos.length);

    if(arrProdutos.length === 0){
        coment.innerText = "Lista Vazia"
    }
    else{
        for(let i=0; i < arrProdutos.length; i++ ){
           
            let tr = tbody.insertRow();

            let td_id = tr.insertCell();
            let td_produto = tr.insertCell();
            let td_valor = tr.insertCell();
            let td_edit = tr.insertCell();
            let td_exclui = tr.insertCell();

            td_id.innerText = arrProdutos[i].id;
            td_produto.innerText = arrProdutos[i].nome;
            td_produto.setAttribute("onclick", "exibeProduto("+ arrProdutos[i].id +")");

            td_valor.innerText = arrProdutos[i].valor;

            let img_edit = document.createElement("span");
            img_edit.innerHTML = `<span class="material-icons">edit</span>`;
            img_edit.setAttribute("onclick","editProduto("+ arrProdutos[i].id +")");
            
            let img_exclui = document.createElement("span");
            img_exclui.innerHTML = `<span class="material-icons">delete</span>`;
            img_exclui.setAttribute("onclick","deleteProduto("+ arrProdutos[i].id +")");
            console.log(arrProdutos[i].id);

            td_edit.appendChild(img_edit);
            td_exclui.appendChild(img_exclui);

        }
    }
}

// ---------- Deletar
function deleteProduto(parametroId){

    console.log(parametroId);
    console.log("delete produto o id" + parametroId);
    ordenaId();

    produtos.splice(parametroId, 1);

    console.log("Depois");
    console.log(produtos);

    coment.innerText = "Produto ID " + parametroId + " deletado com sucesso!";
    id=(produtos.length);
    console.log(id);

    for(let count = 0; count<id ; count++){
        produtos[count].id=count;
    }

    listar_tabela(produtos);
}

// ---------- editar
function editProduto(parametroId){

    ordenaId();
    console.log("editar o produto id " + parametroId);

    let produto_aux = {};
    produto_aux = ler_produtos();
    
    let incluidoEm_aux = produtos[parametroId].incluidoEm;
    
    if(produto_aux == null){
        btn_incluir.removeEventListener("click", incluir);
        btn_incluir.addEventListener("click", incluir);
    }
    else{

        produtos[parametroId].nome = produto_aux.nome;
        produtos[parametroId].descricao = produto_aux.descricao;
        produtos[parametroId].valor = produto_aux.valor;
        
        produtos[parametroId].id = parametroId;
        produtos[parametroId].incluidoEm = incluidoEm_aux;

        coment.innerHTML=`Produto ${produtos[parametroId].nome} editado com sucesso!`;
        limpar_campos();
        console.log(produtos);
    }

    console.log("Depois");
    console.log(produtos);

    listar_tabela(produtos);
}

// ---------- Exibir
function exibeProduto(parametroId){

    console.log("exibe");
    ordenaId();
    console.log("exibir o produto id " + parametroId);

    coment.innerHTML = `<p>ID: `+ produtos[parametroId].id +`</p>`;
    coment.innerHTML += `<p>Nome: ` + produtos[parametroId].nome +`</p>` ;
    coment.innerHTML += `<p>Valor: ` + produtos[parametroId].valor +`</p>`;
    coment.innerHTML += `<p>Descrição: ` + produtos[parametroId].descricao +`</p>`;
    exibirData(parametroId);

}

// ---------- Data --->>>> Formato: dd/mm/ano hh:mm:ss 
function exibirData(parametroId){

    console.log("entrou em exibe data");

    let dateTime = produtos[parametroId].incluidoEm;
    const date = new Date(dateTime);
    console.log(date);

    const day = date.getDate();
    const month = date.getMonth()+1;
    const year = date.getFullYear();
    const hh = date.getHours();
    const mm = date.getMinutes();
    const ss = date.getSeconds();

    console.log(day, month, year, hh, mm, ss);

    return coment.innerHTML += `<p>Data de criação: ` +  day + "/" +  month  + "/" + year + "  " + hh + ": " + mm + ": " + ss +`</p>`;
    
}

// ---------- Ordena Produto
function ordenaProduto(){
    
    console.log("ordena Produtos");

    produtos.sort(function(a, b){
        let x = a.nome.toUpperCase(),
            y = b.nome.toUpperCase();

        if(x > y){
            return 1;
        }else if(x < y){
            return -1;
        }
        return 0;
    });

    console.log(produtos);

    listar_tabela(produtos);
}
// ---------- Ordena Valor
function ordenaValor(){
    
    console.log("ordena Valor");

    produtos.sort((a, b) => {

        return a.valor - b.valor;
    });

    console.log(produtos);

    listar_tabela(produtos);

}
// ---------- Ordena ID
function ordenaId(){
    
    console.log("ordena os id");

    produtos.sort((a, b) => {

        return a.id - b.id;
    });

    console.log(produtos);

    listar_tabela(produtos);

}

// ---------- Pesquisa
function pesquisa(){
    
    console.log("função pesquisa");

    const busca = document.getElementById("pesquisa").value;
    console.log(busca);
    
    const list = produtos.filter((item) => {
        if(item.nome === busca || item.descricao === busca){
            return true;
        }
        return false;
    });

    console.log(list);
    const numeroDeProdutos = list.length;

    if(busca === ""){
        coment.innerText = ` `;
        ordenaId();
        listar_tabela(produtos);
    }
    else if(list.length === 0){
        coment.innerText = `Não foram encontrados produtos conforme chave de pesquisa!`;
    }
    else if(list.length != 0){

        coment.innerText = `Foram encontrado(s) ${numeroDeProdutos} produtos`;
        console.log(list);
        listar_tabela(list);

    };

    console.log(list);
}

// ---------- validações
function msg_erro(erro){
    coment.textContent = erro;
}

function valid(prod_id){
    try{
        if(prod_id.nome === "" && prod_id.valor === "" &&  prod_id.descricao === ""){
            throw `Falha no cadastro do produto! Preencha os campos!`
        }
        if(prod_id.nome === ""){
         throw `Falha no cadastro do produto! Preencha o campo Nome!`
        }
        if(prod_id.descricao === ""){
         throw `Falha no cadastro do produto! Preencha o campo Descrição!`
        }
        if(prod_id.valor === ""){
         throw `Falha no cadastro do produto! Preencha o campo Valor!`
        }
        if(isNaN(prod_id.valor) || prod_id.valor < 0){
         throw `Falha no cadastro do produto! Campo Valor inválido!`
        }
        return true;
     }
    catch (e){
        msg_erro(e);
        return false;
    }
}