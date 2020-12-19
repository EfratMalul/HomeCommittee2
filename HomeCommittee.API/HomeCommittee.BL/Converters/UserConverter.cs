using HomeCommittee.DAL;
using HomeCommittee.Entties;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeCommittee.BL.Converters
{
    public static class UserConverter
    {
        public static user_tbl ToDAL(User u)
        {
            return new user_tbl() { password = u.password, user_name = u.user_name };
        }


        public static User ToDTO(user_tbl u)
        {
            return new User() { id = u.id, password = u.password, user_name = u.user_name };
        }

       
        public static List<user_tbl> ListToDAL(List<User> list)
        {
            return list.Select(u => ToDAL(u)).ToList();
        }  

        public static List<User> ListToDTO(List<user_tbl> list)
        {
            return list.Select(u => ToDTO(u)).ToList();
        }



    }
}
