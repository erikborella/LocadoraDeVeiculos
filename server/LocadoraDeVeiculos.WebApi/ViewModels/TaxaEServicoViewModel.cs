using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace LocadoraDeVeiculos.WebApi.ViewModels
{
    public class TaxaEServicoListViewModel
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public double Preco { get; set; }
        public bool EhFixo { get; set; }
    }

    public class TaxaEServicoDetailViewModel
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public double Preco { get; set; }
        public bool EhFixo { get; set; }
    }

    public class TaxaEServicoCreateViewModel
    {
        [Required(ErrorMessage = "O campo {0} é obrigatorio")]
        public string Nome { get; set; }

        [Required(ErrorMessage = "O campo {0} é obrigatorio")]
        public double Preco { get; set; }

        [Required(ErrorMessage = "O campo {0} é obrigatorio")]
        public bool EhFixo { get; set; }
    }

    public class TaxaEServicoEditViewModel
    {
        public string Nome { get; set; }
        public double Preco { get; set; }
        public bool EhFixo { get; set; }
    }

}
