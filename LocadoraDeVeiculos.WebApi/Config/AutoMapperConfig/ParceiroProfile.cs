using AutoMapper;
using LocadoraDeVeiculos.Dominio.ParceiroModule;
using LocadoraDeVeiculos.WebApi.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LocadoraDeVeiculos.WebApi.Config.AutoMapperConfig
{
    public class ParceiroProfile : Profile
    {
        public ParceiroProfile()
        {
            CreateMap<Parceiro, ParceiroListViewModel>();
            CreateMap<Parceiro, ParceiroDetailViewModel>();
            CreateMap<ParceiroCreateViewModel, Parceiro>();
            CreateMap<ParceiroEditViewModel, Parceiro>();
        }
    }
}
