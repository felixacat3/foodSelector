using FoodSelector.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace FoodSelector.Controllers
{
    public class FoodVenueController : ApiController
    {
        // GET api/<controller>
        public IEnumerable<VMFoodVenue> Get()
        {

            var foodVenues = new VMFoodVenue();

            return foodVenues.GetVenues();
        }

        // GET api/<controller>/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<controller>
        public void Post([FromBody]VMFoodVenue venue)
        {
            venue.createVenue();
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}