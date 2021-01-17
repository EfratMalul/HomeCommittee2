using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeCommittee.Entties.Enums
{
    public enum PermissionType
    {
        [Description("דייר")]
        Tenant = 0,
        [Description("וועד")]
        Committee = 1
    }
}
