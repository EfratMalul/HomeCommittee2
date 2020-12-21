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
        public static int AddNotification(string message)
        {
            return NotificationDAL.Add(new notification_tbl { messege= message });
        }
        public static void AddNotificationForUser(int userId,int notificationId)
        {
            NotificationDAL.Add(new user_notification_tbl { user_id=userId,notification_id=notificationId,is_read=false });
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
