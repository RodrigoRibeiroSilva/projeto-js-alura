class NegociacoesView {

    constructor(elemento){
        this._elemento = elemento
    }

    atualiza(modelo){
        //innerHTML converte uma string para um elemento do dom 
        this._elemento.innerHTML = this._template(modelo)
    }

    _template(modelo){
        return `
        <table class="table table-hover table-bordered">
        <thead>
            <tr>
                <th>DATA</th>
                <th>QUANTIDADE</th>
                <th>VALOR</th>
                <th>VOLUME</th>
            </tr>
        </thead>
        <tbody>
            ${modelo.negociacoes.map(element => 

                `<tr>
                    <td>${DateHelper.dataParaTexto(element.data)}</td>
                    <td>${element.quantidade}</td>
                    <td>${element.valor}</td>
                    <td>${element.volume}</td>
                </tr>
                `

            ).join('')}
        </tbody>
        <tfoot>
            <td colspan="3"></td>
            <td>${modelo.negociacoes.reduce((total, n) => total + n.volume, 0.0)}</td>
        </tfoot>
        </table> `;
    }
}
