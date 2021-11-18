using AutoMapper;
using LocadoraDeVeículos.Aplicacao.CupomModule;
using LocadoraDeVeículos.Aplicacao.Shared;
using LocadoraDeVeiculos.Dominio.CupomModule;
using LocadoraDeVeiculos.WebApi.Controllers.Shared;
using LocadoraDeVeiculos.WebApi.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LocadoraDeVeiculos.WebApi.Controllers
{
    public class CupomController : BaseController<Cupom, CupomListViewModel, CupomDetailViewModel, CupomCreateViewModel, CupomEditViewModel>
    {
        public CupomController(CupomAppService appService, IMapper mapper) 
            : base(appService, mapper)
        {
        }
    }
}
