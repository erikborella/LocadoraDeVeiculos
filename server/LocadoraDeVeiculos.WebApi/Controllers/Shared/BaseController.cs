using AutoMapper;
using LocadoraDeVeículos.Aplicacao.Shared;
using LocadoraDeVeiculos.Dominio.Shared;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LocadoraDeVeiculos.WebApi.Controllers.Shared
{
    [Route("api/[controller]")]
    [ApiController]
    public abstract class BaseController<TEntity, TListVM, TDetailVM, TCreateVM, TEditVM> 
        : ControllerBase
        where TEntity : EntidadeBase
    {
        private readonly ICadastravel<TEntity> appService;
        private readonly IMapper mapper;

        protected BaseController(ICadastravel<TEntity> appService, IMapper mapper)
        {
            this.appService = appService;
            this.mapper = mapper;
        }

        [HttpGet]
        public ActionResult<List<TListVM>> GetAll()
        {
            var entidades = appService.SelecionarTodos();

            var entidadesVM = mapper.Map<List<TListVM>>(entidades);

            return Ok(entidadesVM);
        }

        [HttpGet("{id:int}")]
        public ActionResult<TDetailVM> Get(int id)
        {
            var entidade = appService.SelecionarPorId(id);

            if (entidade == null)
                return NotFound();

            var entidadeVM = mapper.Map<TDetailVM>(entidade);

            return Ok(entidadeVM);
        }

        [HttpPost]
        public ActionResult Post(TCreateVM entidadeVM)
        {
            var entidade = mapper.Map<TEntity>(entidadeVM);

            appService.InserirNovo(entidade);

            return CreatedAtAction(nameof(Get), new { id = entidade.id }, entidadeVM);
        }

        [HttpPut("{id:int}")]
        public ActionResult Put(int id, TEditVM entidadeVM)
        {
            var entidadeSelecionada = appService.SelecionarPorId(id);

            if (entidadeSelecionada == null)
                return NotFound();

            entidadeSelecionada = mapper.Map(entidadeVM, entidadeSelecionada);

            appService.Editar(id, entidadeSelecionada);

            return Ok(entidadeVM);
        }

        [HttpDelete("{id:int}")]
        public ActionResult Delete(int id)
        {
            try
            {
                if (!appService.Existe(id))
                    return NotFound();

                appService.Excluir(id);

                return Ok();

            }
            catch (Exception)
            {
                return StatusCode(500);
            }
        }
    }

}

