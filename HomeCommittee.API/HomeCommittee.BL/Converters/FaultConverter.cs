using HomeCommittee.DAL;
using HomeCommittee.Entties;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeCommittee.BL.Converters
{
    public class FaultConverter
    {
        public static fault_tbl ToDAL(Fault fault)
        {
            return new fault_tbl()
            {
                id = fault.id,
                user_id = fault.user_id,
                description = fault.description,
                status = fault.status,
                building_id = fault.building_id
            };
        }

        public static Fault ToDTO(fault_tbl fault)
        {
            return new Fault()
            {
                id = fault.id,
                user_id = fault.user_id,
                description = fault.description,
                status = fault.status,
                building_id = fault.building_id

            };
        }

        public static List<fault_tbl> ListToDAL(List<Fault> listFault)
        {
            return listFault.Select(f => ToDAL(f)).ToList();
        }

        public static List<Fault> ListToDTO(List<fault_tbl> listFault)
        {
            return listFault.Select(f => ToDTO(f)).ToList();
        }



    }
}
