using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeCommittee.Entties
{
    public class Session
    {
        public int id { get; set; }
        public DateTime date { get; set; }
        public string issue { get; set; }
        public Nullable<int> building_id { get; set; }
        public int user_id { get; set; }
        public string user { get; set; }

    }
}
