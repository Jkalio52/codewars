/**
# Instructions:

Task
Can you decide whether or not some walls divide a rectangular room into two or more partitions?


Input
width - The width of the room

height - The height of the room

walls - A list of line segments


Output
true if the walls divide the room into two or more partitions, otherwise false.


Examples
oops, please raise an issue about this broken image

oops, please raise an issue about this broken image

oops, please raise an issue about this broken image

Notes:
line segments are given as pairs of points

Tests:
50 fixed tests
100 random tests with up to 8 walls
100 random with up to 15 walls
100 randrom with up to 100 walls
points and walls may exist outside of boundary walls. But any partitions formed outside do NOT count.

the coordinate (width, height) is a corner of the room, and so is (0, 0).

reading the pictures: origin in the top left corner, x axis going to the right, and y axis going down.

tests have up to 100 walls

make sure your arithmetic avoids floating point errors.

there may be duplicate line segments


Enjoy!


Tags: Geometry



# Solution (starting code): 

function hasPartitions(width, height, walls) {
  // TODO: DO IT
}

*/


// The Solution:

/**
 * Determines if walls split a rectangular room into separate partitions.
 * @param {number} width - The width of the room.
 * @param {number} height - The height of the room.
 * @param {Array} walls - List of wall line segments [[p1, p2], ...]
 * @returns {boolean} True if the room is divided, otherwise false.
 */
function hasPartitions(width, height, walls) {
  const EPS = 1e-7;

  // --- SECTION 1: GEOMETRIC UTILITIES ---

  const isBetween = (a, b, c) => c >= Math.min(a, b) - EPS && c <= Math.max(a, b) + EPS;
  const crossProduct = (p1, p2, p3) => (p2.x - p1.x) * (p3.y - p1.y) - (p2.y - p1.y) * (p3.x - p1.x);

  /**
   * Clips a line segment to the room's boundaries using parametric scaling.
   */
  function clipSegment(p1, p2) {
    let x1 = p1.x, y1 = p1.y;
    let x2 = p2.x, y2 = p2.y;

    if (Math.max(x1, x2) < -EPS || Math.min(x1, x2) > width + EPS || 
        Math.max(y1, y2) < -EPS || Math.min(y1, y2) > height + EPS) {
      return null;
    }

    let t0 = 0.0, t1 = 1.0;
    const dx = x2 - x1, dy = y2 - y1;

    const checks = [
      [-dx, x1],            // Left edge
      [dx, width - x1],     // Right edge
      [-dy, y1],            // Top edge
      [dy, height - y1]     // Bottom edge
    ];

    for (const [p, q] of checks) {
      if (Math.abs(p) < EPS) {
        if (q < -EPS) return null;
      } else {
        const t = q / p;
        if (p < 0) {
          if (t > t0) t0 = t;
        } else {
          if (t < t1) t1 = t;
        }
      }
    }

    if (t0 > t1 + EPS) return null;

    return [
      { x: x1 + t0 * dx, y: y1 + t0 * dy },
      { x: x1 + t1 * dx, y: y1 + t1 * dy }
    ];
  }

  /**
   * Checks if two line segments intersect or touch.
   */
  function segmentsIntersect(seg1, seg2) {
    const [p1, p2] = seg1;
    const [p3, p4] = seg2;

    const cp1 = crossProduct(p3, p4, p1);
    const cp2 = crossProduct(p3, p4, p2);
    const cp3 = crossProduct(p1, p2, p3);
    const cp4 = crossProduct(p1, p2, p4);

    if (((cp1 > EPS && cp2 < -EPS) || (cp1 < -EPS && cp2 > EPS)) &&
        ((cp3 > EPS && cp4 < -EPS) || (cp3 < -EPS && cp4 > EPS))) {
      return true;
    }

    if (Math.abs(cp1) <= EPS && isBetween(p3.x, p4.x, p1.x) && isBetween(p3.y, p4.y, p1.y)) return true;
    if (Math.abs(cp2) <= EPS && isBetween(p3.x, p4.x, p2.x) && isBetween(p3.y, p4.y, p2.y)) return true;
    if (Math.abs(cp3) <= EPS && isBetween(p1.x, p2.x, p3.x) && isBetween(p1.y, p2.y, p3.y)) return true;
    if (Math.abs(cp4) <= EPS && isBetween(p1.x, p2.x, p4.x) && isBetween(p1.y, p2.y, p4.y)) return true;

    return false;
  }

  // --- SECTION 2: WALL FILTERING & PACKING ---

  const validWalls = [];
  for (const w of walls) {
    // FIX 1: Passed individual endpoints of the wall segment array explicitly
    const clipped = clipSegment(w[0], w[1]); 
    if (clipped) {
      // FIX 2: Fixed property indexing syntax to evaluate real distance differences
      const dist = Math.hypot(clipped[0].x - clipped[1].x, clipped[0].y - clipped[1].y);
      if (dist > EPS) {
        validWalls.push(clipped);
      }
    }
  }

  const n = validWalls.length;
  if (n === 0) return false;

  // --- SECTION 3: DISJOINT SET UNION (DSU) UNIFICATION ---

  const parent = Array.from({ length: n }, (_, i) => i);
  function find(i) {
    if (parent[i] === i) return i;
    parent[i] = find(parent[i]);
    return parent[i];
  }
  function union(i, j) {
    const rootI = find(i);
    const rootJ = find(j);
    if (rootI !== rootJ) parent[rootI] = rootJ;
  }

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (segmentsIntersect(validWalls[i], validWalls[j])) {
        union(i, j);
      }
    }
  }

  // --- SECTION 4: CLOCKWISE PERIMETER POSITION MAPPING ---

  /**
   * Translates a 2D boundary coordinate into a linear distance tracking 
   * clockwise around the room perimeter starting at the top-left (0,0).
   */
  function getPerimeterDistance(p) {
    if (Math.abs(p.y) <= EPS) return p.x;                        
    if (Math.abs(p.x - width) <= EPS) return width + p.y;         
    if (Math.abs(p.y - height) <= EPS) return width + height + (width - p.x); 
    if (Math.abs(p.x) <= EPS) return width + height + width + (height - p.y); 
    return -1;
  }

  const componentPointsMap = new Map();

  for (let i = 0; i < n; i++) {
    const root = find(i);
    if (!componentPointsMap.has(root)) {
      componentPointsMap.set(root, []);
    }
    const list = componentPointsMap.get(root);

    for (const pt of validWalls[i]) {
      const dist = getPerimeterDistance(pt);
      if (dist >= 0) {
        if (!list.some(existingDist => Math.abs(existingDist - dist) < EPS)) {
          list.push(dist);
        }
      }
    }
  }

  // --- SECTION 5: GEOMETRIC PARTITION EVALUATION ---

  const totalPerimeter = 2 * (width + height);

  for (const [root, distances] of componentPointsMap.entries()) {
    if (distances.length < 2) continue;

    distances.sort((a, b) => a - b);

    for (let k = 0; k < distances.length; k++) {
      const current = distances[k];
      const next = distances[(k + 1) % distances.length];
      
      let gap = next - current;
      if (gap < -EPS) gap += totalPerimeter; 

      if (gap > EPS && (totalPerimeter - gap) > EPS) {
        return true;
      }
    }
  }

  return false;
}
