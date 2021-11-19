using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace LocadoraDeVeiculos.WebApi.ViewModels
{
    public class FuncionarioListViewModel
    {
        public int Id { get; set; }

        public string Nome { get; set; }

        public double Salario { get; set; }

    }


    public class FuncionarioDetailViewModel
    {
        public int Id { get; set; }

        public string Nome { get; set; }

        public double Salario { get; set; }

        public DateTime DataAdmissao { get; set; }
    }


    public class FuncionarioCreateViewModel
    {
        [Required(ErrorMessage = "O campo {0} é obrigatorio")]
        public string Nome { get; set; }

        [Required(ErrorMessage = "O campo {0} é obrigatorio")]
        public double Salario { get; set; }

        [Required(ErrorMessage = "O campo {0} é obrigatorio")]
        public string Senha { get; set; }
    }

    public class FuncionarioEditViewModel
    {
        public string Nome { get; set; }

        public double Salario { get; set; }
    }
}
