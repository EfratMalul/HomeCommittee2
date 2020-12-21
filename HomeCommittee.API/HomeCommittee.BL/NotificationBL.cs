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
            List<UserNotification> notifications = UserNotificationConverter.ListToDTO(UserNotificationDAL.GetByUserId(userId));
            return NotificationDAL.GetByUserId(notifications);
        }
    }


}
