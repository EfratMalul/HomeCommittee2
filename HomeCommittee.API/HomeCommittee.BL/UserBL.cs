using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using HomeCommittee.DAL;
using HomeCommittee.Entties;
using HomeCommittee.BL.Converters;

namespace HomeCommittee.BL
{
    public class UserBL
    {
        public static int AddUser(User user)
        {
            return UserDAL.Add(UserConverter.ToDAL(user));
        }

        public static List<User> GetAll()
        {
            return UserConverter.ListToDTO(UserDAL.Get());
        }

        public static User GetById(int id)
        {
            return UserConverter.ToDTO(UserDAL.GetById(id));
        }

        public static int GetByPassword(string password, string name)
        {
            return UserDAL.GetByPassword(password, name);

            //  return UserConverter.ToDTO(UserDAL.GetByPassword(password));
        }
        public static user_permissions_tbl GetUserPermissions(int id)
        {
            return UserDAL.GetUserPermissions(id);
        }
        public static UserPermission CheckUserAndPermissions(string password, string name)
        {
            int id = UserDAL.GetByPassword(password, name);
            if (id != -1)
            {
                user_permissions_tbl user = UserDAL.GetUserPermissions(id);
                tenant_tbl tenant = TenantDAL.GetById(id);
                return new UserPermission
                {
                    Id = id,
                    Permission = user?.permission_id ?? -1,
                    BuildingId = tenant?.building_id ?? -1
                };
            }
            return null;
        }

    }

}
