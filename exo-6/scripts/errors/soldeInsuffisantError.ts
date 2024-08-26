export class SoldeInsuffisantError extends Error{
    constructor(message :string = "Pour effectuer un retrait, le solde doit être supérieur a zéro") {
        super(message);
    }
}