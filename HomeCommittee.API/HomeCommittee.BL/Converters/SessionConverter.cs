using HomeCommittee.DAL;
using HomeCommittee.Entties;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace HomeCommittee.BL.Converters
{
    public static class SessionConverter
    {
        public static session_tbl ToDAL(Session s)
        {
            return new session_tbl { id = s.id, issue = s.issue, building_id = s.building_id };
        }
        public static Session ToDTO(session_tbl s)
        {
            return new Session { id = s.id, issue = s.issue, building_id = s.building_id };
        }
        public static List<session_tbl> ListToDAL(List<Session> list)
        {
            return list.Select(s => ToDAL(s)).ToList();
        }

        public static List<Session> ListToDTO(List<session_tbl> list)
        {
            return list.Select(s => ToDTO(s)).ToList();
        }
    }
}
