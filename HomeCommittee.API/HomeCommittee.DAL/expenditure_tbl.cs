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
    
    public partial class expenditure_tbl
    {
        public int id { get; set; }
        public double sum { get; set; }
        public System.DateTime date { get; set; }
        public string destination { get; set; }
        public string description { get; set; }
        public int building_id { get; set; }
    }
}