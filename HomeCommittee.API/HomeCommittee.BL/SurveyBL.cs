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
            surveyHedear.SurveyDetails.ToList().ForEach(x => x.SurveyHedearId = surveyHedearId);
            SurveyDAL.AddNewSurveyDetails(surveyHedear.SurveyDetails);
        }
        public static List<SekerCotert> GetSurveyByBuildingId(int buildingId)
        {
            return Converters.SurveyConverter.ListToDTO(SurveyDAL.GetSurveyByBuildingId(buildingId));
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
