using AutoMapper;
using LocadoraDeVeiculos.Dominio.GrupoAutomovelModule;
using LocadoraDeVeiculos.WebApi.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LocadoraDeVeiculos.WebApi.Config.AutoMapperConfig
{
    public class GrupoAutomovelProfile : Profile
    {
        public GrupoAutomovelProfile()
        {
            CreateMap<GrupoAutomovel, GrupoAutomovelListViewModel>();
            CreateMap<GrupoAutomovel, GrupoAutomovelDetailViewModel>();
            CreateMap<GrupoAutomovelCreateViewModel, GrupoAutomovel>();
            CreateMap<GrupoAutomovelEditViewModel, GrupoAutomovel>();
        }
    }
}
