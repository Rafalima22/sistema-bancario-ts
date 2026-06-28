import { Conta } from "./conta";

export class ContaCorrente extends Conta {

    sacar(valor: number): boolean {
        if (this.saldo >= valor) {
            this.saldo -= valor;

            this.adicionarHistorico(`Saque de R$ ${valor}`);
            
            console.log(`Saque de R$ ${valor} realizado.`);
            console.log(`Saldo atual: R$ ${this.saldo}`);

            return true;
        } 
        console.log("Saldo insuficiente para realizar o saque.");
        console.log("Nao foi possível realizar o saque.");
        return false;
    }
}