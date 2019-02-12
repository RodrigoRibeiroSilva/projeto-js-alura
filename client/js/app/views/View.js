class View {

    constructor(elemento){
        this._elemento = elemento
    }

    template(){
        throw new Error('O método template deve ser implementado')
    }

    atualiza(modelo){
        //innerHTML converte uma string para um elemento do dom 
        this._elemento.innerHTML = this.template(modelo)
    }
}