using AutoMapper;
using LocadoraDeVeiculos.Dominio.FuncionarioModule;
using LocadoraDeVeiculos.WebApi.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LocadoraDeVeiculos.WebApi.Config.AutoMapperConfig
{
    public class FuncionarioProfile : Profile
    {
        public FuncionarioProfile()
        {
            CreateMap<Funcionario, FuncionarioListViewModel>();
            CreateMap<Funcionario, FuncionarioDetailViewModel>();

            CreateMap<FuncionarioCreateViewModel, Funcionario>()
                .ForMember(dest => dest.DataAdmissao,
                opt => opt.MapFrom(src => DateTime.Now));

            CreateMap<FuncionarioEditViewModel, Funcionario>()
                .ForMember(dest => dest.DataAdmissao, opt => opt.Ignore());
        }
    }
}
