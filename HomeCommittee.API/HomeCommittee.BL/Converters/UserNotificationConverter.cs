using HomeCommittee.DAL;
using HomeCommittee.Entties;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeCommittee.BL.Converters
{
    public class UserNotificationConverter
    {

        public static UserNotification ToDTO(user_notification_tbl u)
        {
            return new UserNotification()
            {
                id = u.id,
                user_id = u.user_id,
                notification_id = u.notification_id,
                is_read = u.is_read,

            };
        }

        public static user_notification_tbl ToDAL(UserNotification u)
        {
            return new user_notification_tbl()
            {
                id = u.id,
                user_id = u.user_id,
                notification_id = u.notification_id,
                is_read = u.is_read,
            };
        }

        public static List<UserNotification> ListToDTO(List<user_notification_tbl> list)
        {
            return list.Select(e => ToDTO(e)).ToList();
        }

        public static List<user_notification_tbl> ListToDAL(List<UserNotification> list)
        {
            return list.Select(e => ToDAL(e)).ToList();
        }
    }
}
