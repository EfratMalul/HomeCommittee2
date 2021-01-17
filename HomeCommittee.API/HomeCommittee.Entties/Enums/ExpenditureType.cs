using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeCommittee.Entties.Enums
{
    public enum ExpenditureType
    {
        [Description("רגיל")]

        Regular = 0,

        [Description("חריג")]

       Irregular = 1,
    }
}
