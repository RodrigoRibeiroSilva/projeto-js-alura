class ListaNegociacoes {
    
    constructor(){
        this._negociacoes = []
    }

    adicionaNegociacao(negociacao){
        this._negociacoes.push(negociacao)
    }

    get negociacoes(){
        return this._negociacoes
    }
}