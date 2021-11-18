using AutoMapper;
using LocadoraDeVeiculos.Dominio.CupomModule;
using LocadoraDeVeiculos.WebApi.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LocadoraDeVeiculos.WebApi.Config.AutoMapperConfig
{
    public class CupomProfile : Profile
    {
        public CupomProfile()
        {
            CreateMap<Cupom, CupomListViewModel>();
            CreateMap<Cupom, CupomDetailViewModel>();
            CreateMap<CupomCreateViewModel, Cupom>()
                .ForMember(dest => dest.Tipo,
                opt => opt.MapFrom(src => (src.Tipo == 0) ? "Porcentagem": "Reais"));
            CreateMap<CupomEditViewModel, Cupom>()
                .ForMember(dest => dest.Tipo,
                opt => opt.MapFrom(src => (src.Tipo == 0) ? "Porcentagem": "Reais"));

        }
    }
}
