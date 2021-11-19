import { TipoCupomEnum } from "./TipoCupomEnum";

export class CupomEditViewModel {
    parceiroId: number;
    codigo: string;
    dataVencimento: Date;
    valor: number;
    valorMinimo: number;
    tipo: TipoCupomEnum;
}