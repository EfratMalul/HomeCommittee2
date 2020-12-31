using HomeCommittee.DAL;
using HomeCommittee.Entties;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeCommittee.BL
{
    public class SurveyBL
    {
        public static void AddNewSurvey(SekerCotert sekerCotert)
        {
            SurveyHedear surveyHedear = Converters.SurveyConverter.ToDAL(sekerCotert);
            long surveyHedearId = SurveyDAL.AddNewSurveyHeader(surveyHedear);
            //surveyHedear.SurveyDetails.ToList().ForEach(x => x.SurveyHedearId = surveyHedearId);
            //SurveyDAL.AddNewSurveyDetails(surveyHedear.SurveyDetails);
        }
        public static List<SekerCotert> GetSurveyByBuildingId(int buildingId)
        {
            //List<T> u = db.table.where(x => x.user = userid)
            //List<SekerCotert> x =
              return  Converters.SurveyConverter.ListToDTO(SurveyDAL.GetSurveyByBuildingId(buildingId));
            //x.ForEach(y => y.UserStatus = u.Contains(y.SurveyHedearId.) ? true : false)

            //return x;
        }

        //public static List<Survey> GetAll()
        //{
        //    return Converters.SurveyConverter.ListToDTO(SurveyDAL.Get());
        //}
        //public static Survey GetById(int id)
        //{
        //    return Converters.SurveyConverter.ToDTO(SurveyDAL.GetById(id));
        //}
    }
}
