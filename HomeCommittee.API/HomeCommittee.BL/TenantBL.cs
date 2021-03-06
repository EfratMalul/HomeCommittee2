﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using HomeCommittee.Entties;
using HomeCommittee.DAL;
using HomeCommittee.BL.Converters;

namespace HomeCommittee.BL
{
    public class TenantBL
    {

        public static void AddTenant(Tenant t)
        {
            TenantDAL.Add(TenantConverter.ToDAL(t));
        }
        public static void UpdateTenantDetails(Tenant t)
        {
            TenantDAL.UpdateTenantDetails(TenantConverter.ToDAL(t));
        }
        
        public static Tenant GetTenantByUserId(int userId)
        {
            return TenantConverter.ToDTO(TenantDAL.GetByUserId(userId));
        }
        public static List<Tenant> GetAllTenantByBuildingId(int buildingId)
        {
            return TenantConverter.ListToDTO(TenantDAL.GetByBuildingId(buildingId));
        }
        public static void RemoveTenant(Tenant t)
        {
            TenantDAL.RemoveTenant(TenantConverter.ToDAL(t));
        }
    

        public static List<Tenant> GetAll()
        {
            return TenantConverter.ListToDTO(TenantDAL.Get());
        }

        public static Tenant GetById(int id)
        {
            return TenantConverter.ToDTO(TenantDAL.GetById(id));
        }
        public static List<tenant_tbl> GetAllTenantByBuilding(int buildingId)
        {
            return TenantDAL.GetAllTenantByBuilding(buildingId);
        }

    }
}
