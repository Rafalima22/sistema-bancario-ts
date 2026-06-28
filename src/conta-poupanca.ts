import { Conta } from "./conta.js";

export class ContaPoupanca extends Conta {

    sacar(valor: number): boolean {

        if (valor > 1000) {
            console.log("Conta poupança permite saque máximo de R$ 1000 por operação.");
            return false;
        }

        if (this.saldo >= valor) {
            this.saldo -= valor;

            this.adicionarHistorico(`Saque de R$ ${valor}`);

            console.log(`Saque de R$ ${valor} realizado.`);
            console.log(`Saldo atual: R$ ${this.saldo}`);

            return true;
        }

        console.log("Saldo insuficiente.");

        return false;
    }
}