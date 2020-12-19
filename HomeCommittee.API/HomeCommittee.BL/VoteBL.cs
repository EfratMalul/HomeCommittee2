using HomeCommittee.DAL;
using HomeCommittee.Entties;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeCommittee.BL
{
    public class VoteBL
    {
        public static void AddMVote(Vote vote)
        {
            VoteDAL.Add(Converters.VoteConverter.ToDAL(vote));
        }

        public static List<Vote> GetAll()
        {
            return Converters.VoteConverter.ListToDTO(VoteDAL.Get());
        }
        public static Vote GetById(int id)
        {
            return Converters.VoteConverter.ToDTO(VoteDAL.GetById(id));
        }
    }
}
