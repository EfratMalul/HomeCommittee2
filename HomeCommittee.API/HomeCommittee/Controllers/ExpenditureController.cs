using HomeCommittee.BL;
using HomeCommittee.Entties;
using HomeCommittee.Entties.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.ComponentModel;
using System.Net.Mail;

namespace HomeCommittee.Controllers
{
    [RoutePrefix("api/Expenditure")]
    public class ExpenditureController : ApiController
    {
        [HttpGet]
        [Route("GetAllExpenditure/{buildingId}")]
        public HttpResponseMessage GetAllExpenditure(int buildingId)
        {
            List<Expenditure> expenditures = ExpenditureBL.GetByBuildingId(buildingId);
            return Request.CreateResponse(HttpStatusCode.OK, expenditures);
        }

        [HttpGet]
        [Route("SendMail/{buildingId}")]
        public bool SendMail(int buildingId)
        {
            var fromAddress = new MailAddress("from@gmail.com", "From Name");
            var toAddress = new MailAddress("to@example.com", "To Name");
            const string fromPassword = "fromPassword";
            const string subject = "Subject";
            const string body = "Body";

            var smtp = new SmtpClient
            {
                Host = "smtp.gmail.com",
                Port = 587,
                EnableSsl = true,
                DeliveryMethod = SmtpDeliveryMethod.Network,
                UseDefaultCredentials = false,
                Credentials = new NetworkCredential(fromAddress.Address, fromPassword)
            };
            using (var message = new MailMessage(fromAddress, toAddress)
            {
                Subject = subject,
                Body = body
            })
            {
                smtp.Send(message);
            }
            return true;
        }


        [HttpPost]
        [Route("AddExpenditure")]
        public HttpResponseMessage AddExpenditure(Expenditure expenditure)
        {
            try
            {
                ExpenditureBL.Add(expenditure);
                if (expenditure.type == (int)ExpenditureType.Irregular)
                    PaymentBL.AddPayment(expenditure);
                return Request.CreateResponse(HttpStatusCode.OK, true);
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.ExpectationFailed, ex);
            }
        }

        [HttpGet]
        [Route("GetAllExpenditureCategory")]
        public HttpResponseMessage GetAllExpenditureCategory()
        {
            Dictionary<int, string> cods = ExpenditureBL.GetCategory();
            return Request.CreateResponse(HttpStatusCode.OK, cods);
        }


    }
}