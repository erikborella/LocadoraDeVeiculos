using AutoMapper;
using LocadoraDeVeiculos.Dominio.AutomovelModule;
using LocadoraDeVeiculos.WebApi.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LocadoraDeVeiculos.WebApi.Config.AutoMapperConfig
{
    public class AutomovelProfile : Profile
    {
        public AutomovelProfile()
        {
            CreateMap<Automovel, AutomovelListViewModel>();
            CreateMap<Automovel, AutomovelDetailViewModel>();
            CreateMap<AutomovelCreateViewModel, Automovel>();
            CreateMap<AutomovelEditViewModel, Automovel>();
        }
    }
}
