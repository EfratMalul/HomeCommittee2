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
    
    public partial class message_tbl
    {
        public int id { get; set; }
        public string description { get; set; }
        public Nullable<int> day { get; set; }
        public Nullable<System.DateTime> date { get; set; }
        public Nullable<System.TimeSpan> start_time { get; set; }
        public Nullable<System.TimeSpan> end_time { get; set; }
        public Nullable<int> building_id { get; set; }
    
        public virtual building_tbl building_tbl { get; set; }
    }
}
