//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace HomeCommittee.DAL
{
    using System;
    using System.Collections.Generic;
    
    public partial class tenant_tbl
    {
        public int user_id { get; set; }
        public string first_name { get; set; }
        public string last_name { get; set; }
        public int floor { get; set; }
        public string phone { get; set; }
        public string email { get; set; }
        public bool type { get; set; }
        public int house_num { get; set; }
        public int id { get; set; }
        public int building_id { get; set; }
    
        public virtual building_tbl building_tbl { get; set; }
        public virtual user_tbl user_tbl { get; set; }
    }
}