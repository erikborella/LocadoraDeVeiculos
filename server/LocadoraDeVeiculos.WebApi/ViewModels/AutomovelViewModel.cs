using LocadoraDeVeiculos.Dominio.AutomovelModule;
using LocadoraDeVeiculos.Dominio.GrupoAutomovelModule;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace LocadoraDeVeiculos.WebApi.ViewModels
{
    public class AutomovelListViewModel
    {
        public int Id { get; set; }
        public string Modelo { get; set; }
        public string Placa { get; set; }
        public int KmRegistrada { get; set; }
        public string GrupoNome { get; set; }
    }

    public class AutomovelDetailViewModel
    {
        public int Id { get; set; }
        public string Modelo { get; set; }

        public string Marca { get; set; }

        public string Cor { get; set; }

        public string Placa { get; set; }

        public string Chassi { get; set; }

        public int Ano { get; set; }

        public int Portas { get; set; }

        public int CapacidadeTanque { get; set; }

        public int TamanhoPortaMalas { get; set; }

        public int KmRegistrada { get; set; }

        public TipoCombustivelEnum TipoCombustivel { get; set; }

        public CambioEnum Cambio { get; set; }

        public DirecaoEnum Direcao { get; set; }

        public int GrupoId { get; set; }

        public string GrupoNome { get; set; }
    }

    public class AutomovelCreateViewModel
    {
        [Required(ErrorMessage = "O campo {0} é obrigatorio")]
        public string Modelo { get; set; }

        [Required(ErrorMessage = "O campo {0} é obrigatorio")]
        public string Marca { get; set; }

        [Required(ErrorMessage = "O campo {0} é obrigatorio")]
        public string Cor { get; set; }

        [Required(ErrorMessage = "O campo {0} é obrigatorio")]
        public string Placa { get; set; }

        [Required(ErrorMessage = "O campo {0} é obrigatorio")]
        public string Chassi { get; set; }

        [Required(ErrorMessage = "O campo {0} é obrigatorio")]
        public int Ano { get; set; }

        [Required(ErrorMessage = "O campo {0} é obrigatorio")]
        public int Portas { get; set; }

        [Required(ErrorMessage = "O campo {0} é obrigatorio")]
        public int CapacidadeTanque { get; set; }

        [Required(ErrorMessage = "O campo {0} é obrigatorio")]
        public int TamanhoPortaMalas { get; set; }

        [Required(ErrorMessage = "O campo {0} é obrigatorio")]
        public int KmRegistrada { get; set; }

        [Required(ErrorMessage = "O campo {0} é obrigatorio")]
        public TipoCombustivelEnum TipoCombustivel { get; set; }

        [Required(ErrorMessage = "O campo {0} é obrigatorio")]
        public CambioEnum Cambio { get; set; }

        [Required(ErrorMessage = "O campo {0} é obrigatorio")]
        public DirecaoEnum Direcao { get; set; }

        [Required(ErrorMessage = "O campo {0} é obrigatorio")]
        public int GrupoId { get; set; }
    }

    public class AutomovelEditViewModel
    {
        public string Modelo { get; set; }
        public string Marca { get; set; }
        public string Cor { get; set; }
        public string Placa { get; set; }
        public string Chassi { get; set; }
        public int Ano { get; set; }
        public int Portas { get; set; }
        public int CapacidadeTanque { get; set; }
        public int TamanhoPortaMalas { get; set; }
        public int KmRegistrada { get; set; }
        public TipoCombustivelEnum TipoCombustivel { get; set; }
        public CambioEnum Cambio { get; set; }
        public DirecaoEnum Direcao { get; set; }
        public int GrupoId { get; set; }
    }
}
