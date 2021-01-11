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
    [RoutePrefix("api/Survey")]
    public class SurveyController : ApiController
    {
        [HttpPost]
        [Route("AddSurvey")]
        public HttpResponseMessage AddSurvey(SekerCotert seker)
        {
            try
            {
                SurveyBL.AddNewSurvey(seker);
                return Request.CreateResponse(HttpStatusCode.OK, true);
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.ExpectationFailed, ex);
            }
        }


        [HttpGet]
        [Route("GetAllSurvey/{buildingId}")]
        public HttpResponseMessage GetAllSurvey(int buildingId)
        {
            List<SekerCotert> surveys = SurveyBL.GetSurveyByBuildingId(buildingId);
            return Request.CreateResponse(HttpStatusCode.OK, surveys);
        }
        [HttpPost]
        [Route("ChangeStatus")]
        public HttpResponseMessage ChangeStatus(SekerCotert survey)
         {
            SurveyBL.ChangeStatus(survey);
         
            return Request.CreateResponse(HttpStatusCode.OK,true);
        }

        [HttpPost]
        [Route("UpdateCountAnswer")]
        public HttpResponseMessage UpdateCountAnswer(SekerPerut survey)
        {
            SurveyBL.UpdateCountAnswer(survey);

            return Request.CreateResponse(HttpStatusCode.OK, true);
        }

        [HttpPost]
        [Route("RemoveSurvey")]
        public HttpResponseMessage RemoveSurvey(SekerCotert survey)
        {
            SurveyBL.RemoveSurvey(survey);
            return Request.CreateResponse(HttpStatusCode.OK, true);
                }

     
      
      

    }
}