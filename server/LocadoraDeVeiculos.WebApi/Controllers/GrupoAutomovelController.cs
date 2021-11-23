using AutoMapper;
using LocadoraDeVeículos.Aplicacao.GrupoAutomovelModule;
using LocadoraDeVeículos.Aplicacao.Shared;
using LocadoraDeVeiculos.Dominio.GrupoAutomovelModule;
using LocadoraDeVeiculos.WebApi.Controllers.Shared;
using LocadoraDeVeiculos.WebApi.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LocadoraDeVeiculos.WebApi.Controllers
{
    public class GrupoAutomovelController : BaseController<GrupoAutomovel,
                                                           GrupoAutomovelListViewModel,
                                                           GrupoAutomovelDetailViewModel,
                                                           GrupoAutomovelCreateViewModel,
                                                           GrupoAutomovelEditViewModel>
    {
        public GrupoAutomovelController(GrupoAutomovelAppService appService, IMapper mapper) 
            : base(appService, mapper)
        {
        }
    }
}
