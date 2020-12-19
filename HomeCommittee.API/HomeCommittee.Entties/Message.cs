using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeCommittee.Entties
{
     public class Message
    {
        public int id { get; set; }
        public string description { get; set; }
        public Nullable<int> day { get; set; }
        public Nullable<System.DateTime> date { get; set; }
        public Nullable<System.TimeSpan> start_time { get; set; }
        public Nullable<System.TimeSpan> end_time { get; set; }
        public Nullable<int> building_id { get; set; }


    }
}
