﻿//------------------------------------------------------------------------------
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
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class HomeCommitteeDBEntities : DbContext
    {
        public HomeCommitteeDBEntities()
            : base("name=HomeCommitteeDBEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<building_tbl> building_tbl { get; set; }
        public virtual DbSet<fault_tbl> fault_tbl { get; set; }
        public virtual DbSet<message_tbl> message_tbl { get; set; }
        public virtual DbSet<notification_tbl> notification_tbl { get; set; }
        public virtual DbSet<payment_tbl> payment_tbl { get; set; }
        public virtual DbSet<permission_tbl> permission_tbl { get; set; }
        public virtual DbSet<session_tbl> session_tbl { get; set; }
        public virtual DbSet<survey_tbl> survey_tbl { get; set; }
        public virtual DbSet<SurveyDetails> SurveyDetails { get; set; }
        public virtual DbSet<SurveyHedear> SurveyHedear { get; set; }
        public virtual DbSet<sysdiagrams> sysdiagrams { get; set; }
        public virtual DbSet<tenant_payment_tbl> tenant_payment_tbl { get; set; }
        public virtual DbSet<tenant_tbl> tenant_tbl { get; set; }
        public virtual DbSet<user_notification_tbl> user_notification_tbl { get; set; }
        public virtual DbSet<user_permissions_tbl> user_permissions_tbl { get; set; }
        public virtual DbSet<user_tbl> user_tbl { get; set; }
        public virtual DbSet<vote_tbl> vote_tbl { get; set; }
        public virtual DbSet<expenditure_tbl> expenditure_tbl { get; set; }
    }
}
