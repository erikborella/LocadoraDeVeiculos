﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using LocadoraDeVeiculos.Dominio.ParceiroModule;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace LocadoraDeVeiculos.Infra.ORM.Configurations
{
    public class ParceiroConfiguration : IEntityTypeConfiguration<Parceiro>
    {
        public void Configure(EntityTypeBuilder<Parceiro> builder)
        {
            builder.ToTable("TBParceiro");

            builder.HasKey(e => e.Id);

            builder.Property(e => e.Nome)
                .IsRequired();

            builder.Property(e => e.Telefone)
                .IsRequired();

            //builder.HasMany(e => e.Cupons)
            //    .WithOne(e => e.Parceiro);
        }
    }
}
