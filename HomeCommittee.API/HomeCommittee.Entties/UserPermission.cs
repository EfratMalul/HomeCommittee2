using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeCommittee.Entties
{
    public class UserPermission
    {
        public int Id { get; set; }
        public int BuildingId { get; set; }
        public int Permission { get; set; }
    }
}
