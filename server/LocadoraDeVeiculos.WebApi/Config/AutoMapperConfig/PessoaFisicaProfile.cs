using AutoMapper;
using LocadoraDeVeiculos.Dominio.PessoaFisicaModule;
using LocadoraDeVeiculos.WebApi.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LocadoraDeVeiculos.WebApi.Config.AutoMapperConfig
{
    public class PessoaFisicaProfile : Profile
    {
        public PessoaFisicaProfile()
        {
            CreateMap<PessoaFisica, PessoaFisicaListViewModel>();
            CreateMap<PessoaFisica, PessoaFisicaDetailViewModel>();

            CreateMap<PessoaFisicaCreateViewModel, PessoaFisica>();
            CreateMap<PessoaFisicaEditViewModel, PessoaFisica>();
        }
    }
}
