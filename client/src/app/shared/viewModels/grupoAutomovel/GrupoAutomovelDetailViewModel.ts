import { IPlanoDiario } from "./interfaces/IPlanoDiario";
import { IPlanoKmControlado } from "./interfaces/IPlanoKmControlado";
import { IPlanoKmLivre } from "./interfaces/IPlanoKmLivre";

export class GrupoAutomovelDetailViewModel {
    id: number;
    nome: string;
    planoDiario: IPlanoDiario;
    planoKmControlado: IPlanoKmControlado;
    planoKmLivre: IPlanoKmLivre;
}