using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore;

namespace FitnationAPI.Data
{
    public class ApplicationDbContext : IdentityDbContext
    {
        public DbSet<Reservation> Reservations { get; set; }
        public DbSet<ReservationObject> ReservationObjects { get; set; }
        public DbSet<ObjectType> ObjectTypes { get; set; }
        public DbSet<PriceList> PriceList { get; set; }
        public DbSet<TimeRange> TimeRange { get; set; }

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
    }
}
