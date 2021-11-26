import { IPlanoDiario } from "./interfaces/IPlanoDiario";
import { IPlanoKmControlado } from "./interfaces/IPlanoKmControlado";
import { IPlanoKmLivre } from "./interfaces/IPlanoKmLivre";

export class GrupoAutomovelCreateViewModel {
    nome: string;
    planoDiario: IPlanoDiario;
    planoKmControlado: IPlanoKmControlado;
    planoKmLivre: IPlanoKmLivre;
}