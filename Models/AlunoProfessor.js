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

    set Nome(novoNome) {
        this.#Nome = novoNome;
    }

    get CPF() {
        return this.#CPF;
    }

    set CPF(novoCPF) {
        this.#CPF = novoCPF;
    }

    get DataNascimento() {
        return this.#DataNascimento;
    }

    set DataNascimento(novaDataNascimento) {
        this.#DataNascimento = novaDataNascimento;
    }

    get Sala() {
        return this.#Sala;
    }

    set Sala(novaSala) {
        this.#Sala = novaSala;
    }

    get Email() {
        return this.#Email;
    }

    set Email(novoEmail) {
        this.#Email = novoEmail;
    }

    get Cidade() {
        return this.#Cidade;
    }

    set Cidade(novaCidade) {
        this.#Cidade = novaCidade;
    }

    get Rua() {
        return this.#Rua;
    }

    set Rua(novaRua) {
        this.#Rua = novaRua;
    }

    get Numero() {
        return this.#Numero;
    }

    set Numero(novoNumero) {
        this.#Numero = novoNumero;
    }

    get CEP() {
        return this.#CEP;
    }

    set CEP(novoCEP) {
        this.#CEP = novoCEP;
    }

    get TipoPessoa() {
        return this.#TipoPessoa;
    }

    set TipoPessoa(novoTipoPessoa) {
        this.#TipoPessoa = novoTipoPessoa;
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
        const alunoProfessorDB = new AlunoProfessorBase();
        await alunoProfessorDB.incluir(this);
    }

    async atualizar() {
        const alunoProfessorDB = new AlunoProfessorBase();
        await alunoProfessorDB.atualizar(this);
    }

    async removerDado() {
        const alunoProfessorDB = new AlunoProfessorBase();
        await alunoProfessorDB.excluir(this);
    }

    async consultar(termo) {
        const alunoProfessorDB = new AlunoProfessorBase();
        const alunosProfessores = await alunoProfessorDB.consultar(termo);
        return alunosProfessores;
    }

    async consultarCPF(cpf) {
        const alunoProfessorDB = new AlunoProfessorBase();
        const alunosProfessores = await alunoProfessorDB.consultarCPF(cpf);
        return alunosProfessores;
    }
}
