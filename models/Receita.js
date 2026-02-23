export default class Receita {
    constructor(farinha = 200, agua = 134, azeite = 5, sal = 4.5, fermento = 3.5,
        acucar = 5, ovo = 56) {

        this.farinha = farinha,
            this.agua = agua,
            this.azeite = azeite,
            this.sal = sal,
            this.fermento = fermento,
            this.acucar = acucar,
            this.ovo = ovo

        //peso base da receita de 408g 
        this.pesoBase = this.farinha + this.agua + this.azeite + this.sal + this.fermento + this.acucar + this.ovo

        this.receita = {} //variável do tipo objeto
        this.totalPizza = 0
    }

    //referencia 1 tonelada de matéria prima - 1.000.000g
    calcularQtdIgredientes() {
        const fatorEscala = 1000000 / this.pesoBase
        this.receita = {
            farinha: Number((this.farinha * fatorEscala).toFixed(2)),
            agua: Number((this.agua * fatorEscala).toFixed(2)),
            azeite: Number((this.azeite * fatorEscala).toFixed(2)),
            sal: Number((this.sal * fatorEscala).toFixed(2)),
            fermento: Number((this.fermento * fatorEscala).toFixed(2)),
            acucar: Number((this.acucar * fatorEscala).toFixed(2)),
            ovo: Number((this.ovo * fatorEscala).toFixed(2))
        }
        this.verificarQtdOvos()

        return this.receita
    }

    verificarQtdOvos() {
        const qtdOvos = this.receita.ovo / 56
        this.receita.ovo = Math.ceil(qtdOvos)
    }

    calcularQtdPizza(pesoUnitario){
        this.totalPizza=1000000/pesoUnitario

        this.verificarQtdPizza() 

        return this.totalPizza
    }

    verificarQtdPizza(){
        this.totalPizza=Math.floor(this.totalPizza)
    }

}
