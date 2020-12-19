using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeCommittee.Entties
{
   public class Building
    {
        public int Id { get; set; }
        public string BuildingName { get; set; }
        public string Address { get; set; }
        public int Number { get; set; }
        public string City { get; set; }
        public int  Entrance { get; set; }//כניסה
        public int   ZipCode { get; set; }
        public int  NumApartments { get; set; }
     
    }
}
