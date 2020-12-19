using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeCommittee.Entties
{
    public class Vote
    {
        public int id { get; set; }
        public Nullable<int> user_id { get; set; }
        public Nullable<int> survey_id { get; set; }
        public Nullable<int> voting { get; set; }

    }
}
