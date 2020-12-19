using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeCommittee.Entties
{
   public  class TenantPayment
    {
        public int PaymentId { get; set; }
        public int BuildingId { get; set; }
        public double Sum { get; set; }
        public DateTime PayForDate { get; set; }
        public string Description { get; set; }
        public int TenantId { get; set; }
        public DateTime PaymentDate { get; set; }

        public bool Status { get; set; }
    }
}
