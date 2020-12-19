using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeCommittee.Entties
{
   public class Expenditure
    {
        public int id { get; set; }
        public double  sum { get; set; }
        public DateTime  date { get; set; }
        public string destination { get; set; }
        public string description { get; set; }
        public int  building_id { get; set; }

    }
}
