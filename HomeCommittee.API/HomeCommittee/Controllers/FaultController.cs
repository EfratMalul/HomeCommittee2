using HomeCommittee.BL;
using HomeCommittee.DAL;
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
    [RoutePrefix("api/Fault")]
    public class FaultController : ApiController
    {
        HomeCommitteeDBEntities db = new HomeCommitteeDBEntities();

         [HttpGet]
        [Route("GetAllFaults/{buildingId}")]
        public HttpResponseMessage GetAllFaults(int buildingId)
        {
            List<Fault> faults = FaultBL.GetFaultByBuilding(buildingId);
            return Request.CreateResponse(HttpStatusCode.OK, faults);
        }

        [HttpPost]
        [Route("AddFault")]
        public HttpResponseMessage AddFault(Fault f)
        {
            FaultBL.AddFault(f);
            return Request.CreateResponse(HttpStatusCode.OK, true);
        }

        //[HttpPut]
        //[Route("UpdateStatus/{id}/{fault}")]
        //public IHttpActionResult UpdateStatus(int id, Fault fault)
        //{
        //    if (!ModelState.IsValid)//האם האובייקט לא תקין
        //        return BadRequest(ModelState);//נחזיר תשובה עם ערך שגוי

        //    if (id != fault.id)
        //        return Conflict(); //שגיאה שמצביעה על בעיה בהתאמה

        //    db.Entry(fault).State = System.Data.Entity.EntityState.Modified;// האובייקט הנשלח אמור להתעדכן
        //    db.SaveChanges();
        //    //מספר 201 מסמן הצלחה בפונקציות של put, post
        //    return CreatedAtRoute("DefaultApi", new { id = fault.id }, fault);
        //}


        [HttpPost]
        [Route("UpdateStatus")]
        public HttpResponseMessage UpdateStatus(Fault fault)
        {
            FaultBL.UpdateFaultStatus(fault);

            //NotificationBL.GetByUsetIdAndNotificationId(userNotificatin);
            return Request.CreateResponse(HttpStatusCode.OK, true);
        }
    }
}