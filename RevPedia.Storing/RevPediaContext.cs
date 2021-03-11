using RevPedia.Domain.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System;

namespace RevPedia.Storing
{
   public class RevPediaContext : DbContext
   {
       public DbSet<Trainer> Trainers { get; set; }

       public DbSet<Stack> Stacks { get; set; }

       public RevPediaContext(DbContextOptions<RevPediaContext> options) : base(options) { }

        protected override void OnConfiguring(DbContextOptionsBuilder builder)
        {
            builder.UseSqlServer("");
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            //build entities here
            builder.Entity<Trainer>().HasKey( trainer => trainer.Id);

            builder.Entity<Stack>().HasKey( stack => stack.Id);
        }

        // private void SeedData(ModelBuilder builder)
        // {
        //   builder.Entity<Trainer>().HasData(
        //     new Trainer() { Id = 1, Name = "Fred", StackId = 1, HireDate = new DateTime(2000, 10, 20), AboutMe = "What up my peoples?!"},
        //     new Trainer() { Id = 2, Name = "Mark", StackId = 2, HireDate = new DateTime(2005, 10, 20), AboutMe = "Hello my persons!"},
        //     new Trainer() { Id = 3, Name = "Marielle", StackId = 3, HireDate = new DateTime(2010, 4, 20), AboutMe = "Greetings"},
        //   );
        //   builder.Entity<Stack>().HasData(
        //       new Stack() { Id = 1, Technology = ".NET"},
        //       new Stack() { Id = 2, Technology = "Java"},
        //       new Stack() { Id = 3, Technology = "SalesForce"}
        //   );
   
   }
}