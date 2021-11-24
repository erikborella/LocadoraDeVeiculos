using FluentValidation;
using LocadoraDeVeiculos.Dominio.Shared;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LocadoraDeVeiculos.Dominio.ParceiroModule
{
    public class ParceiroValidator : AbstractValidator<Parceiro>
    {
        public ParceiroValidator()
        {
            RuleFor(x => x.Nome)
                .NaoVazio();

            RuleFor(x => x.Telefone)
                .NaoVazio();
        }
    }
}
