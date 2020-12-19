using HomeCommittee.DAL;
using HomeCommittee.Entties;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeCommittee.BL.Converters
{
    public class BuildingConverter
    {
        public static building_tbl ToDAL(Building building)
        {
            return new building_tbl()
            {
                address = building.Address,
                num = building.Number,
                city = building.City,
                entrance = building.Entrance,
                zip_code = building.ZipCode,
                num_apartments = building.NumApartments
            };
        }

        public static Building ToDTO(building_tbl building)
        {
            return new Building()
            {
                Id = building.id,
                Address = building.address,
                Number = building.num,
                City = building.city,
                Entrance = building.entrance,
                ZipCode = building.zip_code,
                NumApartments = building.num_apartments
            };
        }

        public static List<building_tbl> ListToDAL(List<Building> listBuilding)
        {
            return listBuilding.Select(b => ToDAL(b)).ToList();
        }

        public static List<Building>ListToDTO(List<building_tbl> listBuilding)
        {
            return listBuilding.Select(b => ToDTO(b)).ToList();
        }

    }
}
