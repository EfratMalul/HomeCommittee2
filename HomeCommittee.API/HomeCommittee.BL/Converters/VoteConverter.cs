using HomeCommittee.DAL;
using HomeCommittee.Entties;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeCommittee.BL.Converters
{
    public static class VoteConverter
    {
        public static vote_tbl ToDAL(Vote v)
        {
            return new vote_tbl()
            {
                id = v.id,
                user_id = v.user_id,
                survey_id = v.survey_id,
                voting = v.voting
            };
        }
        public static Vote ToDTO(vote_tbl v)
        {
            return new Vote()
            {
                id = v.id,
                user_id = v.user_id,
                survey_id = v.survey_id,
                voting = v.voting
            };
        }
        public static List<vote_tbl> ListToDAL(List<Vote> list)
        {
            return list.Select(v => ToDAL(v)).ToList();
        }

        public static List<Vote> ListToDTO(List<vote_tbl> list)
        {
            return list.Select(v => ToDTO(v)).ToList();
        }
    }
}
