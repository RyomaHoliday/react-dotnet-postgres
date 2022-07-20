using Microsoft.EntityFrameworkCore;
using System.Diagnostics.CodeAnalysis;

namespace Backend.Models
{
    public class BackendContext : DbContext
    {
        public BackendContext(DbContextOptions<BackendContext> options)
            : base(options)
        {
        }

        public DbSet<User> Users { get; set; } = null!;
    }
}