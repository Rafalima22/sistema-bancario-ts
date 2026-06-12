import { Conta } from "./conta";

export class ContaCorrente extends Conta {

    sacar(valor: number): void {
        if (this.saldo >= valor) {
            this.saldo -= valor;
            console.log(`Saque de R$ ${valor} realizado.`);
            console.log(`Saldo atual: R$ ${this.saldo}`);
        } else {
            console.log("Saldo insuficiente para realizar o saque.");
        }
    }
}