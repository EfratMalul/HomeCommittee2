using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeCommittee.Entties
{
   public class Fault
    {
        public int id { get; set; }
        public int user_id { get; set; }
        public string description { get; set; }
        public bool  status { get; set; }
        public int building_id { get; set; }



    }
}
