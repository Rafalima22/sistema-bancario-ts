import { Conta } from './conta.js';

export class Banco {
    private contas: Conta[];

    constructor() {
        this.contas = [];
    }

    adicionarConta(conta: Conta): void {
        this.contas.push(conta);
        console.log(`Conta adicionada com sucesso.`);
    }

    listarContas(): void {
    console.log("Contas cadastradas:");

    for (const conta of this.contas) {
        console.log(conta);
    }}

    buscarConta(numero: number): Conta | undefined {
    return this.contas.find(conta => conta.getNumero() === numero);
    }
    


}   