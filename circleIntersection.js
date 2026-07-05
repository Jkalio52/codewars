/**
# Instructions: 

Task:
Given two congruent circles a and b of radius r, return the area of their intersection rounded down to the nearest integer.

Code Limit:
Javascript: Less than 94 characters.

Python: Less than 128 characters.

Example
For c1 = [0, 0], c2 = [7, 0] and r = 5,

the output should be 14.

Tags: Puzzles Restricted 


Solution (starting code): 
circleIntersection=(a,b,r)=>//coding and coding.. shorter and more shorter..  good luck! ;-) 



Sample Tests: 
const Test = require('@codewars/test-compat');

describe("Basic Tests", function(){
it("It should works for basic tests.", function(){

Test.assertEquals(circleIntersection([0, 0],[7, 0],5),14)

Test.assertEquals(circleIntersection([0, 0],[0, 10],10),122)

Test.assertEquals(circleIntersection([5, 6],[5, 6],3),28)

Test.assertEquals(circleIntersection([-5, 0],[5, 0],3),0)

Test.assertEquals(circleIntersection([10, 20],[-5, -15],20),15)

Test.assertEquals(circleIntersection([-7, 13],[-25, -5],17),132)

Test.assertEquals(circleIntersection([-20, -4],[-40, 29],7),0)

Test.assertEquals(circleIntersection([38, -18],[46, -29],10),64)

Test.assertEquals(circleIntersection([-29, 33],[-8, 13],15),5)

Test.assertEquals(circleIntersection([-12, 20],[43, -49],23),0)

})})
*/
