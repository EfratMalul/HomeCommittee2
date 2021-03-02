using HomeCommittee.Entties;
using HomeCommittee.Entties.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;



namespace HomeCommittee.DAL
{
    public class ExpenditureDAL
    {
        public static expenditure_tbl GetById(int id)
        {
            using (HomeCommitteeDBEntities db = new HomeCommitteeDBEntities())
            {
                return db.expenditure_tbl.Find(id);
            }
        }

        public static List<expenditure_tbl> GetByBuildingId(int buildingId)
        {
            using (HomeCommitteeDBEntities db = new HomeCommitteeDBEntities())
            {
                return db.expenditure_tbl.Where(b => b.building_id
                == buildingId)
                .ToList();
            }

        }
        public static double GetByMonth(ExpenditureBuilding eb)
        {
            using (HomeCommitteeDBEntities db = new HomeCommitteeDBEntities())
            {

                List<expenditure_tbl> ex = db.expenditure_tbl.Where(m => m.date.Month == eb.month
                &&m.building_id==eb.buildingId).ToList();
                double sumPay = 0;
                foreach (var e in ex)
                {
                    if (e.type == (int)ExpenditureType.Regular)
                        sumPay += e.sum;
                }

                return sumPay;
            }

        }


        public static void Add(expenditure_tbl expenditure)
        {
            try
            {
                using (HomeCommitteeDBEntities db = new HomeCommitteeDBEntities())
                {
                    db.expenditure_tbl.Add(expenditure);
                    db.SaveChanges();
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

    }
}
