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
        [HttpPost]
        [Route("AddNotificationToSpesficUser")]
        public HttpResponseMessage AddNotificationForAllUsers(NotificationForUser userNotification)
        {
            int id = NotificationBL.AddNotification(userNotification.message);
            if (id != -1)
            {
                NotificationBL.AddNotificationForUser(userNotification.userId, id);
                return Request.CreateResponse(HttpStatusCode.OK, true);
            }
            return Request.CreateResponse(HttpStatusCode.ExpectationFailed, true);
        }

        [HttpPost]
        [Route("RemoveUserNotification")]
        public HttpResponseMessage RemoveUserNotification(NotificationForUser userNotificatin)
        {
            UserNotificationBL.GetByUsetIdAndNotificationId(userNotificatin);

            //NotificationBL.GetByUsetIdAndNotificationId(userNotificatin);
            return Request.CreateResponse(HttpStatusCode.OK, true);
        }

      
    }
}