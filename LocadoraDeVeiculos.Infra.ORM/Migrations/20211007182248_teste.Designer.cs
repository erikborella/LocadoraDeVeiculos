﻿// <auto-generated />
using System;
using LocadoraDeVeiculos.Infra.ORM.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace LocadoraDeVeiculos.Infra.ORM.Migrations
{
    [DbContext(typeof(DBLocadoraContext))]
    [Migration("20211007182248_teste")]
    partial class teste
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.10")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("LocadoraDeVeiculos.Dominio.CupomModule.Cupom", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Codigo")
                        .IsRequired()
                        .HasColumnType("VARCHAR(100)");

                    b.Property<DateTime>("DataVencimento")
                        .HasColumnType("datetime2");

                    b.Property<int?>("ParceiroId")
                        .HasColumnType("int");

                    b.Property<int>("QtdUsos")
                        .HasColumnType("int");

                    b.Property<string>("Tipo")
                        .IsRequired()
                        .HasColumnType("VARCHAR(100)");

                    b.Property<double>("Valor")
                        .HasColumnType("float");

                    b.Property<double>("ValorMinimo")
                        .HasColumnType("float");

                    b.HasKey("Id");

                    b.HasIndex("ParceiroId");

                    b.ToTable("TBCupom");
                });

            modelBuilder.Entity("LocadoraDeVeiculos.Dominio.GrupoAutomovelModule.GrupoAutomovel", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Nome")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PlanoDiario")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PlanoKmControlado")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PlanoKmLivre")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("TBGrupoAutomovel");
                });

            modelBuilder.Entity("LocadoraDeVeiculos.Dominio.ParceiroModule.Parceiro", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Nome")
                        .IsRequired()
                        .HasColumnType("VARCHAR(100)");

                    b.HasKey("Id");

                    b.ToTable("TBParceiro");
                });

            modelBuilder.Entity("LocadoraDeVeiculos.Dominio.PessoaJuridicaModule.PessoaJuridica", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Cnpj")
                        .IsRequired()
                        .HasColumnType("VARCHAR(100)");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("VARCHAR(100)");

                    b.Property<string>("Endereco")
                        .IsRequired()
                        .HasColumnType("VARCHAR(100)");

                    b.Property<string>("Nome")
                        .IsRequired()
                        .HasColumnType("VARCHAR(100)");

                    b.Property<string>("Telefone")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("TBPessoaJuridica");
                });

            modelBuilder.Entity("LocadoraDeVeiculos.Dominio.CupomModule.Cupom", b =>
                {
                    b.HasOne("LocadoraDeVeiculos.Dominio.ParceiroModule.Parceiro", "Parceiro")
                        .WithMany()
                        .HasForeignKey("ParceiroId");

                    b.Navigation("Parceiro");
                });
#pragma warning restore 612, 618
        }
    }
}
