using HomeCommittee.BL.Converters;
using HomeCommittee.DAL;
using HomeCommittee.Entties;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeCommittee.BL
{
   public class UserNotificationBL
    {
        //public static List<Expenditure> GetByBuildingId(int buildingId)
        //{
        //    return ExpenditureConverter.ListToDTO(ExpenditureDAL.GetByBuildingId(buildingId));
        //}

        public static UserNotification GetById(int id)
        {
            return UserNotificationConverter.ToDTO(UserNotificationDAL.GetById(id));
        }

        //public static void Add(Expenditure expenditure)
        //{
        //    ExpenditureDAL.Add(ExpenditureConverter.ToDAL(expenditure));
        //}
    }
}
