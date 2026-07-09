#
# Instructions: 

# Task:
# Given two congruent circles a and b of radius r, return the area of their intersection rounded down to the nearest integer. 

# Code Limit:
# JavaScript: Less than 94 characters.

# Python: Less than 128 characters.

# Example
# For c1 = [0, 0], c2 = [7, 0] and r = 5,

# the output should be 14.

# Tags: Puzzles Restricted 


# Solution (starting code): 
# circleIntersection=(a,b,r)=>//coding and coding.. shorter and more shorter..  good luck! ;-) 

code = "circleIntersection=(a,b,r)=>([[x,y],[m,n]]=[a,b],X=Math.hypot(x-m,y-n)/2/r)>1?0:r*r*(2*Math.acos(X)-2*X*Math.sqrt(1-X*X))|0"
print(len(code))
