using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeCommittee.DAL
{
    public class BuildingDAL
    {
        public static List<building_tbl> Get()
        {
            using (HomeCommitteeDBEntities db = new HomeCommitteeDBEntities())
            {
                return db.building_tbl.ToList();
            }
        }

        public static building_tbl GetById(int id)
        {
            using (HomeCommitteeDBEntities db = new HomeCommitteeDBEntities())
            {
                return db.building_tbl.Find(id);
            }
        }

        public static int Add(building_tbl building)
        {
            try
            {
                using (HomeCommitteeDBEntities db = new HomeCommitteeDBEntities())
                {
                    db.building_tbl.Add(building);
                    db.SaveChanges();
                    return building.id;
                }

            }
            catch
            {
                throw;
            }
        }


    }
}
