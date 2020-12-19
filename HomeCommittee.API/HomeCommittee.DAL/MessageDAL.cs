using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeCommittee.DAL
{
    public static class MessageDAL
    {
        //get all
        //get by id
        //add
        //update
        //delete
        public static List<message_tbl>Get()
        {
            using(HomeCommitteeDBEntities db=new HomeCommitteeDBEntities())
            {
                return db.message_tbl.ToList();
            }
        }

        public static message_tbl GetById(int id)
        {
            using (HomeCommitteeDBEntities db = new HomeCommitteeDBEntities())
            {
                return db.message_tbl.Find(id);
            }
        }

      public static void Add(message_tbl message)
        {
            try
            {
                using (HomeCommitteeDBEntities db = new HomeCommitteeDBEntities())
                {
                    db.message_tbl.Add(message);
                    db.SaveChanges();
                }
            }
            catch (Exception e)
            {
               
            }
        }
       
        }
}
