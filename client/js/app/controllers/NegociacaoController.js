class NegociacaoController {

    constructor(){
        let $ = document.querySelector.bind(document)       
        this._inputData = $('#data')
        this._inputQuantidade = $('#quantidade')
        this._inputValor = $('#valor')
    }
    
    adiciona(event){
        event.preventDefault()

        let data = DateHelper.textoParaData(this._inputData.value)
        console.log(data)
        
        let negociacao = new Negociacao(
            data,
            this._inputQuantidade.value,
            this._inputValor.value
        )

        let dataFormatada = DateHelper.dataParaTexto(negociacao._data) 
        console.log(dataFormatada)
    }
}