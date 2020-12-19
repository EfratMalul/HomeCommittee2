using HomeCommittee.DAL;
using HomeCommittee.Entties;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace HomeCommittee.BL.Converters
{
    public static class MessageConverter
    {
        public static message_tbl ToDAL(Message m)
        {
            return new message_tbl()
            {
                id = m.id,
                description = m.description,
                day = m.day,
                date = m.date,
                start_time = m.start_time,
                end_time = m.end_time,
                building_id = m.building_id
            };
        }
        public static Message ToDTO(message_tbl m)
        {
            return new Message()
            {
                id = m.id,
                description = m.description,
                day = m.day,
                date = m.date,
                start_time = m.start_time,
                end_time = m.end_time,
                building_id = m.building_id
            };
        }


        public static List<message_tbl> ListToDAL(List<Message> list)
        {
            return list.Select(m => ToDAL(m)).ToList();
        }

        public static List<Message> ListToDTO(List<message_tbl> list)
        {
            return list.Select(m => ToDTO(m)).ToList();
        }

    }
}
