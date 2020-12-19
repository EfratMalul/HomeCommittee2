using HomeCommittee.DAL;
using HomeCommittee.Entties;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeCommittee.BL.Converters
{
    public class TenantConverter
    {
        public static tenant_tbl ToDAL(Tenant t)
        {
            return new tenant_tbl()
            {
                first_name = t.first_name,
                last_name = t.last_name,
                floor = t.floor,
                phone = t.phone,
                email = t.mail,
                type = t.type,
                house_num = t.house_num,
                building_id = t.building_id,
                user_id = t.user_id
            };
        }


        public static Tenant ToDTO(tenant_tbl t)
        {
            return new Tenant()
            {
                id = t.id,
                first_name = t.first_name,
                last_name = t.last_name,
                floor = t.floor,
                phone = t.phone,
                mail = t.email,
                type = t.type,
                house_num = t.house_num,
                building_id = t.building_id
            };
        }

        public static List<tenant_tbl> ListToDAL(List<Tenant> list)
        {
            return list.Select(t => ToDAL(t)).ToList();
        }
        public static List<Tenant> ListToDTO(List<tenant_tbl> list)
        {
            return list.Select(t => ToDTO(t)).ToList();
        }
     
    }
}
