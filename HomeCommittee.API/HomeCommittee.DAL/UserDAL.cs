using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeCommittee.DAL
{
    public static class UserDAL
    {
        //get all
        //get by id
        //add
        //update
        //delete
        public static List<user_tbl> Get()
        {
            using (HomeCommitteeDBEntities db = new HomeCommitteeDBEntities())
            {
                return db.user_tbl.ToList();
            }
        }

        public static user_tbl GetById(int id)
        {
            using (HomeCommitteeDBEntities db = new HomeCommitteeDBEntities())
            {
                return db.user_tbl.Find(id);
            }
        }

        public static int Add(user_tbl user)
        {
            try
            {
                using (HomeCommitteeDBEntities db = new HomeCommitteeDBEntities())
                {
                    db.user_tbl.Add(user);
                    db.SaveChanges();
                    return user.id;
                }
            }
            catch
            {
                throw;
            }
        }

        public static int GetByPassword(string password, string name)
        {
            using (HomeCommitteeDBEntities db = new HomeCommitteeDBEntities())
            {
                user_tbl user = db.user_tbl.FirstOrDefault(u => u.password == password && u.user_name== name);
                return user != null ? user.id : -1;
                //if(db.user_tbl.Where(u => String.Equals(u.password, password))!=null)
                //       return true;
                //  if (db.user_tbl.FirstOrDefault(u => String.Equals(u.password, password)) != null)

                //return false;
                //  return db.user_tbl.FirstOrDefault(u => String.Equals(u.password, password));

            }
        }
        public static user_permissions_tbl GetUserPermissions(int id)
        {
            using (HomeCommitteeDBEntities db = new HomeCommitteeDBEntities())
            {
                return db.user_permissions_tbl.FirstOrDefault(u => u.user_id == id);
            }

        }
    }
}
