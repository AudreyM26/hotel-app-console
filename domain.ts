interface Client {
    nom: string;
    prenoms: string;
}

class ClientCls {
    constructor(public nom: string, public prenoms: string) {
    }
}


interface Chambre {
    numero:string;
    surfaceEnM2:string;
}

export {Client,Chambre,ClientCls};