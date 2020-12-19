using HomeCommittee.DAL;
using HomeCommittee.Entties;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeCommittee.BL
{
    public class SessionBL
    {
        public static void AddSession(Session session)
        {
            SessionDAL.Add(Converters.SessionConverter.ToDAL(session));
        }

        public static List<Session> GetAll()
        {
            return Converters.SessionConverter.ListToDTO(SessionDAL.Get());
        }
        public static Session GetById(int id)
        {
            return Converters.SessionConverter.ToDTO(SessionDAL.GetById(id));
        }
    }
}
