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
    
    public partial class SurveyDetails
    {
        public long SurveyDetailsId { get; set; }
        public long SurveyHedearId { get; set; }
        public string QuestionSubject { get; set; }
        public Nullable<int> ExtrnalNum1 { get; set; }
        public Nullable<int> ExtrnalNum2 { get; set; }
        public Nullable<int> ExtrnalNum3 { get; set; }
        public Nullable<int> ExtrnalNum4 { get; set; }
        public Nullable<int> ExtrnalNum5 { get; set; }
        public string ExtrnalChar1 { get; set; }
        public string ExtrnalChar2 { get; set; }
        public string ExtrnalChar3 { get; set; }
        public string ExtrnalChar4 { get; set; }
        public string ExtrnalChar5 { get; set; }
        public Nullable<int> ExtrnalCount1 { get; set; }
        public Nullable<int> ExtrnalCount2 { get; set; }
        public Nullable<int> ExtrnalCount3 { get; set; }
        public Nullable<int> ExtrnalCount4 { get; set; }
        public Nullable<int> ExtrnalCount5 { get; set; }
    
        public virtual SurveyHedear SurveyHedear { get; set; }
    }
}
