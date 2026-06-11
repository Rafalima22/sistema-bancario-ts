import { Endereco } from "./endereco";
export class Cliente {
    nome: string;
    endereco: Endereco;

    constructor(nome : string, endereco : Endereco) {
        this.nome = nome;
        this.endereco = endereco;
    }

    mostrarDados(): void {
        console.log(`Nome: ${this.nome}`);
        console.log(`Endereço: ${this.endereco.rua}, ${this.endereco.cidade}`);
    }
}
