using HomeCommittee.BL;
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
    [RoutePrefix("api/Payment")]
    public class PaymentController :ApiController
    {
        //[HttpGet]
        //[Route("GetAllPayments/{buildingId}")]
        //public HttpResponseMessage GetAllPayments(int buildingId)
        //{
        //    List < Payment > payments = PaymentBL.GetPaymentsByBuilding(buildingId);
        //    return Request.CreateResponse(HttpStatusCode.OK, payments);
        //}

        //[HttpPost]
        //[Route("AddPayment")]
        //public HttpResponseMessage AddPayment(Payment payment)
        //{
        //    PaymentBL.AddPayment(payment);
        //    return Request.CreateResponse(HttpStatusCode.OK, true);
        //}

        [HttpGet]
        [Route("GetAllPayments/{buildingId}")]
        public HttpResponseMessage GetAllPayments(int buildingId)
        {
            List<Payment> payments = PaymentBL.GetPaymentsByBuilding(buildingId);
            return Request.CreateResponse(HttpStatusCode.OK, payments);
        }

        [HttpPost]
        [Route("AddPayment")]
        public HttpResponseMessage AddPayment(Payment payment)
        {
            PaymentBL.AddPayment(payment);
            return Request.CreateResponse(HttpStatusCode.OK, true);
        }


        [HttpGet]
        [Route("GetPaymentsByUser/{buildingId}/{userId}")]
        public HttpResponseMessage GetPaymentsByUser(int buildingId, int userId)
        {
            var x = PaymentBL.GetPaymentsByUser(buildingId, userId);
            return Request.CreateResponse(HttpStatusCode.OK, x);
        }



    }
}
