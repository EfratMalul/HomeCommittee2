using System;
using System.Collections.Generic;
using System.ComponentModel;

using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeCommittee.Entties.Enums
{
    public enum ExpenditureCategory
    {
        [Description("אחר")]

        Other = 1,
        

        [Description("גינון")]

        Gardening = 2,

        [Description("חשמל")]

        Electricity = 3,

        [Description("מים")]

        Water = 4,

        [Description("מיסים")]

        Levy = 5,

        [Description("מעלית")]

        Elevator = 6,

        [Description("ניקיון")]

        Cleanliness = 7,

        [Description("עמלה")]

        Commission = 8,

        [Description("שיפוצים")]

        Renovation = 9,
        [Description("תקשורת")]

        Communication = 10,

        [Description("תחזוקה")]

        Maintenance = 11,
        [Description("ביטוח")]

        Insurance = 12,

    }
}
