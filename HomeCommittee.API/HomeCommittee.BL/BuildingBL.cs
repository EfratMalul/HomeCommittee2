
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
  public class BuildingBL
    {
        public static int AddBuilding(Building b)
        {
            return BuildingDAL.Add(BuildingConverter.ToDAL(b));
        }

        public static List<Building> GetAll()
        {
           return BuildingConverter.ListToDTO(BuildingDAL.Get());
        }

        public static Building GetById(int id)
        {
            return BuildingConverter.ToDTO(BuildingDAL.GetById(id));
        }
    }
}
