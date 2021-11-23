
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LocadoraDeVeiculos.Dominio.GrupoAutomovelModule
{
    public struct PlanoDiarioStruct
    {
        public double PrecoDia { get; set; }
        public double PrecoKm { get; set; }

        public PlanoDiarioStruct(double precoDia, double precoKm)
        {
            PrecoDia = precoDia;
            PrecoKm = precoKm;
        }
    }
}