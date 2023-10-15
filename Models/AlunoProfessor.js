import AlunoProfessorBase from '../Infra/AlunoProfessorBase.js';

export default class AlunoProfessor {
    #Nome;
    #CPF;
    #DataNascimento;
    #Sala;
    #Email;
    #Cidade;
    #Rua;
    #Numero;
    #CEP;
    #TipoPessoa;

    constructor(Nome, CPF, DataNascimento, Sala, Email, Cidade, Rua, Numero, CEP, TipoPessoa) {
        this.#Nome = Nome;
        this.#CPF = CPF;
        this.#DataNascimento = DataNascimento;
        this.#Sala = Sala;
        this.#Email = Email;
        this.#Cidade = Cidade;
        this.#Rua = Rua;
        this.#Numero = Numero;
        this.#CEP = CEP;
        this.#TipoPessoa = TipoPessoa;
    }

    get Nome() {
        return this.#Nome;
    }

    get CPF() {
        return this.#CPF;
    }

    get DataNascimento() {
        return this.#DataNascimento;
    }

    get Sala() {
        return this.#Sala;
    }

    get Email() {
        return this.#Email;
    }

    get Cidade() {
        return this.#Cidade;
    }

    get Rua() {
        return this.#Rua;
    }

    get Numero() {
        return this.#Numero;
    }

    get CEP() {
        return this.#CEP;
    }

    get TipoPessoa() {
        return this.#TipoPessoa;
    }

    toJSON() {
        return {
            "Nome": this.#Nome,
            "CPF": this.#CPF,
            "DataNascimento": this.#DataNascimento,
            "Sala": this.#Sala,
            "Email": this.#Email,
            "Cidade": this.#Cidade,
            "Rua": this.#Rua,
            "Numero": this.#Numero,
            "CEP": this.#CEP,
            "TipoPessoa": this.#TipoPessoa
        };
    }

    async gravar() {
        const alunoProfessorBase = new AlunoProfessorBase();
        await alunoProfessorBase.incluir(this);
    }

    async atualizar() {
        const alunoProfessorBase = new AlunoProfessorBase();
        await alunoProfessorBase.atualizar(this);
    }
    
}
