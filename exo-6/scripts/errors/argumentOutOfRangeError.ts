export class ArgumentOutOfRangeError extends Error {
    constructor(message : string = "Le montant du dépôt / retrait est inérieur ou égale a zéro"){
        super(message)
        this.name = "ArgumentOutOfRangeError";
    }
}