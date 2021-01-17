using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeCommittee.Entties
{
   public class UserNotification
    {
        public int id { get; set; }

        public Nullable<int> user_id { get; set; }

        public Nullable<int> notification_id { get; set; }

        public Nullable<bool> is_read { get; set; }

       
    }
}
