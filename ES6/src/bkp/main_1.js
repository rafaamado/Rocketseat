class List{
    constructor(){
        this.data = [];
    }
    add(data){
        this.data.push(data);
        console.log(this.data);
    }
}

class TodoList extends List{

    constructor(){
        super();
        this.usuario = "Rafael";
    }
    mostraUsuario(){
        console.log(this.usuario);
    }

    static printAlgo(){
        console.log("Metodo estatico");
    }
}
var MinhaLista = new TodoList();
MinhaLista.add("Novo"); 