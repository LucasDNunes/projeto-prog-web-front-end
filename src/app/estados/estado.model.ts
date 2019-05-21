export class Estado {
    id: number;
    nome: string;
    uf: string;
    cidades: Cidade [];
}

export class Cidade {
    id: number;
    nome: string;
    estadp: Estado;
}