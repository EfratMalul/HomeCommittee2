using HomeCommittee.DAL;
using HomeCommittee.Entties;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeCommittee.BL.Converters
{
    public static class SurveyConverter
    {
        public static SurveyHedear ToDAL(SekerCotert s)
        {
            return new SurveyHedear
            {
                BuildingId = s.BuildingId,
                CountAnswers = s.CountAnswers,
                CreateDate = s.CreateDate,
                Status = s.Status,
                Subject = s.Subject,
               SurveyDetails = {new SurveyDetails() { ExtrnalChar1="1",ExtrnalChar2="2",ExtrnalCount1=1,ExtrnalNum1=2} }
               //s.SekerPeruts.Select(x => ToDAL(x)).ToList()
            };
        }


        public static SurveyDetails ToDAL(SekerPerut s)
        {
            return new SurveyDetails
            {
                SurveyDetailsId = s.SurveyDetailsId,
                QuestionSubject = s.QuestionSubject,
                SurveyHedearId = s.SurveyHedearId,
                ExtrnalNum1 = s.ExtrnalNum1,
                ExtrnalNum2 = s.ExtrnalNum2,
                ExtrnalNum3 = s.ExtrnalNum3,
                ExtrnalNum4 = s.ExtrnalNum4,
                ExtrnalNum5 = s.ExtrnalNum5,
                ExtrnalChar1 = s.ExtrnalChar1,
                ExtrnalChar2 = s.ExtrnalChar2,
                ExtrnalChar3 = s.ExtrnalChar3,
                ExtrnalChar4 = s.ExtrnalChar4,
                ExtrnalChar5 = s.ExtrnalChar5,
                ExtrnalCount1 = s.ExtrnalCount1,
                ExtrnalCount2 = s.ExtrnalCount2,
                ExtrnalCount3 = s.ExtrnalCount3,
                ExtrnalCount4 = s.ExtrnalCount4,
                ExtrnalCount5 = s.ExtrnalCount5,
            };
        }
        public static SekerCotert ToDTO(SurveyHedear s)
        {
            return new SekerCotert
            {
                SurveyHedearId = s.SurveyHedearId,
                Subject = s.Subject,
                CreateDate = s.CreateDate,
                CountAnswers = s.CountAnswers,
                Status = s.Status,
                BuildingId = s.BuildingId,
                //SekerPeruts = s.SurveyDetails.Select(x => ToDTO(x)).ToList()

            };

        }

        public static SekerPerut ToDTO(SurveyDetails s)
        {
            return new SekerPerut
            {
                SurveyDetailsId = s.SurveyDetailsId,
                QuestionSubject = s.QuestionSubject,
                SurveyHedearId = s.SurveyHedearId,
                ExtrnalNum1 = s.ExtrnalNum1,
                  ExtrnalChar2 = s.ExtrnalChar2,
                ExtrnalChar3 = s.ExtrnalChar3,
                ExtrnalChar4 = s.ExtrnalChar4,
                ExtrnalChar5 = s.ExtrnalChar5,
                ExtrnalCount1 = s.ExtrnalCount1,
                ExtrnalCount2 = s.ExtrnalCount2,
                ExtrnalCount3 = s.ExtrnalCount3,
                ExtrnalCount4 = s.ExtrnalCount4,
                ExtrnalCount5 = s.ExtrnalCount5,
            };
        }

        public static List<SekerCotert> ListToDTO(List<SurveyHedear> list)
        {
            return list.Select(e => ToDTO(e)).ToList();
        }

        public static List<SurveyHedear> ListToDAL(List<SekerCotert> list)
        {
            return list.Select(e => ToDAL(e)).ToList();
        }
    }
}
