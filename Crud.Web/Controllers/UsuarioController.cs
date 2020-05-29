using Crud.Domain.Contratos;
using Crud.Domain.Model;
using Microsoft.AspNetCore.Mvc;
using System;

namespace Crud.Web.Controllers
{
    [Route("api/[Controller]")]
    public class UsuarioController : Controller
    {
        private readonly IUsuarioRepository _usuarioRepository;
        public UsuarioController(IUsuarioRepository usuarioRepository)
        {
            _usuarioRepository = usuarioRepository;
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(_usuarioRepository.Listar());
            }
            catch (Exception e)
            {
                return BadRequest(e.ToString());
            }
        }

        [HttpPost]
        public IActionResult Post([FromBody] Usuario usuario)
        {
            try
            {
                _usuarioRepository.Adicionar(usuario);
                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest(e.ToString());
            }
        }
    }
}