﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LocadoraDeVeiculos.Dominio.Shared
{
    public class Notificacao
    {

        public string Mensagem { get; }

        public Notificacao(string mensagem)
        {
            this.Mensagem = mensagem;
        }
    }
}
