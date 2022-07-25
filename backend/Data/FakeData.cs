using System;
using System.Collections.Generic;
using System.Linq;
using Bogus;
using Bogus.Extensions;
using Microsoft.EntityFrameworkCore;
using Backend.Models;

namespace Backend.Data
{
    class FakeData
    {
        public static List<User> Users = new List<User>();

        public static void Initialize(BackendContext context)
        {
            if (context.Users.Any())
            {
                return;
            }
            UserInit(10);
            context.Users.AddRange(Users);
            context.SaveChanges();
        }
        public static void UserInit(int count)
        {
            Randomizer.Seed = new Random();
            var testuser = new Faker<User>("ja")
                .RuleFor(u => u.Id, f => 0)
                .RuleFor(u => u.Name, (f, u) => f.Name.LastName() + " " + f.Name.FirstName());
            var users = testuser.Generate(count);
            FakeData.Users.AddRange(users);
        }
    }
}