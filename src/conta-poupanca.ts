import { Conta } from "./conta.js";

export class ContaPoupanca extends Conta {

    sacar(valor: number): void {

        if (valor > 1000) {
            console.log("Conta poupança permite saque máximo de R$ 1000 por operação.");
        }

        else if (this.saldo >= valor) {
            this.saldo -= valor;
            console.log(`Saque de R$ ${valor} realizado.`);
            console.log(`Saldo atual: R$ ${this.saldo}`);
        }

        else {
            console.log("Saldo insuficiente.");
        }
    }
}