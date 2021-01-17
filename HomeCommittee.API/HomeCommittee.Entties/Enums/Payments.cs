using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeCommittee.Entties.Enums
{
    public enum Payments
    {
        [Description("הוצאה חריגה")]

       Expenditure = 0,
        [Description("וועד בית")]

        Committee = 1,
    }
}

