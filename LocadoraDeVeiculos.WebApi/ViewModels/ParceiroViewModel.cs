using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace LocadoraDeVeiculos.WebApi.ViewModels
{
    public class ParceiroListViewModel
    {
        public int Id { get; set; }

        public string Nome { get; set; }

        public string Telefone { get; set; }
    }

    public class ParceiroDetailViewModel
    {
        public int Id { get; set; }

        public string Nome { get; set; }

        public string Telefone { get; set; }
    }

    public class ParceiroCreateViewModel
    {
        [Required(ErrorMessage = "O campo {0} é obrigatorio")]
        public string Nome { get; set; }

        [Required(ErrorMessage = "O campo {0} é obrigatorio")]
        public string Telefone { get; set; }
    }

    public class ParceiroEditViewModel
    {
        public string Nome { get; set; }

        public string Telefone { get; set; }
    }


}
