import { Conta } from "./conta";

export class ContaCorrente extends Conta {

    sacar(valor: number): boolean {
        if (this.saldo >= valor) {
            this.saldo -= valor;
            return true;
        } 
        return false;
    }
}