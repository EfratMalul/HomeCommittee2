using HomeCommittee.BL.Converters;
using HomeCommittee.DAL;
using HomeCommittee.Entties;
using HomeCommittee.Entties.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeCommittee.BL
{
    public class FaultBL
    {
        public static void AddFault(Fault fault)
        {
            FaultDAL.Add(FaultConverter.ToDAL(fault));
        }

        public static List<Fault> GetFaultByBuilding(int buildingId)
        {
            return FaultConverter.ListToDTO(FaultDAL.GetFaultByBuilding(buildingId));
        }

        public static void UpdateFaultStatus(Fault f)
        {
            FaultDAL.UpdateStatus(FaultConverter.ToDAL(f));

        }

    }
}
