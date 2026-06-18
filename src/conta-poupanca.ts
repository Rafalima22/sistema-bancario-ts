import { Conta } from "./conta.js";

export class ContaPoupanca extends Conta {

    sacar(valor: number): boolean {

        if (valor > 1000) {
            return false;
        }

        if (this.saldo >= valor) {
            this.saldo -= valor;
            return true;
        } 
        return false;
    }
}