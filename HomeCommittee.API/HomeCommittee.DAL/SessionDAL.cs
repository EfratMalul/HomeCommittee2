using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeCommittee.DAL
{
   public static class SessionDAL
    {
        //get all
        //get by id
        //add
        //update
        //delete
        public static List<session_tbl> Get()
        {
            using (HomeCommitteeDBEntities db = new HomeCommitteeDBEntities())
            {
                return db.session_tbl.ToList();
            }
        }

        public static session_tbl GetById(int id)
        {
            using (HomeCommitteeDBEntities db = new HomeCommitteeDBEntities())
            {
                return db.session_tbl.Find(id);
            }
        }

        public static void Add(session_tbl session)
        {
            try
            {
                using (HomeCommitteeDBEntities db = new HomeCommitteeDBEntities())
                {
                    db.session_tbl.Add(session);
                    db.SaveChanges();
                }
            }
            catch (Exception e)
            {

            }
        }
    }
}
