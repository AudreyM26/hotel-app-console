interface Client {
    nom: string;
    prenoms: string;
}

export class Clientss {

    constructor(public nom: string, public prenoms: string) {
    }
}


interface Chambre {
    numero:string;
    surfaceEnM2:string;
}

export {Client,Chambre};