using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LocadoraDeVeiculos.Dominio.Shared
{
    public static class ValidatorStandardExtensions
    {
        public static IRuleBuilderOptions<T, TReturn> NaoVazio<T, TReturn>(this IRuleBuilderInitial<T, TReturn> rule)
        {
            return rule
                .NotEmpty()
                .WithMessage("O {PropertyName} é obrigatório e não pode ser vazio");
        }
    }
}