using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeCommittee.Entties
{
   public class NotificationForUser
    {
        public int userId { get; set; }
        public string message { get; set; }
        public int notificationId { get; set; }
    }
}
