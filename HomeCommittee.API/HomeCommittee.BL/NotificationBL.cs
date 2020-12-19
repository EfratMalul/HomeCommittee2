using HomeCommittee.BL.Converters;
using HomeCommittee.DAL;
using HomeCommittee.Entties;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeCommittee.BL
{
    public class NotificationBL
    {
        public static void AddNotification(Notification notification)
        {
            NotificationDAL.Add(Converters.NotificationConverter.ToDAL(notification));
        }

        public static List<Notification> GetAll()
        {
            return Converters.NotificationConverter.ListToDTO(NotificationDAL.Get());
        }
        public static Notification GetById(int id)
        {
            return Converters.NotificationConverter.ToDTO(NotificationDAL.GetById(id));
        }
        //public static Notification GetByUsetId(int id)
        //{
        //    return Converters.NotificationConverter.ToDTO(NotificationDAL.GetById(id));
        //}
        public static List<Notification> GetByUsetId(int userId)
        {
            //SurveyHedear surveyHedear = Converters.SurveyConverter.ToDAL(sekerCotert);
            //long surveyHedearId = SurveyDAL.AddNewSurveyHeader(surveyHedear);
            //surveyHedear.SurveyDetails.ToList().ForEach(x => x.SurveyHedearId = surveyHedearId);
            //SurveyDAL.AddNewSurveyDetails(surveyHedear.SurveyDetails);
            List<UserNotification> notifications = UserNotificationConverter.ListToDTO(UserNotificationDAL.GetByUserId(userId));
            //return Converters.NotificationConverter.ListToDTO(NotificationDAL.GetByUserId(notifications));
            return NotificationDAL.GetByUserId(notifications);
        }
    }

 
}
