using System;
using System.Collections.Generic;
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
                //var x=db.SurveyHedears.Include() .Include(x=>x.SurveyDetails)

                //var survy = db.SurveyHedears
                //  .Include(p => p.SurveyDetails);


                return db.SurveyHedear.Where(b => b.BuildingId == buildingId).ToList();
            }

        }
    }
}
