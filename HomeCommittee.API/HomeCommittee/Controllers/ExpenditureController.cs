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
using HomeCommittee.Entties.Extensions;

namespace HomeCommittee.Controllers
{
    public class ReportExp
    {
        public string TypeName { get; set; }
        public double Value { get; set; }
    }
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
        [Route("GetAllExpenditureGroupType/{buildingId}")]
        public HttpResponseMessage GetAllExpenditureGroupType(int buildingId)
        {
            List<Expenditure> expenditures = ExpenditureBL.GetByBuildingId(buildingId);
            var res = expenditures.GroupBy(p => p.type).ToDictionary(pp=>pp.Key,ppp=>ppp.Sum(s=>s.sum));
            List<ReportExp> reportExps = new List<ReportExp>();
            for (int i = 1; i <= Enum.GetNames(typeof(ExpenditureCategory)).Length; i++)
            {
                double v = 0;
                if (res.ContainsKey(i))
                    v = res[i];
                reportExps.Add(new ReportExp() { TypeName= ((ExpenditureCategory)i).GetDescription(),Value=v });
            }
            return Request.CreateResponse(HttpStatusCode.OK, reportExps);
        }

        [HttpGet]
        [Route("GetAllExpenditureGroupDate/{buildingId}")]
        public HttpResponseMessage GetAllExpenditureGroupDate(int buildingId)
        {
            List<Expenditure> expenditures = ExpenditureBL.GetByBuildingId(buildingId);
            var res = expenditures.GroupBy(p => p.date.Month).ToDictionary(pp => pp.Key, ppp => ppp.Sum(s => s.sum));
            List<ReportExp> reportExps = new List<ReportExp>();
            for (int i = 1; i <= 12; i++)
            {
                double v = 0;
                if (res.ContainsKey(i))
                    v = res[i];
                reportExps.Add(new ReportExp() { TypeName = i.ToString(), Value = v });
            }
            return Request.CreateResponse(HttpStatusCode.OK, reportExps);
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