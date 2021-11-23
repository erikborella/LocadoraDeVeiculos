using LocadoraDeVeiculos.Dominio.GrupoAutomovelModule;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace LocadoraDeVeiculos.WebApi.ViewModels
{
    public class GrupoAutomovelListViewModel
    {
        public int Id { get; set; }

        public string Nome { get; set; }
    }

    public class GrupoAutomovelDetailViewModel
    {
        public int Id { get; set; }

        public string Nome { get; set; }

        public PlanoDiarioStruct PlanoDiario { get; set; }

        public PlanoKmControladoStruct PlanoKmControlado { get; set; }

        public PlanoKmLivreStruct PlanoKmLivre { get; set; }
    }

    public class GrupoAutomovelCreateViewModel
    {
        [Required(ErrorMessage = "O campo {0} é obrigatorio")]

        public string Nome { get; set; }

        [Required(ErrorMessage = "O campo {0} é obrigatorio")]

        public PlanoDiarioStruct PlanoDiario { get; set; }

        [Required(ErrorMessage = "O campo {0} é obrigatorio")]

        public PlanoKmControladoStruct PlanoKmControlado { get; set; }

        [Required(ErrorMessage = "O campo {0} é obrigatorio")]

        public PlanoKmLivreStruct PlanoKmLivre { get; set; }
    }

    public class GrupoAutomovelEditViewModel
    {
        public string Nome { get; set; }

        public PlanoDiarioStruct PlanoDiario { get; set; }

        public PlanoKmControladoStruct PlanoKmControlado { get; set; }

        public PlanoKmLivreStruct PlanoKmLivre { get; set; }
    }
}
