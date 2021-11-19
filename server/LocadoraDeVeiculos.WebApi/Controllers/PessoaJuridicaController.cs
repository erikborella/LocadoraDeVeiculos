using AutoMapper;
using LocadoraDeVeículos.Aplicacao.PessoaJuridicaModule;
using LocadoraDeVeículos.Aplicacao.Shared;
using LocadoraDeVeiculos.Dominio.PessoaJuridicaModule;
using LocadoraDeVeiculos.WebApi.Controllers.Shared;
using LocadoraDeVeiculos.WebApi.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LocadoraDeVeiculos.WebApi.Controllers
{
    public class PessoaJuridicaController : BaseController<PessoaJuridica,
                                                           PessoaJuridicaListViewModel,
                                                           PessoaJuridicaDetailViewModel,
                                                           PessoaJuridicaCreateViewModel,
                                                           PessoaJuridicaEditViewModel>
    {
        public PessoaJuridicaController(PessoaJuridicaAppService appService, IMapper mapper) 
            : base(appService, mapper)
        {
        }
    }
}
