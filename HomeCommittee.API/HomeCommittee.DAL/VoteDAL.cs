using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeCommittee.DAL
{
   public static class VoteDAL
    {
        //get all
        //get by id
        //add
        //update
        //delete
        public static List<vote_tbl> Get()
        {
            using (HomeCommitteeDBEntities db = new HomeCommitteeDBEntities())
            {
                return db.vote_tbl.ToList();
            }
        }

        public static vote_tbl GetById(int id)
        {
            using (HomeCommitteeDBEntities db = new HomeCommitteeDBEntities())
            {
                return db.vote_tbl.Find(id);
            }
        }

        public static void Add(vote_tbl vote)
        {
            try
            {
                using (HomeCommitteeDBEntities db = new HomeCommitteeDBEntities())
                {
                    db.vote_tbl.Add(vote);
                    db.SaveChanges();
                }
            }
            catch (Exception e)
            {

            }
        }
    }
}
