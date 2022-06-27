const btn_incluir = document.getElementById("button_incluir");
const btn_listar = document.getElementById("button_listar");
const coment = document.getElementById("info");

let produtos = [];
let id = 0;

btn_incluir.addEventListener("click", incluir);
btn_listar.addEventListener("click", listar_tabela);

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
function listar_tabela(){
    let tbody = document.getElementById("tbody");
    tbody.innerText = "";
    let i = 0;

    console.log(produtos.length);

    if(produtos.length === 0){
        coment.innerText = "Lista Vazia"
    }
    else{
        do{

            let tr = tbody.insertRow();

            let td_id = tr.insertCell();
            let td_produto = tr.insertCell();
            let td_valor = tr.insertCell();
            let td_edit = tr.insertCell();
            let td_exclui = tr.insertCell();

            td_id.innerText = produtos[i].id;
            td_produto.innerText = produtos[i].nome;
            td_produto.setAttribute("onclick", "exibeProduto("+ produtos[i].id +")");

            td_valor.innerText = produtos[i].valor;

            let img_edit = document.createElement("span");
            img_edit.innerHTML = `<span class="material-icons">edit</span>`;
            img_edit.setAttribute("onclick","editProduto("+ produtos[i].id +")");
            
            let img_exclui = document.createElement("span");
            img_exclui.innerHTML = `<span class="material-icons">delete</span>`;
            img_exclui.setAttribute("onclick","deleteProduto("+ produtos[i].id +")");
            console.log(produtos[i].id);

            td_edit.appendChild(img_edit);
            td_exclui.appendChild(img_exclui);

            i++;
        }while(i < produtos.length);

    }
}

// ---------- Deletar
function deleteProduto(parametroId){

    console.log(parametroId);
    console.log("delete produto o id" + parametroId);

    let j = 0;
    let produtoAuxiliar={};
    let arrayProdutosAuxiliar=[];
    let count = 0;

    do{ 
        console.log("----j-----");
        console.log(j);
        console.log("----j-----");
        
        if(j != parametroId){
            
            produtoAuxiliar.id=count;
            produtoAuxiliar.nome=produtos[j].nome;
            produtoAuxiliar.valor=produtos[j].valor;
            produtoAuxiliar.descricao=produtos[j].descricao;
            produtoAuxiliar.incluidoEm=produtos[j].incluidoEm;

            arrayProdutosAuxiliar.push(produtoAuxiliar);
           
           
            console.log(produtoAuxiliar);
            console.log(arrayProdutosAuxiliar);

            produtoAuxiliar = [];
            j++;
            count++;
        }        
        else{
            j++;
        }
    
    }while(j < (produtos.length));

    produtos = arrayProdutosAuxiliar;

    coment.innerText = "Produto ID " + parametroId + " deletado com sucesso!";
    
    console.log("Depois");
    console.log(produtos);

    id=(produtos.length);
    console.log(id);
    listar_tabela();
}

// ---------- editar
function editProduto(parametroId){

    console.log("editar o produto id " + parametroId);
    // console.log("Antes--------");
    // console.log(produtos);

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

    listar_tabela();
}

// ---------- Exibir
function exibeProduto(parametroId){

    console.log("exibe");

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




