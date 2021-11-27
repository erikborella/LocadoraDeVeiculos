using AutoMapper;
using LocadoraDeVeículos.Aplicacao.AutomovelModule;
using LocadoraDeVeículos.Aplicacao.Shared;
using LocadoraDeVeiculos.Dominio.AutomovelModule;
using LocadoraDeVeiculos.WebApi.Controllers.Shared;
using LocadoraDeVeiculos.WebApi.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LocadoraDeVeiculos.WebApi.Controllers
{
    public class AutomovelController : BaseController<Automovel,
                                                      AutomovelListViewModel,
                                                      AutomovelDetailViewModel,
                                                      AutomovelCreateViewModel,
                                                      AutomovelEditViewModel>
    {
        public AutomovelController(AutomovelAppService appService, IMapper mapper) 
            : base(appService, mapper)
        {
        }
    }
}
