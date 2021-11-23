using AutoMapper;
using LocadoraDeVeículos.Aplicacao.Shared;
using LocadoraDeVeículos.Aplicacao.TaxaEServicoModule;
using LocadoraDeVeiculos.Dominio.TaxasEServicosModule;
using LocadoraDeVeiculos.WebApi.Controllers.Shared;
using LocadoraDeVeiculos.WebApi.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LocadoraDeVeiculos.WebApi.Controllers
{
    public class TaxaEServicoController : BaseController<TaxaEServico,
                                                         TaxaEServicoListViewModel,
                                                         TaxaEServicoDetailViewModel,
                                                         TaxaEServicoCreateViewModel,
                                                         TaxaEServicoEditViewModel>
    {
        public TaxaEServicoController(TaxaEServicoAppService appService, IMapper mapper) 
            : base(appService, mapper)
        {
        }
    }
}
