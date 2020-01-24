using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FitnationAPI.Data.Initializers
{
    public class PriceListInitializer
    {
        public static async Task InitializeAsync(ApplicationDbContext db)
        {
            var objectList = new List<PriceList>();

            var gymTypeId = db.ObjectTypes.FirstOrDefault(q => q.Name.Equals("Gym")).Id;
            if (!db.PriceList.Any(s => s.ObjectTypeId.Equals(gymTypeId)))
            {
                objectList.Add(new PriceList() { Id = new Guid(), ObjectTypeId = gymTypeId, Price = 8 });
            }

            var tennisTypeId = db.ObjectTypes.FirstOrDefault(q => q.Name.Equals("Tennis")).Id;
            if (!db.PriceList.Any(s => s.ObjectTypeId.Equals(tennisTypeId)))
            {
                objectList.Add(new PriceList() { Id = new Guid(), ObjectTypeId = tennisTypeId, Price = 5 });
            }

            var bowlingTypeId = db.ObjectTypes.FirstOrDefault(q => q.Name.Equals("Bowling")).Id;
            if (!db.PriceList.Any(s => s.ObjectTypeId.Equals(bowlingTypeId)))
            {
                objectList.Add(new PriceList() { Id = new Guid(), ObjectTypeId = bowlingTypeId, Price = 7 });
            }

            var billiardsTypeId = db.ObjectTypes.FirstOrDefault(q => q.Name.Equals("Billiards")).Id;
            if (!db.PriceList.Any(s => s.ObjectTypeId.Equals(billiardsTypeId)))
            {
                objectList.Add(new PriceList() { Id = new Guid(), ObjectTypeId = billiardsTypeId, Price = 6 });
            }

            if (objectList.Any())
            {
                await db.PriceList.AddRangeAsync(objectList);
                await db.SaveChangesAsync();
            }
        }
    }
}
