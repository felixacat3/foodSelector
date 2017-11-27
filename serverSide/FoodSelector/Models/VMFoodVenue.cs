using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace FoodSelector.Models
{
    public class MongoConfigs
    {
        public const string DOCUMENT = "Venues";
    }
    public class VMFoodVenue
    {
        public string Name { get; set; }
        public ExperienceType Experience { get; set; }
        [Range(1,5)]
        public int PriceRating { get; set; }
        [Range(1,5)]
        public int NutritionalRating { get; set; }
        public bool WalkingDistance { get; set; }
        public int ETA { get; set; }
        public LocationAddress Address { get; set; }


        public List<VMFoodVenue> GetVenues()
        {
            var venues = new List<VMFoodVenue>();

           venues = mongoConnect(MongoConfigs.DOCUMENT).Find(x => x.Name == Name).ToList<VMFoodVenue>();

            return venues;
        }
        public VMFoodVenue getVenue()
        {
            var venue = new VMFoodVenue();
            return venue;
        }
        public void createVenue()
        {
            mongoConnect(MongoConfigs.DOCUMENT).InsertOne(this);
        }
       
        public void updateVenue()
        {

        }

        public void deleteVenue()
        {

        }

        private IMongoCollection<VMFoodVenue> mongoConnect (string document)
        {
            var client = new MongoClient();
            var database = client.GetDatabase("local");
            return database.GetCollection<VMFoodVenue>(document);
        } 
    }
}