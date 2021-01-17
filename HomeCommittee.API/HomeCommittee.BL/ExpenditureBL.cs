using HomeCommittee.BL.Converters;
using HomeCommittee.DAL;
using HomeCommittee.Entties;
using HomeCommittee.Entties.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel;
using HomeCommittee.Entties.Extensions;

namespace HomeCommittee.BL
{
    public class ExpenditureBL
    {
        public static List<Expenditure> GetByBuildingId(int buildingId)
        {
            return ExpenditureConverter.ListToDTO(ExpenditureDAL.GetByBuildingId(buildingId));
        }

        public static Expenditure GetById(int id)
        {
            return ExpenditureConverter.ToDTO(ExpenditureDAL.GetById(id));
        }

        public static void Add(Expenditure expenditure)
        {
             ExpenditureDAL.Add(ExpenditureConverter.ToDAL(expenditure));
        }

        public static Dictionary<int, string> GetCategory()
        {
            Dictionary<int, string> category = new Dictionary<int, string>();

            for (int i = 1; i <= Enum.GetNames(typeof(ExpenditureCategory)).Length; i++)
            {

                category.Add(i, ((ExpenditureCategory)i).GetDescription());

            }
            return category;
        }

    }
}
