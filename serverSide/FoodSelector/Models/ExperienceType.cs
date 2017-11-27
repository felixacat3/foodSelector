using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace FoodSelector.Models
{
    public class ExperienceType
    {
        public List<CuisineType> Cuisines { get; set; }
        public List <Fare> Fares { get; set; }
        public List <DiningStyle> DiningStyle { get; set; }
        [Range(0,10)]
        public int Atmosphere { get; set; }
        [Range(0,10)]
        public int CleanlinessRating { get; set; }


    }


   public enum CuisineType
    {
       Mexican,
       American,
       TexMex,
       Italian,
       Asian,
       Seafood,
       European,
       Brazilian,
       Hawaiian,
       Chinese,
       Indian,
       Australian,

    }

    public enum Fare
    {
        Burger,
        Sandwhich,
        BBQ,
        Pasta,
        Sushi,
        Sub,
        Pizza,
        Soup,
        Health,
        Salad,
        Fish,
        Oyster,
        Bar,
        FingerFood,
        FriedChicken,
    }

    public enum DiningStyle
    {
        FastFood,
        Formal,
        Casual,
        QuickService,
        Restaurant,
       


    }
}