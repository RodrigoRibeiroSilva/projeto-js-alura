class NegociacaoController {

    constructor(){
        let $ = document.querySelector.bind(document)       
        this._inputData = $('#data')
        this._inputQuantidade = $('#quantidade')
        this._inputValor = $('#valor')
        this._listaNegociacoes = new ListaNegociacoes()

        this._negociacoesView = new NegociacoesView($('#negociacoesView'))
        this._negociacoesView.atualiza(this._listaNegociacoes)

        this._mensagem = new Mensagem()
        this._mensagemView = new MensagemView($('#mensagemView'))
        this._mensagemView.atualiza(this._mensagem)
    }
    
    adiciona(event){
        event.preventDefault()
        
        this._listaNegociacoes.adicionaNegociacao(this._criaNegociacao()) 
        this._mensagem.texto = "Negociação adicionada com sucesso."

        this._negociacoesView.atualiza(this._listaNegociacoes)
        this._mensagemView.atualiza(this._mensagem)

        this._limpaFormulario()
    }
    
    _criaNegociacao(){
        let negociacao = new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        )
        return negociacao      
    }

    _limpaFormulario(){
        this._inputData.value = ''
        this._inputQuantidade.value = 1
        this._inputValor.value = 0.0
        this._inputData.focus()
    }

}