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
    
    public partial class survey_tbl
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public survey_tbl()
        {
            this.vote_tbl = new HashSet<vote_tbl>();
        }
    
        public int id { get; set; }
        public string issue { get; set; }
        public string option { get; set; }
        public Nullable<bool> is_open { get; set; }
        public Nullable<System.DateTime> open_date { get; set; }
        public Nullable<int> building_id { get; set; }
        public Nullable<int> num_answard { get; set; }
    
        public virtual building_tbl building_tbl { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<vote_tbl> vote_tbl { get; set; }
    }
}
