using HomeCommittee.BL.Converters;
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
            SurveyHedear surveyHedear = SurveyConverter.ToDAL(sekerCotert);
            long surveyHedearId = SurveyDAL.AddNewSurveyHeader(surveyHedear);
            //surveyHedear.SurveyDetails.ToList().ForEach(x => x.SurveyHedearId = surveyHedearId);
            //SurveyDAL.AddNewSurveyDetails(surveyHedear.SurveyDetails);
        }
        public static List<SekerCotert> GetSurveyByBuildingId(int buildingId)
        {

            return SurveyConverter.ListToDTO(SurveyDAL.GetSurveyByBuildingId(buildingId));

            //List<T> u = db.table.where(x => x.user = userid)
            //List<SekerCotert> x =
              //return  Converters.SurveyConverter.ListToDTO(SurveyDAL.GetSurveyByBuildingId(buildingId));
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

        public static void ChangeStatus(SekerCotert s)
        {
            //return  Converters.SurveyConverter.ToDTO(SurveyDAL.ChangeStatus(Converters.SurveyConverter.ToDAL(s)));

            SurveyDAL.ChangeStatus(SurveyConverter.ToDAL(s));
      

        }
        
               public static void UpdateCountAnswer(SekerPerut s)
        {
            //return  Converters.SurveyConverter.ToDTO(SurveyDAL.ChangeStatus(Converters.SurveyConverter.ToDAL(s)));

            SurveyDAL.UpdateCountAnswer(SurveyConverter.ToDAL(s));


        }
        public static void RemoveSurvey(SekerCotert s)
        {
        // List<SekerPerut> ls = SurveyConverter.ToDTO(SurveyDAL.DeleteSurveyDetails(SurveyConverter.ToDAL(s)).ToList() .;
             
                         SurveyDAL.DeleteSurvey(SurveyConverter.ToDAL(s));
       

            //user_notification_tbl u = UserNotificationDAL.GetByUsetIdAndNotificationId(n);
            //UserNotificationDAL.RemoveUserNotification(u);
        }
    }
}
