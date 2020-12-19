using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using HomeCommittee.DAL;
using HomeCommittee.Entties;

namespace HomeCommittee.BL.Converters
{
    public static class NotificationConverter
    {
        public static notification_tbl ToDAL(Notification n)
        {
            return new notification_tbl {id=n.id };
        }
        public static Notification ToDTO(notification_tbl n)
        {
            return new Notification { id = n.id };
        }
        public static List<notification_tbl> ListToDAL(List<Notification> list)
        {
            return list.Select(n => ToDAL(n)).ToList();
        }

        public static List<Notification> ListToDTO(List<notification_tbl> list)
        {
            return list.Select(n => ToDTO(n)).ToList();
        }

    }
}
