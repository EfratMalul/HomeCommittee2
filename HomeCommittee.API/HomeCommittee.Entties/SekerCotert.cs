using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeCommittee.Entties
{
    public class SekerCotert
    {
        public long SurveyHedearId { get; set; }
        public string Subject { get; set; }
        public DateTime CreateDate { get; set; }
        public int? CountAnswers { get; set; }
        public bool Status { get; set; }
        public int BuildingId { get; set; } 



        public List<SekerPerut> SekerPeruts { get; set; }
    }
}

//public long SurveyHedearId { get; set; }
//public string Subject { get; set; }
//public System.DateTime CreateDate { get; set; }
//public Nullable<int> CountAnswers { get; set; }
//public bool Status { get; set; }
//public int BuildingId { get; set; }
