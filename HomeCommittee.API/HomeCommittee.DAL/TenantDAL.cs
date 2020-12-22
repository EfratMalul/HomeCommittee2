using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeCommittee.DAL
{
    public class TenantDAL
    {

        //update
        //delete

        public static List<tenant_tbl> Get()
        {
            using (HomeCommitteeDBEntities db = new HomeCommitteeDBEntities())
            {
                return db.tenant_tbl.ToList();
            }
        }
        public static void RemoveTenant(tenant_tbl tenant)
        {
            using (HomeCommitteeDBEntities db = new HomeCommitteeDBEntities())
            {
                //int id = tenant.id;
                //tenant_tbl te = db.tenant_tbl.Where(t => t.id == id).FirstOrDefault();
                //db.tenant_tbl.Remove(te);
                db.Entry(tenant).State = EntityState.Deleted;
                db.SaveChanges();

            }
        }


        public static List<tenant_tbl> GetByBuildingId(int buidingId)
        {
            using (HomeCommitteeDBEntities db = new HomeCommitteeDBEntities())
            {
                return db.tenant_tbl.Where(b => b.building_id == buidingId).ToList();
            }
        }

        public static tenant_tbl GetById(int id)
        {
            using (HomeCommitteeDBEntities db = new HomeCommitteeDBEntities())
            {
                return db.tenant_tbl.FirstOrDefault(x => x.user_id == id);
            }
        }

        public static tenant_tbl GetByUserId(int userId)
        {
            using (HomeCommitteeDBEntities db = new HomeCommitteeDBEntities())
            {
                return db.tenant_tbl.FirstOrDefault(x => x.user_id == userId);
            }
        }

        public static void Add(tenant_tbl tenant)
        {
            try
            {
                using (HomeCommitteeDBEntities db = new HomeCommitteeDBEntities())
                {
                    db.tenant_tbl.Add(tenant);
                    db.SaveChanges();
                }
            }
            catch (Exception e)
            {
                throw e;
            }
        }
        public static List<tenant_tbl> GetAllTenantByBuilding(int building_id)
        {
            try
            {
                using (HomeCommitteeDBEntities db = new HomeCommitteeDBEntities())
                {
                    return db.tenant_tbl.Where(t => t.building_id == building_id).ToList();
                }
            }
            catch (Exception e)
            {
                throw e;
            }
        }
        public static void Delete(int id)
        {
            using (HomeCommitteeDBEntities db = new HomeCommitteeDBEntities())
            {
                //   db.tenant_tbl.Find(id).remove();
            }
        }

    }
}
