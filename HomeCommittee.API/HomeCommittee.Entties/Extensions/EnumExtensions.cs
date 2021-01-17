using HomeCommittee.Entties.Enums;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace HomeCommittee.Entties.Extensions
{
    public static class EnumExtensions

    {
        public static string GetDescription<T>(this T value)
     where T : struct
        {
            FieldInfo field;
            DescriptionAttribute attribute;
            string result;

            field = value.GetType().GetField(value.ToString());
            attribute = (DescriptionAttribute)Attribute.GetCustomAttribute(field, typeof(DescriptionAttribute));
            result = attribute != null ? attribute.Description : string.Empty;

            return result;
        }

        public static T GetValue<T>(string value, T defaultValue)
        {
            T result;

            result = defaultValue;

            foreach (T id in Enum.GetValues(typeof(T)))
            {
                FieldInfo field;
                DescriptionAttribute attribute;

                field = id.GetType().GetField(id.ToString());
                attribute = Attribute.GetCustomAttribute(field, typeof(DescriptionAttribute)) as DescriptionAttribute;

                if (attribute != null && attribute.Description == value)
                {
                    result = id;
                    break;
                }
            }

            return result;
        }





        //    public static string GetDescription(this Enum @enum)

        //    {
        //        string value;

        //        if (!DescriptionCache.TryGetValue(@enum, out value))

        //            RegisterEnum(@enum.GetType());

        //        return DescriptionCache[@enum];

        //    }
        //    private static void RegisterEnum(Type enumType)

        //    {

        //        foreach (Enum value in Enum.GetValues(enumType))

        //        {

        //            // Get the Description attribute value for the enum value

        //            FieldInfo fi = value.GetType().GetField(value.ToString());

        //            DescriptionAttribute attribute = fi.GetCustomAttributes(typeof(DescriptionAttribute), false).FirstOrDefault() as DescriptionAttribute;

        //            DescriptionCache[value] = (null != attribute) ? attribute.Description : value.ToString();

        //        }

        //    }

        //}
    }
}
