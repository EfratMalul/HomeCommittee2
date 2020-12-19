using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeCommittee.Entties
{
      public class Tenant
    {
        public int id { get; set; }
        public string first_name { get; set; }
        public string last_name { get; set; }
        public int floor { get; set; }
        public string phone { get; set; }
        public string mail { get; set; }
       // public string password { get; set; }
        public bool  type { get; set; }
        public int  house_num { get; set; }
        public int  building_id { get; set; }
        public string password { get; set; }
        public int user_id { get; set; }

    }
}
