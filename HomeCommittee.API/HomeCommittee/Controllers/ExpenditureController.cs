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

        [HttpPost]
        [Route("AddExpenditure")]
        public HttpResponseMessage AddExpenditure(Expenditure expenditure)
        {
            try
            {
                ExpenditureBL.Add(expenditure);
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
            Dictionary < int, string> cods = ExpenditureBL.GetCategory();
            return Request.CreateResponse(HttpStatusCode.OK, cods);
        }


    }
    }