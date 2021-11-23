using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LocadoraDeVeiculos.Dominio.GrupoAutomovelModule
{
    public struct PlanoKmControladoStruct
    {
        public double PrecoDia { get; set; }
        public double PrecoKmExtrapolado { get; set; }
        public double KmDisponiveis { get; set; }

        public PlanoKmControladoStruct(double precoDia, double precoKmExtrapolado, double kmDisponiveis)
        {
            PrecoDia = precoDia;
            PrecoKmExtrapolado = precoKmExtrapolado;
            KmDisponiveis = kmDisponiveis;
        }
    }
}