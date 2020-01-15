using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FitnationAPI.Data
{
    public class ObjectTypesInitializer
    {
        public static async Task InitializeAsync(ApplicationDbContext db)
        {
            var objectList = new List<ObjectType>();

            if (!db.ObjectTypes.Any(s => s.Name == "Gym"))
            {
                objectList.Add(new ObjectType() {Id = new Guid(), Name = "Gym"});
            }
            if (!db.ObjectTypes.Any(s => s.Name == "Tennis"))
            {
                objectList.Add(new ObjectType() { Id = new Guid(), Name = "Tennis" });
            }
            if (!db.ObjectTypes.Any(s => s.Name == "Bowling"))
            {
                objectList.Add(new ObjectType() { Id = new Guid(), Name = "Bowling" });
            }
            if (!db.ObjectTypes.Any(s => s.Name == "Billiards"))
            {
                objectList.Add(new ObjectType() { Id = new Guid(), Name = "Billiards" });
            }

            if (objectList.Any())
            {
                await db.ObjectTypes.AddRangeAsync(objectList);
                await db.SaveChangesAsync();
            }
        }
    }
}
