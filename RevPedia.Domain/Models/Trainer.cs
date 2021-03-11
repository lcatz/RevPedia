using System;
using System.Collections.Generic;

namespace RevPedia.Domain.Models
{
    public class Trainer
    {
        
        public long Id { get; set; }
        public string Name { get; set; }

        public long StackId { get; set; }

        public DateTime HireDate { get; set; }

        public string AboutMe { get; set; }
        
    }
}