using Autofac;
using LocadoraDeVeículos.Aplicacao.ParceiroModule;
using LocadoraDeVeiculos.Dominio.ParceiroModule;
using LocadoraDeVeiculos.Dominio.Shared;
using LocadoraDeVeiculos.Infra.ORM.ParceiroModule;
using LocadoraDeVeiculos.Infra.ORM.CupomModule;
using LocadoraDeVeiculos.Dominio.CupomModule;
using LocadoraDeVeiculos.Infra.ORM.GrupoAutomovelModule;
using LocadoraDeVeiculos.Dominio.GrupoAutomovelModule;
using LocadoraDeVeiculos.Infra.ORM.AutomovelModule;
using LocadoraDeVeiculos.Dominio.AutomovelModule;
using LocadoraDeVeiculos.Infra.ORM.FuncionarioModule;
using LocadoraDeVeiculos.Dominio.FuncionarioModule;
using LocadoraDeVeiculos.Infra.ORM.PessoaJuridicaModule;
using LocadoraDeVeiculos.Dominio.PessoaJuridicaModule;
using LocadoraDeVeiculos.Infra.ORM.PessoaFisicaModule;
using LocadoraDeVeiculos.Dominio.PessoaFisicaModule;
using LocadoraDeVeiculos.Infra.ORM.TaxaEServicoModule;
using LocadoraDeVeiculos.Dominio.TaxasEServicosModule;
using LocadoraDeVeiculos.Infra.ORM.RequisicaoEmailModule;
using LocadoraDeVeiculos.Dominio.RequisicaoEmailModule;
using LocadoraDeVeiculos.Infra.ORM.LocacaoModule;
using LocadoraDeVeiculos.Dominio.LocacaoModule;
using LocadoraDeVeículos.Aplicacao.CupomModule;
using LocadoraDeVeículos.Aplicacao.GrupoAutomovelModule;
using LocadoraDeVeículos.Aplicacao.AutomovelModule;
using LocadoraDeVeículos.Aplicacao.FuncionarioModule;
using LocadoraDeVeículos.Aplicacao.PessoaJuridicaModule;
using LocadoraDeVeículos.Aplicacao.PessoaFisicaModule;
using LocadoraDeVeículos.Aplicacao.TaxaEServicoModule;
using LocadoraDeVeículos.Aplicacao.LocacaoModule;
using LocadoraDeVeículos.Aplicacao.RequisicaoEmailModule;
using LocadoraDeVeículos.Infra.PDF.PDFModule;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LocadoraDeVeiculos.Infra.ORM.Models;
using AutoMapper;

namespace LocadoraDeVeiculos.WebApi.Config.AutofacConfig
{
    public class ContainerModule : Module
    {
        protected override void Load(ContainerBuilder builder)
        {
            builder.RegisterType<DBLocadoraContext>().InstancePerLifetimeScope();

            RegistrarORM(builder);
            RegistrarAppService(builder);

            builder.RegisterType<Mapper>().As<IMapper>();
        }

        private static void RegistrarORM(ContainerBuilder builder)
        {
            builder.RegisterType<ParceiroORMDao>().As<IRepositorBase<Parceiro>>().InstancePerDependency();

            builder.RegisterType<CupomORMDao>().As<IRepositorCupomBase>().InstancePerDependency();

            builder.RegisterType<GrupoAutomovelORMDao>().As<IRepositorBase<GrupoAutomovel>>().InstancePerDependency();

            builder.RegisterType<AutomovelORMDao>().As<IRepositorAutomovelBase>().InstancePerDependency();

            builder.RegisterType<FuncionarioORMDao>().As<IRepositorFuncionarioBase>().InstancePerDependency();

            builder.RegisterType<PessoaJuridicaORMDao>().As<IRepositorBase<PessoaJuridica>>().InstancePerDependency();

            builder.RegisterType<PessoaFisicaORMDao>().As<IRepositorBase<PessoaFisica>>().InstancePerDependency();

            builder.RegisterType<TaxaEServicoORMDao>().As<IRepositorTaxaEServicoBase>().InstancePerDependency();

            builder.RegisterType<RequisicaoEmailORMDao>().As<IRepositorRequisicaoEmail>().InstancePerDependency();

            builder.RegisterType<GeradorPDF>().InstancePerDependency();

            builder.RegisterType<LocacaoORMDao>().As<IRepositorLocacaoBase>().InstancePerDependency();

        }
        private static void RegistrarAppService(ContainerBuilder builder)
        {
            builder.RegisterType<ParceiroAppService>().InstancePerDependency();

            builder.RegisterType<CupomAppService>().InstancePerDependency();

            builder.RegisterType<GrupoAutomovelAppService>().InstancePerDependency();

            builder.RegisterType<AutomovelAppService>().InstancePerDependency();

            builder.RegisterType<FuncionarioAppService>().InstancePerDependency();

            builder.RegisterType<PessoaJuridicaAppService>().InstancePerDependency();

            builder.RegisterType<PessoaFisicaAppService>().InstancePerDependency();

            builder.RegisterType<TaxaEServicoAppService>().InstancePerDependency();

            builder.RegisterType<EmailAppService>().As<IEmailAppService>().InstancePerDependency();

            builder.RegisterType<LocacaoAppService>().InstancePerDependency();
        }
    }
}
