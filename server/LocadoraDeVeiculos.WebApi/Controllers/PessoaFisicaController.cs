using AutoMapper;
using LocadoraDeVeículos.Aplicacao.PessoaFisicaModule;
using LocadoraDeVeículos.Aplicacao.Shared;
using LocadoraDeVeiculos.Dominio.PessoaFisicaModule;
using LocadoraDeVeiculos.WebApi.Controllers.Shared;
using LocadoraDeVeiculos.WebApi.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LocadoraDeVeiculos.WebApi.Controllers
{

    public class PessoaFisicaController : BaseController<PessoaFisica,
                                                        PessoaFisicaListViewModel,
                                                        PessoaFisicaDetailViewModel,
                                                        PessoaFisicaCreateViewModel,
                                                        PessoaFisicaEditViewModel>
    {
        public PessoaFisicaController(PessoaFisicaAppService appService, IMapper mapper) 
            : base(appService, mapper)
        {
        }
    }
}
