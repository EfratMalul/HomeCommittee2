using HomeCommittee.Entties;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeCommittee.DAL
{
    public class UserNotificationDAL
    {

        public static user_notification_tbl GetById(int id)
        {
            using (HomeCommitteeDBEntities db = new HomeCommitteeDBEntities())
            {
                return db.user_notification_tbl.Find(id);
            }
        }


        public static List<user_notification_tbl> GetByUserId(int userId)
        {
            using (HomeCommitteeDBEntities db = new HomeCommitteeDBEntities())
            {
                return db.user_notification_tbl.Where(b => b.user_id == userId).ToList();
            }

        }

        public static user_notification_tbl GetByUsetIdAndNotificationId(NotificationForUser n)
        {
            using (HomeCommitteeDBEntities db = new HomeCommitteeDBEntities())
            {
                return db.user_notification_tbl.Where(u => u.user_id == n.userId && u.notification_id == n.notificationId).
                    FirstOrDefault();
            }

        }
        public static void RemoveUserNotification(user_notification_tbl u)
        {
            using (HomeCommitteeDBEntities db = new HomeCommitteeDBEntities())
            {
                //db.user_notification_tbl.Remove(u);
                db.Entry(u).State = EntityState.Deleted;
                db.SaveChanges();
            }

        }










        //public static List<expenditure_tbl> GetByBuildingId(int buildingId)
        //{
        //    using (HomeCommitteeDBEntities db = new HomeCommitteeDBEntities())
        //    {
        //        return db.expenditure_tbl.Where(b => b.building_id == buildingId).ToList();
        //    }

        //}

        //public static void Add(expenditure_tbl expenditure)
        //{
        //    try
        //    {
        //        using (HomeCommitteeDBEntities db = new HomeCommitteeDBEntities())
        //        {
        //            db.expenditure_tbl.Add(expenditure);
        //            db.SaveChanges();
        //        }
        //    }
        //    catch
        //    {
        //        throw;
        //    }
        //}


    }
}
