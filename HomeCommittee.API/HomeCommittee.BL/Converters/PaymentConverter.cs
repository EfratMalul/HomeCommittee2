using HomeCommittee.DAL;
using HomeCommittee.Entties;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeCommittee.BL.Converters
{
   public class PaymentConverter
    {
        public static Payment ToDTO(payment_tbl payment)
        {
            return new Payment()
            {
                id = payment.id,
                building_id = payment.building_id,
                sum = payment.sum,
                pay_for_date = payment.pay_for_date,
                description = payment.description
            };
        }
        public static TenantPayment ToDTOTenantPayment(payment_tbl payment)
        {
            return new TenantPayment()
            {
                BuildingId = payment.building_id,
                PayForDate = payment.pay_for_date,
                Description = payment.description,
                Sum = payment.sum,
                PaymentId = payment.id,
            };
        }
        public static payment_tbl ToDAL(Payment payment)
        {
            return new payment_tbl()
            {
                id = payment.id,
                building_id = payment.building_id,
                sum = payment.sum,
                pay_for_date = payment.pay_for_date,
                description = payment.description
            };
        }

        public static List<Payment> ListToDTO(List<payment_tbl> list)
        {
            return list.Select(p => ToDTO(p)).ToList();
        }
        public static List<TenantPayment> ListToDTOTenantPayment(List<payment_tbl> list)
        {
            return list.Select(p => ToDTOTenantPayment(p)).ToList();
        }


        public static List<payment_tbl> ListToDAL(List<Payment> list)
        {
            return list.Select(p => ToDAL(p)).ToList();
        }
    }
}
