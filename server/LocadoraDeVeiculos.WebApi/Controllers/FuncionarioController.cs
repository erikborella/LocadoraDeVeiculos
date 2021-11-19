using AutoMapper;
using LocadoraDeVeículos.Aplicacao.FuncionarioModule;
using LocadoraDeVeículos.Aplicacao.Shared;
using LocadoraDeVeiculos.Dominio.FuncionarioModule;
using LocadoraDeVeiculos.WebApi.Controllers.Shared;
using LocadoraDeVeiculos.WebApi.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LocadoraDeVeiculos.WebApi.Controllers
{
    public class FuncionarioController : BaseController<Funcionario,
                                                        FuncionarioListViewModel,
                                                        FuncionarioDetailViewModel,
                                                        FuncionarioCreateViewModel,
                                                        FuncionarioEditViewModel>
    {
        public FuncionarioController(FuncionarioAppService appService, IMapper mapper) 
            : base(appService, mapper)
        {
        }
    }
}
