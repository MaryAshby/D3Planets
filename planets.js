
/*A1*/

var names = ["Mercury", "Venus", "Earth"]
d3.select("#A1")
  .append("p")
  .text(names)

console.log (names)

/*A2*/
 
d3.select("#A2")
  .append("p")
  .text(names[0])
 .append("p")
  .text(names[1])
 .append("p")
  .text(names[2])


/* B1 */

d3.json("planets.json")
.then
(
  function(data)
{
    console.log(data)
})

/*B3 - what happened to B2?!?
d3.select("B3")
  .append("image")
  .image("earth.jpg")*/

/*d3.select("B3").append("img").attr("earth.jpg", "jupiter.jpg", "mars.jpg", "mercury.jpg", "neptune.jpg", "saturn.jpg")*/

/*Create a list with all the names of the planets. An order list to be more precise.  Bind the data to the li elements.*/
/*B4*/

var planets = ["mercury","Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto"];
var ol=d3.select("B4").append("ol");
ol.selectAll("li")
  .data(planets)
  .enter()
  .append("li")
  .html(String);

          
/*
var makePlanet = function(name,img,distance,radius,density,moons)
{
    return {name,img,distance,radius,density,moons};
}


var planets = [
makePlanet("Mercury","img/mercury.jpg",
.38,.38,5.43,0),
makePlanet("Venus","img/venus.jpg",
.72,.94,5.24,0),
makePlanet("Earth","img/earth.jpg",
1,1,5.52,1),
makePlanet("Mars","img/mars.jpg",
1.52,.53,3.94,2),
makePlanet("Jupiter","img/jupiter.jpg",
5.2,11.21,1.33,79),
makePlanet("Saturn","img/saturn.jpg",
9.53,9.45,.7,62),
makePlanet("Uranus","img/uranus.jpg",
19.19,4.0,1.3,27),
makePlanet("Neptune","img/neptune.jpg",
30,3.88,1.76,14),
];

console.log(JSON.stringify(planets,null,2))

*/




                      
