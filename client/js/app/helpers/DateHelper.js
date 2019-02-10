class DateHelper {

    constructor(){
        throw new Error('DateHelper não pode instanciado')
    }

    static textoParaData(texto){
        return new Date(texto.split('-'))
    }

    static dataParaTexto(data){
        return data.getDate() + '/' + (data.getMonth() + 1) + '/' + data.getFullYear()
    }
}