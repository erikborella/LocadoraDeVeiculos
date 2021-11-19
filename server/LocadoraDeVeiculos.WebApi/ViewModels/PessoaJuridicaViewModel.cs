using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace LocadoraDeVeiculos.WebApi.ViewModels
{
    public class PessoaJuridicaListViewModel
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Telefone { get; set; }
        public string Endereco { get; set; }
    }

    public class PessoaJuridicaDetailViewModel
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Cnpj { get; set; }
        public string Telefone { get; set; }
        public string Endereco { get; set; }
        public string Email { get; set; }
    }

    public class PessoaJuridicaCreateViewModel
    {
        [Required(ErrorMessage = "O campo {0} é obrigatorio")]
        public string Nome { get; set; }

        [Required(ErrorMessage = "O campo {0} é obrigatorio")]
        public string Cnpj { get; set; }

        [Required(ErrorMessage = "O campo {0} é obrigatorio")]
        public string Telefone { get; set; }

        [Required(ErrorMessage = "O campo {0} é obrigatorio")]
        public string Endereco { get; set; }

        [Required(ErrorMessage = "O campo {0} é obrigatorio")]
        public string Email { get; set; }
    }

    public class PessoaJuridicaEditViewModel
    {
        public string Nome { get; set; }
        public string Cnpj { get; set; }
        public string Telefone { get; set; }
        public string Endereco { get; set; }
        public string Email { get; set; }
    }

}
