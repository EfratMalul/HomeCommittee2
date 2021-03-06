using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using HomeCommittee.BL;
using HomeCommittee.Entties;
using HomeCommittee.DAL;
using HomeCommittee.BL.Converters;
using System.Net.Http;
using System.Net;

namespace HomeCommittee.Controllers
{
    [RoutePrefix("api/User")]
    public class UserController : ApiController
    {
        [HttpPost]
        public static void AddUser([FromBody] User user)
        {
            try
            {
                UserBL.AddUser(user);
                
            }
            catch
            {
                throw;
            }


           
        }

        [HttpGet]
        [Route("GetAll")]
        public HttpResponseMessage GetAll()
        {
            //return UserConverter.ListToDTO(UserDAL.Get());
            //return new HttpResponse(UserConverter.ListToDTO(UserDAL.Get()));
            return Request.CreateResponse(HttpStatusCode.OK, UserConverter.ListToDTO(UserDAL.Get()));
        }

        [HttpGet]
        [Route("GetById/{id}")]
        public HttpResponseMessage GetById(int id)
        {
            try
            {
                return Request.CreateResponse(HttpStatusCode.OK, UserConverter.ToDTO(UserDAL.GetById(id)));
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.InternalServerError, ex);
            }
            //return UserConverter.ToDTO(UserDAL.GetById(id));
           
        }

        [HttpGet]
        [Route("GetByPassword/{password}/{name}")]

        public HttpResponseMessage GetByPassword(string password,string name)
        {
            try
            {
                return Request.CreateResponse(HttpStatusCode.OK, UserBL.GetByPassword(password,name));
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.InternalServerError, ex);
            }
            //  return UserConverter.ToDTO(UserDAL.GetByPassword(password));
        }

        [HttpPost]
        [Route("CheckUserAndPermissions")]

        public HttpResponseMessage CheckUserAndPermissions(Login login)
        {
            try
            {
                return Request.CreateResponse(HttpStatusCode.OK, UserBL.CheckUserAndPermissions(login.password, login.name));
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.InternalServerError, ex);
            }
            //  return UserConverter.ToDTO(UserDAL.GetByPassword(password));
        }







    }
}