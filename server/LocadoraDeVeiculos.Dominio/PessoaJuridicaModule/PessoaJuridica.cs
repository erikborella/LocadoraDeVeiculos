using LocadoraDeVeiculos.Dominio.Shared;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mail;
using System.Text;
using System.Threading.Tasks;

namespace LocadoraDeVeiculos.Dominio.PessoaJuridicaModule
{
    public class PessoaJuridica : EntidadeBase, IEquatable<PessoaJuridica>
    {
        public PessoaJuridica(string nome, string cnpj, string telefone, string endereco, string email)
        {
            Nome = nome;
            Cnpj = cnpj;
            Telefone = telefone;
            Endereco = endereco;
            Email = email;
        }
        public PessoaJuridica()
        {
        }

        public string Nome { get; set; }
        public string Cnpj { get; set; }
        public string Telefone { get; set; }
        public string Endereco { get; set; }
        public string Email { get; set; }

        public override bool Equals(object obj)
        {
            return Equals(obj as PessoaJuridica);
        }

        public bool Equals(PessoaJuridica other)
        {
            return other != null &&
                   Id == other.Id &&
                   Nome == other.Nome &&
                   Cnpj == other.Cnpj &&
                   Telefone == other.Telefone &&
                   Endereco == other.Endereco;
        }

        public override int GetHashCode()
        {
            int hashCode = -660781489;
            hashCode = hashCode * -1521134295 + Id.GetHashCode();
            hashCode = hashCode * -1521134295 + EqualityComparer<string>.Default.GetHashCode(Nome);
            hashCode = hashCode * -1521134295 + EqualityComparer<string>.Default.GetHashCode(Cnpj);
            hashCode = hashCode * -1521134295 + EqualityComparer<string>.Default.GetHashCode(Telefone);
            hashCode = hashCode * -1521134295 + EqualityComparer<string>.Default.GetHashCode(Endereco);
            return hashCode;
        }

        public override string Validar()
        {
            string resultadoValidacao = "";

            if (string.IsNullOrEmpty(Nome))
                resultadoValidacao = "O campo 'nome' não pode estar vazio.";

            if (string.IsNullOrEmpty(Cnpj))
                resultadoValidacao += QuebraDeLinha(resultadoValidacao) + "O campo 'CNPJ' não pode estar vazio.";

            if (string.IsNullOrEmpty(Telefone))
                resultadoValidacao += QuebraDeLinha(resultadoValidacao) + "O campo 'telefone' não pode estar vazio.";

            if (string.IsNullOrEmpty(Endereco))
                resultadoValidacao += QuebraDeLinha(resultadoValidacao) + "O campo 'endereço' não pode estar vazio.";

            try
            {
                MailAddress email = new MailAddress(Email);
            }
            catch (Exception)
            {
                resultadoValidacao += QuebraDeLinha(resultadoValidacao) + "Digite um E-mail válido";
            }

            if (resultadoValidacao == "")
                resultadoValidacao = "ESTA_VALIDO";

            return resultadoValidacao;
        }

        public override string ToString()
        {
            return Nome;
        }
    }
}