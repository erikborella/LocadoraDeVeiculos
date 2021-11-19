import { TipoCupomEnum } from "./TipoCupomEnum";

export class CupomCreateViewModel {
    parceiroId: number;
    codigo: string;
    dataVencimento: Date;
    valor: number;
    valorMinimo: number;
    tipo: TipoCupomEnum;
}