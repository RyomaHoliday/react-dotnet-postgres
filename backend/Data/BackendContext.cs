using Microsoft.EntityFrameworkCore;
using System.Diagnostics.CodeAnalysis;
using Backend.Models;

namespace Backend.Data
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