using System;
using System.Collections.Generic;
using System.Data.Entity.Migrations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeCommittee.DAL
{
    public class PaymentDAL
    {
        public static List<payment_tbl> GetPaymentsByBuilding(int buildingId)
        {
            using (HomeCommitteeDBEntities db = new HomeCommitteeDBEntities())
            {
                return db.payment_tbl.Where(b => b.building_id == buildingId).ToList();
            }
        }
        public static List<tenant_payment_tbl> GetPaymentsForUser(int userId)
        {
            using (HomeCommitteeDBEntities db = new HomeCommitteeDBEntities())
            {
                return db.tenant_payment_tbl.Where(b => b.tenant_id == userId).ToList();
            }
        }

        public static payment_tbl GetById(int id)
        {
            using (HomeCommitteeDBEntities db = new HomeCommitteeDBEntities())
            {
                return db.payment_tbl.Find(id);
            }
        }

        public static void Addpayment(payment_tbl payment)
        {
            try
            {
                using (HomeCommitteeDBEntities db = new HomeCommitteeDBEntities())
                {
                    //db.payment_tbl.AddOrUpdate(payment);
                    db.payment_tbl.Add(payment);
                    db.SaveChanges();
                }
            }
            catch
            {
                throw;
            }
        }
    }
}
