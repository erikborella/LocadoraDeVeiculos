import { CambioEnum } from "./enums/CambioEnum";
import { DirecaoEnum } from "./enums/DirecaoEnum";
import { TipoCombustivelEnum } from "./enums/TipoCombustivelEnum";

export class AutomovelEditViewModel {
    modelo: string;
    marca: string;
    cor: string;
    placa: string;
    chassi: string;
    ano: number;
    portas: number;
    capacidadeTanque: number;
    tamanhoPortaMalas: number;
    kmRegistrada: number;
    tipoCombustivel: TipoCombustivelEnum;
    cambio: CambioEnum;
    direcao: DirecaoEnum;
    grupoId: number;
    grupoNome: string;
}