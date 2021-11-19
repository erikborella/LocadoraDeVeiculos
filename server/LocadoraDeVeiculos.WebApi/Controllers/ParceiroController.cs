using AutoMapper;
using LocadoraDeVeículos.Aplicacao.ParceiroModule;
using LocadoraDeVeículos.Aplicacao.Shared;
using LocadoraDeVeiculos.Dominio.ParceiroModule;
using LocadoraDeVeiculos.WebApi.Controllers.Shared;
using LocadoraDeVeiculos.WebApi.ViewModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LocadoraDeVeiculos.WebApi.Controllers
{
    public class ParceiroController : BaseController<Parceiro, 
                                                     ParceiroListViewModel, 
                                                     ParceiroDetailViewModel, 
                                                     ParceiroCreateViewModel, 
                                                     ParceiroEditViewModel>
    {
        public ParceiroController(ParceiroAppService appService, IMapper mapper) 
            : base(appService, mapper)
        {
        }
    }
}
