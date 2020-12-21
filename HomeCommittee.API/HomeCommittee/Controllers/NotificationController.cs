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
    [RoutePrefix("api/Notification")]
    public class NotificationController : ApiController
    {

        [HttpGet]
        [Route("GetNotificationByUserId/{userId}")]
        public HttpResponseMessage GetNotificationByUserId(int userId)
        {
            List<Notification> notifications = NotificationBL.GetByUsetId(userId);
            return Request.CreateResponse(HttpStatusCode.OK, notifications);
        }
        [HttpPost]
        [Route("AddNotificationToSpesficUser/{userId}")]
        public HttpResponseMessage AddNotificationToSpesficUser(int userId,string message)
        {
            int id = NotificationBL.AddNotification(message);
            if (id != -1)
            {
                NotificationBL.AddNotificationForUser(userId, id);
                return Request.CreateResponse(HttpStatusCode.OK, true);
            }
            return Request.CreateResponse(HttpStatusCode.ExpectationFailed, true);
        }
        //TODO
        //[HttpPost]
        //[Route("AddNotificationToSpesficUser/{buildingId}")]
        //public HttpResponseMessage AddNotificationForAllUsers( int buildingId,string message)
        //{
        //    int id = NotificationBL.AddNotification(message);
        //    if (id != -1)
        //    {
        //        NotificationBL.AddNotificationForUser(userId, id);
        //        return Request.CreateResponse(HttpStatusCode.OK, true);
        //    }
        //    return Request.CreateResponse(HttpStatusCode.ExpectationFailed, true);
        //}
    }
}