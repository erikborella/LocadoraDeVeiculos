using AutoMapper;
using LocadoraDeVeiculos.Dominio.PessoaJuridicaModule;
using LocadoraDeVeiculos.WebApi.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LocadoraDeVeiculos.WebApi.Config.AutoMapperConfig
{
    public class PessoaJuridicaProfile : Profile
    {
        public PessoaJuridicaProfile()
        {
            CreateMap<PessoaJuridica, PessoaJuridicaListViewModel>();
            CreateMap<PessoaJuridica, PessoaJuridicaDetailViewModel>();

            CreateMap<PessoaJuridicaCreateViewModel, PessoaJuridica>();
            CreateMap<PessoaJuridicaEditViewModel, PessoaJuridica>();
        }
    }
}
