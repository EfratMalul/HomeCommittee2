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
    
    public partial class user_permissions_tbl
    {
        public int user_id { get; set; }
        public int permission_id { get; set; }
        public int id { get; set; }
    
        public virtual permission_tbl permission_tbl { get; set; }
        public virtual user_tbl user_tbl { get; set; }
    }
}
