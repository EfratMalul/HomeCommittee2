using HomeCommittee.DAL;
using HomeCommittee.Entties;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeCommittee.BL
{
    public class MessageBL
    {
        public static void AddMessage(Message message)
        {
            MessageDAL.Add(Converters.MessageConverter.ToDAL(message));
        }

        public static List<Message> GetAll()
        {
            return Converters.MessageConverter.ListToDTO(MessageDAL.Get());
        }
        public static Message GetById(int id)
        {
            return Converters.MessageConverter.ToDTO(MessageDAL.GetById(id));
        }
      
    }
}
