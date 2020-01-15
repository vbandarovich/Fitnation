using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FitnationAPI.Data.Initializers
{
    public class ReservationObjectsInitializer
    {
        public static async Task InitializeAsync(ApplicationDbContext db)
        {
            var objectList = new List<ReservationObject>();

            var gymTypeId = db.ObjectTypes.FirstOrDefault(q => q.Name.Equals("Gym")).Id;
            if (!db.ReservationObjects.Any(s => s.ObjectTypeId.Equals(gymTypeId) && s.Name == "Gym 1"))
            { 
                objectList.Add(new ReservationObject() { Id = new Guid(), ObjectTypeId = gymTypeId, Name = "Gym 1" });
            }

            var tennisTypeId = db.ObjectTypes.FirstOrDefault(q => q.Name.Equals("Tennis")).Id;
            if (!db.ReservationObjects.Any(s => s.ObjectTypeId.Equals(tennisTypeId) && s.Name == "Table 1"))
            {
                objectList.Add(new ReservationObject() { Id = new Guid(), ObjectTypeId = tennisTypeId, Name = "Table 1" });
            }
            if (!db.ReservationObjects.Any(s => s.ObjectTypeId.Equals(tennisTypeId) && s.Name == "Table 2"))
            {
                objectList.Add(new ReservationObject() { Id = new Guid(), ObjectTypeId = tennisTypeId, Name = "Table 2" });
            }
            if (!db.ReservationObjects.Any(s => s.ObjectTypeId.Equals(tennisTypeId) && s.Name == "Table 3"))
            {
                objectList.Add(new ReservationObject() { Id = new Guid(), ObjectTypeId = tennisTypeId, Name = "Table 3" });
            }
            if (!db.ReservationObjects.Any(s => s.ObjectTypeId.Equals(tennisTypeId) && s.Name == "Table 4"))
            {
                objectList.Add(new ReservationObject() { Id = new Guid(), ObjectTypeId = tennisTypeId, Name = "Table 4" });
            }
            if (!db.ReservationObjects.Any(s => s.ObjectTypeId.Equals(tennisTypeId) && s.Name == "Table 5"))
            {
                objectList.Add(new ReservationObject() { Id = new Guid(), ObjectTypeId = tennisTypeId, Name = "Table 5" });
            }
            if (!db.ReservationObjects.Any(s => s.ObjectTypeId.Equals(tennisTypeId) && s.Name == "Table 6"))
            {
                objectList.Add(new ReservationObject() { Id = new Guid(), ObjectTypeId = tennisTypeId, Name = "Table 6" });
            }

            var bowlingTypeId = db.ObjectTypes.FirstOrDefault(q => q.Name.Equals("Bowling")).Id;
            if (!db.ReservationObjects.Any(s => s.ObjectTypeId.Equals(bowlingTypeId) && s.Name == "Bowling Alley 1"))
            {
                objectList.Add(new ReservationObject() { Id = new Guid(), ObjectTypeId = bowlingTypeId, Name = "Bowling Alley 1" });
            }
            if (!db.ReservationObjects.Any(s => s.ObjectTypeId.Equals(bowlingTypeId) && s.Name == "Bowling Alley 2"))
            {
                objectList.Add(new ReservationObject() { Id = new Guid(), ObjectTypeId = bowlingTypeId, Name = "Bowling Alley 2" });
            }
            if (!db.ReservationObjects.Any(s => s.ObjectTypeId.Equals(bowlingTypeId) && s.Name == "Bowling Alley 3"))
            {
                objectList.Add(new ReservationObject() { Id = new Guid(), ObjectTypeId = bowlingTypeId, Name = "Bowling Alley 3" });
            }
            if (!db.ReservationObjects.Any(s => s.ObjectTypeId.Equals(bowlingTypeId) && s.Name == "Bowling Alley 4"))
            {
                objectList.Add(new ReservationObject() { Id = new Guid(), ObjectTypeId = bowlingTypeId, Name = "Bowling Alley 4" });
            }
            if (!db.ReservationObjects.Any(s => s.ObjectTypeId.Equals(bowlingTypeId) && s.Name == "Bowling Alley 5"))
            {
                objectList.Add(new ReservationObject() { Id = new Guid(), ObjectTypeId = bowlingTypeId, Name = "Bowling Alley 5" });
            }

            var billiardsTypeId = db.ObjectTypes.FirstOrDefault(q => q.Name.Equals("Billiards")).Id;
            if (!db.ReservationObjects.Any(s => s.ObjectTypeId.Equals(billiardsTypeId) && s.Name == "Table 1"))
            {
                objectList.Add(new ReservationObject() { Id = new Guid(), ObjectTypeId = billiardsTypeId, Name = "Table 1" });
            }
            if (!db.ReservationObjects.Any(s => s.ObjectTypeId.Equals(billiardsTypeId) && s.Name == "Table 2"))
            {
                objectList.Add(new ReservationObject() { Id = new Guid(), ObjectTypeId = billiardsTypeId, Name = "Table 2" });
            }
            if (!db.ReservationObjects.Any(s => s.ObjectTypeId.Equals(billiardsTypeId) && s.Name == "Table 3"))
            {
                objectList.Add(new ReservationObject() { Id = new Guid(), ObjectTypeId = billiardsTypeId, Name = "Table 3" });
            }
            if (!db.ReservationObjects.Any(s => s.ObjectTypeId.Equals(billiardsTypeId) && s.Name == "Table 4"))
            {
                objectList.Add(new ReservationObject() { Id = new Guid(), ObjectTypeId = billiardsTypeId, Name = "Table 4" });
            }
            if (!db.ReservationObjects.Any(s => s.ObjectTypeId.Equals(billiardsTypeId) && s.Name == "Table 5"))
            {
                objectList.Add(new ReservationObject() { Id = new Guid(), ObjectTypeId = billiardsTypeId, Name = "Table 5" });
            }

            if (objectList.Any())
            {
                await db.ReservationObjects.AddRangeAsync(objectList);
                await db.SaveChangesAsync();
            }
        }
    }
}
