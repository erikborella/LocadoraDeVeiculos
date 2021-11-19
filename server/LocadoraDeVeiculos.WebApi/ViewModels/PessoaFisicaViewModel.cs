using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace LocadoraDeVeiculos.WebApi.ViewModels
{
    public class PessoaFisicaListViewModel
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string CPF { get; set; }
        public string Telefone { get; set; }
    }

    public class PessoaFisicaDetailViewModel
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string CPF { get; set; }
        public string RG { get; set; }
        public string CNH { get; set; }
        public DateTime VencimentoCNH { get; set; }
        public string Telefone { get; set; }
        public string Endereco { get; set; }
        public string Email { get; set; }
        public int PessoaJuridicaId { get; set; }
        public string PessoaJuridicaNome { get; set; }
    }

    public class PessoaFisicaCreateViewModel
    {
        [Required(ErrorMessage = "O campo {0} é obrigatorio")]
        public string Nome { get; set; }

        [Required(ErrorMessage = "O campo {0} é obrigatorio")]
        public string CPF { get; set; }

        [Required(ErrorMessage = "O campo {0} é obrigatorio")]
        public string RG { get; set; }

        [Required(ErrorMessage = "O campo {0} é obrigatorio")]
        public string CNH { get; set; }

        [Required(ErrorMessage = "O campo {0} é obrigatorio")]
        public DateTime VencimentoCNH { get; set; }

        [Required(ErrorMessage = "O campo {0} é obrigatorio")]
        public string Telefone { get; set; }

        [Required(ErrorMessage = "O campo {0} é obrigatorio")]
        public string Endereco { get; set; }

        [Required(ErrorMessage = "O campo {0} é obrigatorio")]
        public string Email { get; set; }

        public int? PessoaJuridicaId { get; set; }
    }

    public class PessoaFisicaEditViewModel
    {
        public string Nome { get; set; }
        public string CPF { get; set; }
        public string RG { get; set; }
        public string CNH { get; set; }
        public DateTime VencimentoCNH { get; set; }
        public string Telefone { get; set; }
        public string Endereco { get; set; }
        public string Email { get; set; }
        public int? PessoaJuridicaId { get; set; }
    }
}
