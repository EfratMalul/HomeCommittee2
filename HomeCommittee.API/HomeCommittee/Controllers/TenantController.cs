﻿using HomeCommittee.BL;
using HomeCommittee.Entties;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;

namespace HomeCommittee.Controllers
{
    [RoutePrefix("api/Tenant")]
    
    public class TenantController : ApiController
    {
        [HttpGet]
        [Route("GetTenant/{userId}")]
        public HttpResponseMessage GetTenant(int userId)
        {
            Tenant t = TenantBL.GetTenantByUserId(userId);
            return Request.CreateResponse(HttpStatusCode.OK, t);
        }

        [HttpGet]
        [Route("GetAllTenantByBuildingId/{buildingId}")]

        public HttpResponseMessage GetAllTenantByBuildingId(int buildingId)
        {
            List<Tenant> t = TenantBL.GetAllTenantByBuildingId(buildingId);
            return Request.CreateResponse(HttpStatusCode.OK, t);
        }

        //post - הוספת דייר
        [HttpPost]
        [Route("AddTenant")]
        public HttpResponseMessage Post(Tenant t)
        {
            try
            {
                //t.user_id = UserBL.AddUser(new User() { password = t.password, user_name = t.mail });
                TenantBL.AddTenant(t);
                return Request.CreateResponse(HttpStatusCode.OK, true);
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.ExpectationFailed, ex);
            }
        }
        [HttpGet]
        [Route("GetNumTenant/{buildingId}")]

        public HttpResponseMessage GetNumTenant(int buildingId)
        {
            try
            {
                int numTenant = TenantBL.GetAllTenantByBuilding(buildingId).Count;
                return Request.CreateResponse(HttpStatusCode.OK, numTenant);
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.ExpectationFailed, ex);
            }


        }


        [HttpPost]
        [Route("RemoveTenant")]
        public HttpResponseMessage RemoveTenant(Tenant t)
        {
           
                TenantBL.RemoveTenant(t);
                return Request.CreateResponse(HttpStatusCode.OK, true);

        }

        [HttpPost]
        [Route("UpdateTenantDetails")]
        public HttpResponseMessage UpdateTenantDetails(Tenant tenant)
        {
            try
            {
               
                TenantBL.UpdateTenantDetails(tenant);
                return Request.CreateResponse(HttpStatusCode.OK, true);
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.ExpectationFailed, ex);
            }
        }
        


    }
}