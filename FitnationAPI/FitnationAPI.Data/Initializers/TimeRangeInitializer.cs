using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FitnationAPI.Data.Initializers
{
    public class TimeRangeInitializer
    {
        public static async Task InitializeAsync(ApplicationDbContext db)
        {
            var objectList = new List<TimeRange>();

            if (!db.TimeRange.Any(s => s.Time == "9:00 am - 10:00 am"))
            {
                objectList.Add(new TimeRange() { Id = new Guid(), Time = "9:00 am - 10:00 am" });
            }
            if (!db.TimeRange.Any(s => s.Time == "10:00 am - 11:00 am"))
            {
                objectList.Add(new TimeRange() { Id = new Guid(), Time = "10:00 am - 11:00 am" });
            }
            if (!db.TimeRange.Any(s => s.Time == "11:00 am - 12:00 am"))
            {
                objectList.Add(new TimeRange() { Id = new Guid(), Time = "11:00 am - 12:00 am" });
            }
            if (!db.TimeRange.Any(s => s.Time == "12:00 am - 1:00 pm"))
            {
                objectList.Add(new TimeRange() { Id = new Guid(), Time = "12:00 am - 1:00 pm" });
            }
            if (!db.TimeRange.Any(s => s.Time == "1:00 pm - 2:00 pm"))
            {
                objectList.Add(new TimeRange() { Id = new Guid(), Time = "1:00 pm - 2:00 pm" });
            }
            if (!db.TimeRange.Any(s => s.Time == "2:00 pm - 3:00 pm"))
            {
                objectList.Add(new TimeRange() { Id = new Guid(), Time = "2:00 pm - 3:00 pm" });
            }
            if (!db.TimeRange.Any(s => s.Time == "3:00 pm - 4:00 pm"))
            {
                objectList.Add(new TimeRange() { Id = new Guid(), Time = "3:00 pm - 4:00 pm" });
            }
            if (!db.TimeRange.Any(s => s.Time == "4:00 pm - 5:00 pm"))
            {
                objectList.Add(new TimeRange() { Id = new Guid(), Time = "4:00 pm - 5:00 pm" });
            }
            if (!db.TimeRange.Any(s => s.Time == "5:00 pm - 6:00 pm"))
            {
                objectList.Add(new TimeRange() { Id = new Guid(), Time = "5:00 pm - 6:00 pm" });
            }
            if (!db.TimeRange.Any(s => s.Time == "6:00 pm - 7:00 pm"))
            {
                objectList.Add(new TimeRange() { Id = new Guid(), Time = "6:00 pm - 7:00 pm" });
            }

            if (objectList.Any())
            {
                await db.TimeRange.AddRangeAsync(objectList);
                await db.SaveChangesAsync();
            }
        }
    }
}
