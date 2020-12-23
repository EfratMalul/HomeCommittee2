using HomeCommittee.Entties;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeCommittee.DAL
{
    public static class NotificationDAL
    {
        //get all
        //get by id
        //add
        //update
        //delete
        public static List<notification_tbl> Get()
        {
            using (HomeCommitteeDBEntities db = new HomeCommitteeDBEntities())
            {
                return db.notification_tbl.ToList();
            }
        }
        public static user_notification_tbl GetByUsetIdAndNotificationId(NotificationForUser n)
        {
            using (HomeCommitteeDBEntities db = new HomeCommitteeDBEntities())
            {
                return db.user_notification_tbl.Where(u => u.notification_id == n.notificationId && u.user_id == n.userId)
                    .FirstOrDefault();
            }
        }

        public static List<Notification> GetByUserId(List<UserNotification> notifications)
        {
            using (HomeCommitteeDBEntities db = new HomeCommitteeDBEntities())
            {
                List<Notification> notificationList = new List<Notification>();

                foreach (UserNotification not in notifications)
                {

                    var query = from u in db.notification_tbl
                                where u.id == not.notification_id
                                select u;

                    foreach (var item in query)
                    {
                        Notification notification = new Notification();
                        notification.id = item.id;
                        notification.message = item.messege;

                        notificationList.Add(notification);
                    }
                }

                return notificationList;

            }

        }



        public static notification_tbl GetById(int id)
        {
            using (HomeCommitteeDBEntities db = new HomeCommitteeDBEntities())
            {
                return db.notification_tbl.Find(id);
            }
        }

        public static int Add(notification_tbl notification)
        {
            try
            {
                using (HomeCommitteeDBEntities db = new HomeCommitteeDBEntities())
                {
                    db.notification_tbl.Add(notification);
                    db.SaveChanges();
                    return notification.id;
                }
                return -1;
            }

            catch (Exception e)
            {
                throw e;
            }
        }
        public static void Add(user_notification_tbl notification)
        {
            try
            {
                using (HomeCommitteeDBEntities db = new HomeCommitteeDBEntities())
                {
                    db.user_notification_tbl.Add(notification);
                    db.SaveChanges();

                }
            }

            catch (Exception e)
            {
                throw e;
            }
        }
    }
}
