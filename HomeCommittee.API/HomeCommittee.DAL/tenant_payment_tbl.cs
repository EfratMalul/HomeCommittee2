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
    
    public partial class tenant_payment_tbl
    {
        public int id { get; set; }
        public int tenant_id { get; set; }
        public int payment_id { get; set; }
        public System.DateTime paymentDate { get; set; }
    
        public virtual payment_tbl payment_tbl { get; set; }
        public virtual user_tbl user_tbl { get; set; }
    }
}