using AutoMapper;
using LocadoraDeVeiculos.Dominio.TaxasEServicosModule;
using LocadoraDeVeiculos.WebApi.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LocadoraDeVeiculos.WebApi.Config.AutoMapperConfig
{
    public class TaxaEServicoProfile : Profile
    {
        public TaxaEServicoProfile()
        {
            CreateMap<TaxaEServico, TaxaEServicoListViewModel>();
            CreateMap<TaxaEServico, TaxaEServicoDetailViewModel>();
            CreateMap<TaxaEServicoCreateViewModel, TaxaEServico>();
            CreateMap<TaxaEServicoEditViewModel, TaxaEServico>();
        }
    }
}
