using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace LocadoraDeVeiculos.WebApi.ViewModels
{
    public class CupomListViewModel
    {
        public int Id { get; set; }
        public string Codigo { get; set; }
        public string ParceiroNome { get; set; }
        public DateTime DataVencimento { get; set; }
        public double Valor { get; set; }
        public double ValorMinimo { get; set; }
        public string Tipo { get; set; }
    }

    public class CupomDetailViewModel
    {
        public int Id { get; set; }
        public string Codigo { get; set; }
        public string ParceiroNome { get; set; }
        public DateTime DataVencimento { get; set; }
        public double Valor { get; set; }
        public double ValorMinimo { get; set; }
        public string Tipo { get; set; }
        public int QtdUsos { get; set; }
    }

    public class CupomCreateViewModel
    {
        [Required(ErrorMessage = "O campo {0} é obrigatorio")]
        public int ParceiroId { get; set; }

        [Required(ErrorMessage = "O campo {0} é obrigatorio")]
        public string Codigo { get; set; }

        [Required(ErrorMessage = "O campo {0} é obrigatorio")]
        public DateTime DataVencimento { get; set; }

        [Required(ErrorMessage = "O campo {0} é obrigatorio")]
        public double Valor { get; set; }

        [Required(ErrorMessage = "O campo {0} é obrigatorio")]
        public double ValorMinimo { get; set; }

        [Required(ErrorMessage = "O campo {0} é obrigatorio")]
        public int Tipo { get; set; }
    }

    public class CupomEditViewModel
    {
        public int ParceiroId { get; set; }
        public string Codigo { get; set; }
        public DateTime DataVencimento { get; set; }
        public double Valor { get; set; }
        public double ValorMinimo { get; set; }
        public int Tipo { get; set; }
    }
}
