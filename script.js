/* deleting object values, deleting a property from an object, 'delete. Objectname.property' 
*/

let country = {
  name: "england",
  population: 55.98,
  sea: "yes",
  island: "yes",
  language:
    bio = function () {
      console.log (this.name + "is a country with" + this.population + "people");

    }


};

/* using the delete keyword will delete both, the key and the value */

delete country.name;
console.log (country.name);