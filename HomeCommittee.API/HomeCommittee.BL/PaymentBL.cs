using HomeCommittee.BL.Converters;
using HomeCommittee.DAL;
using HomeCommittee.Entties;
using HomeCommittee.Entties.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeCommittee.BL
{
    public class PaymentBL
    {
        //public static void AddPayment(Payment payment)
        //{
        //    PaymentDAL.Addpayment(PaymentConverter.ToDAL(payment));
        //}

        //public static List<Payment> GetPaymentsByBuilding(int buildingId)
        //{
        //    return PaymentConverter.ListToDTO(PaymentDAL.GetPaymentsByBuilding(buildingId));
        //}

        //public static Payment GetById(int id)
        //{
        //    return PaymentConverter.ToDTO(PaymentDAL.GetById(id));
        //}


        public static void AddPayment(Payment payment)
        {
            PaymentDAL.Addpayment(PaymentConverter.ToDAL(payment));
        }
        public static void AddPayment(Expenditure expenditure)
        {
            List<tenant_tbl> tenants = TenantBL.GetAllTenantByBuilding(expenditure.building_id);
            payment_tbl p = new payment_tbl
            {
                building_id = expenditure.building_id,
                description = expenditure.description,
                sum = expenditure.sum / tenants.Count,
                pay_for_date = DateTime.Now,  
            };
            PaymentDAL.Addpayment(p);
        }


        public static List<Payment> GetPaymentsByBuilding(int buildingId)
        {
            return PaymentConverter.ListToDTO(PaymentDAL.GetPaymentsByBuilding(buildingId));
        }

        public static List<TenantPayment> GetPaymentsByUser(int buildingId, int userId)
        {
            var x = PaymentConverter.ListToDTOTenantPayment(PaymentDAL.GetPaymentsByBuilding(buildingId));
            var y = PaymentDAL.GetPaymentsForUser(userId).ToList();
            x.ForEach(z =>
            {
                z.Status = y.Select(t => t.payment_id).Contains(z.PaymentId) ? true : false;
                z.TenantId = userId;
                z.PaymentDate = y.FirstOrDefault(u => u.payment_id == z.PaymentId)?.paymentDate ?? default(DateTime);
            });
            return x;
        }

        //public static List<Payment> GetAlltenantPayment(int buildingId)
        //{
        //    var x = PaymentConverter.ListToDTOTenantPayment(PaymentDAL.GetPaymentsByBuilding(buildingId));
        //    var y =TenantPayment.
        //    x.ForEach(z =>
        //    {
        //        z.Status = y.Select(t => t.payment_id).Contains(z.PaymentId) ? true : false;
        //        z.TenantId = userId;
        //        z.PaymentDate = y.FirstOrDefault(u => u.payment_id == z.PaymentId)?.paymentDate ?? default(DateTime);
        //    });
        //    return x;


        //    return PaymentConverter.ListToDTO(PaymentDAL.GetPaymentsByBuilding(buildingId));
        //}

        public static Payment GetById(int id)
        {
            return PaymentConverter.ToDTO(PaymentDAL.GetById(id));
        }

    }
}
