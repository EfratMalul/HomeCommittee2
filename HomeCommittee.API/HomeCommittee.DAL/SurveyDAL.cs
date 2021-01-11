using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Migrations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeCommittee.DAL
{
    public static class SurveyDAL
    {
        //get all
        //get by id
        //add
        //update
        //delete

        //todo
        //public static long GetSurvey(int id)
        //{
        //    using (HomeCommitteeDBEntities db = new HomeCommitteeDBEntities())
        //    {
        //        return db.SurveyHedears.Where();
        //    }
        //}

        public static long AddNewSurveyHeader(SurveyHedear surveyHedear)
        {
            try
            {
                using (HomeCommitteeDBEntities db = new HomeCommitteeDBEntities())
                {
                    db.SurveyHedear.Add(surveyHedear);
                    db.SaveChanges();
                    return surveyHedear.SurveyHedearId;
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public static void AddNewSurveyDetails(ICollection<SurveyDetails> surveyDetails)
        {
            try
            {
                using (HomeCommitteeDBEntities db = new HomeCommitteeDBEntities())
                {
                    foreach (SurveyDetails surveyDetail in surveyDetails)
                    {
                        db.SurveyDetails.Add(surveyDetail);

                    }
                    db.SaveChanges();
                }
            }
            catch (Exception e)
            {
                throw;
            }
        }

        public static List<SurveyHedear> GetSurveyByBuildingId(int buildingId)
        {
            using (HomeCommitteeDBEntities db = new HomeCommitteeDBEntities())
            {
                List<SurveyHedear> sh = db.SurveyHedear.Include(e => e.SurveyDetails).Where(b => b.BuildingId == buildingId).ToList();
                return sh;

            }

        }

        public static void ChangeStatus(SurveyHedear survey)
        {
            try
            {
                using (HomeCommitteeDBEntities db = new HomeCommitteeDBEntities())
                {
                    db.SurveyHedear.AddOrUpdate(survey);
                    // db.Entry(survey).State = System.Data.Entity.EntityState.Modified;
                    db.SaveChanges();
                }

            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public static void UpdateCountAnswer(SurveyDetails survey)
        {
            try
            {
                using (HomeCommitteeDBEntities db = new HomeCommitteeDBEntities())
                {
                    db.SurveyDetails.AddOrUpdate(survey);
                    // db.Entry(survey).State = System.Data.Entity.EntityState.Modified;
                    db.SaveChanges();
                }

            }
            catch (Exception ex)
            {
                throw ex;
            }
        }



        public static void DeleteSurvey(SurveyHedear survey)
        {
            try
            {
                using (HomeCommitteeDBEntities db = new HomeCommitteeDBEntities())
                {

                    db.Entry(survey).State = EntityState.Deleted;
                    List<SurveyDetails> sd = db.SurveyDetails.Where(s => s.SurveyHedearId == survey.SurveyHedearId).ToList();
                    foreach (var item in sd)
                    {
                        db.Entry(item).State = EntityState.Deleted;
                    }
                  
                    db.SaveChanges();
                }
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public static void DeleteSurveyDetails(SurveyHedear survey)
        {
            using (HomeCommitteeDBEntities db = new HomeCommitteeDBEntities())
            {
               
                

            }
        }

    }

}












//מצרפת עוד דגומה מקוד שלי:



//            using (ClearingHouseEntities clearingHouse = new ClearingHouseEntities())

//{

//    clearingHouse.Database.Log = s => System.Diagnostics.Debug.WriteLine(s);



//    TransferMain =

//        clearingHouse.Set<TransferMain>()

//            .Include(x => x.Balances)

//            .Include(x => x.Covers)

//            .Include(x => x.Debts)

//            .Include(x => x.Deposits)

//           .Include(x => x.DepositTaxes)

//            .Include(x => x.PirteiMaasiks)

//            .Include(x => x.ExemptionBalances)

//            .Include(x => x.PirteiAmitOvers)

//            .Include(x => x.TransferDatas)

//            .Include(x => x.TransferInsureds)

//            .Include(x => x.Funds)

//            .Include(x => x.Surrenders)

//            .Include(x => x.RecievingPolicyInfoes)

//            .Include(x => x.SadinValidations.Select(v => v.ValidationDefinition))

//            .Include(x => x.Debts)

//            .Include(x => x.ShiuchPizurs)

//            .Include(x => x.MashovHeaders.Select(m => m.MashovPeruts))

//            .FirstOrDefault(e => e.TransferId == transferId);

//}


