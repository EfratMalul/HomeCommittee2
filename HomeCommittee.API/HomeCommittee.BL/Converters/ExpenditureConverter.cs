using HomeCommittee.DAL;
using HomeCommittee.Entties;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeCommittee.BL.Converters
{
    public class ExpenditureConverter
    {
         public static Expenditure ToDTO (expenditure_tbl e)
        {
            return new Expenditure()
            {
                id = e.id,
                sum = e.sum,
                date = e.date,
                destination = e.destination,
                description = e.description,
                building_id = e.building_id
            };
        }

        public static expenditure_tbl ToDAL(Expenditure e)
        {
            return new expenditure_tbl()
            {
                id = e.id,
                sum = e.sum,
                date = e.date,
                destination = e.destination,
                description = e.description,
                building_id = e.building_id
            };
        }

        public static List<Expenditure> ListToDTO(List<expenditure_tbl> list)
        {
            return list.Select(e => ToDTO(e)).ToList();
        }

        public static List<expenditure_tbl> ListToDAL(List<Expenditure> list)
        {
            return list.Select(e => ToDAL(e)).ToList();
        }
    }
}
