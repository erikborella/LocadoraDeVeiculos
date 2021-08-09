﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using LocadoraDeVeiculos.Controladores.Shared;
using LocadoraDeVeiculos.Dominio.TaxasEServicosModule;

namespace LocadoraDeVeiculos.Controladores.TaxasEServicosModule
{
    class ControladorTaxasEServicos : Controlador<TaxasEServicos>
    {

        #region Queries
        private const string sqlInserirTaxaEServico =
            @"INSERT INTO [TAXAESERVICO]
                (
                    [EHFIXO],       
                    [PRECO],             
                    [NOME]     
                )
            VALUES
                (
                   @EHFIXO
                   @PRECO
                   @NOME
                 )";

        private const string sqlEditarTaxaEServico =
            @" UPDATE [TAXAESERVICO]
                SET 
                    [EHFIXO] = @EHFIXO, 
                    [PRECO] = @PRECO, 
                    [NOME] =  @NOME                    
                WHERE [ID] = @ID";

        private const string sqlExcluirTaxaEServico =
            @"DELETE FROM [TAXAESERVICO] 
                WHERE [ID] = @ID;";

        private const string sqlSelecionarTodasTaxasEServicos =
            @"SELECT 
                [EHFIXO],       
                [PRECO],             
                [NOME]
              FROM
                [TAXAESERVICO]";

        private const string sqlSelecionarTaxaPorNome =
            @"SELECT 
                [EHFIXO],       
                [PRECO],             
                [NOME]
             FROM
                [TAXAESERVICO]
             WHERE 
                [NOME] = @NOME";
        #endregion

        public override string InserirNovo(TaxasEServicos taxaOuServico)
        {
            string resultadoValidacao = taxaOuServico.Validar();

            if (resultadoValidacao == "ESTA_VALIDO")
            {
                taxaOuServico.Id = Db.Insert(sqlInserirTaxaEServico, ObtemParametrosTaxaEServico(taxaOuServico));
            }

            return resultadoValidacao;
        }

        public override string Editar(int id, TaxasEServicos taxaOuServico)
        {
            string resultadoValidacao = taxaOuServico.Validar();

            if (resultadoValidacao == "ESTA_VALIDO")
            {
                taxaOuServico.Id = id;
                Db.Update(sqlInserirTaxaEServico, ObtemParametrosTaxaEServico(taxaOuServico));
            }

            return resultadoValidacao;
        }

        public override bool Excluir(int id)
        {
            try
            {
                Db.Delete(sqlInserirTaxaEServico, AdicionarParametro("ID", id));
            }
            catch (Exception)
            {
                return false;
            }

            return true;
        }



        private Dictionary<string, object> ObtemParametrosTaxaEServico(TaxasEServicos taxaOuServico)
        {
            var parametros = new Dictionary<string, object>();

            parametros.Add("ID", taxaOuServico.Id);
            parametros.Add("NOME", taxaOuServico.Nome);
            parametros.Add("PRECO", taxaOuServico.Preco);
            parametros.Add("DATACRIACAO", taxaOuServico.EhFixo);           

            return parametros;
        }
    }
}
