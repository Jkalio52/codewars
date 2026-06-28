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
Oops, please raise an issue about this broken image

oops, please raise an issue about this broken image

oops, please raise an issue about this broken image

Notes:
line segments are given as pairs of points

Tests:
50 fixed tests
100 random tests with up to 8 walls
100 random with up to 15 walls
100 random with up to 100 walls
points and walls may exist outside of boundary walls. But any partitions formed outside do NOT count.

The coordinate (width, height) is a corner of the room, and so is (0, 0).

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

  // --- SECTION 1: GEOMETRIC MATH HELPER UTILITIES ---
  const samePoint = (p1, p2) => Math.abs(p1.x - p2.x) < EPS && Math.abs(p1.y - p2.y) < EPS;

  // Clips a wall segment so that it resides completely inside the room bounds
  function clipSegment(p1, p2) {
    let x1 = p1.x, y1 = p1.y, x2 = p2.x, y2 = p2.y;
    if (Math.max(x1, x2) < -EPS || Math.min(x1, x2) > width + EPS || 
        Math.max(y1, y2) < -EPS || Math.min(y1, y2) > height + EPS) return null;

    let t0 = 0.0, t1 = 1.0;
    const dx = x2 - x1, dy = y2 - y1;
    const checks = [[-dx, x1], [dx, width - x1], [-dy, y1], [dy, height - y1]];

    for (const [p, q] of checks) {
      if (Math.abs(p) < EPS) {
        if (q < -EPS) return null;
      } else {
        const t = q / p;
        if (p < 0) { if (t > t0) t0 = t; } 
        else { if (t < t1) t1 = t; }
      }
    }
    if (t0 > t1 + EPS) return null;
    return [{ x: x1 + t0 * dx, y: y1 + t0 * dy }, { x: x1 + t1 * dx, y: y1 + t1 * dy }];
  }

  // Locates the precise coordinates where two segment paths intersect
  function getIntersection(seg1, seg2) {
    const [p1, p2] = seg1;
    const [p3, p4] = seg2;
    const d = (p2.x - p1.x) * (p4.y - p3.y) - (p2.y - p1.y) * (p4.x - p3.x);
    if (Math.abs(d) < EPS) return null;

    const u = ((p3.x - p1.x) * (p4.y - p3.y) - (p3.y - p1.y) * (p4.x - p3.x)) / d;
    const v = ((p3.x - p1.x) * (p2.y - p1.y) - (p3.y - p1.y) * (p2.x - p1.x)) / d;

    if (u >= -EPS && u <= 1 + EPS && v >= -EPS && v <= 1 + EPS) {
      return { x: p1.x + u * (p2.x - p1.x), y: p1.y + u * (p2.y - p1.y) };
    }
    return null;
  }

  // Verifies if a single vertex point rests directly along a line segment vector
  function isPointOnSegment(pt, seg) {
    const [p1, p2] = seg;
    const cross = (p2.x - p1.x) * (pt.y - p1.y) - (p2.y - p1.y) * (pt.x - p1.x);
    if (Math.abs(cross) > EPS) return false;
    return pt.x >= Math.min(p1.x, p2.x) - EPS && pt.x <= Math.max(p1.x, p2.x) + EPS &&
           pt.y >= Math.min(p1.y, p2.y) - EPS && pt.y <= Math.max(p1.y, p2.y) + EPS;
  }

  // --- SECTION 2: GRAPH SEGMENT POPULATION ---
  const segments = [
    [{ x: 0, y: 0 }, { x: width, y: 0 }],
    [{ x: width, y: 0 }, { x: width, y: height }],
    [{ x: width, y: height }, { x: 0, y: height }],
    [{ x: 0, y: height }, { x: 0, y: 0 }]
  ];

  for (const w of walls) {
    const clipped = clipSegment(w[0], w[1]);
    if (clipped) {
      if (Math.hypot(clipped[0].x - clipped[1].x, clipped[0].y - clipped[1].y) > EPS) {
        segments.push(clipped);
      }
    }
  }

  // Find all structural vertex intersection points
  const points = [];
  for (let i = 0; i < segments.length; i++) {
    for (let j = i + 1; j < segments.length; j++) {
      const pt = getIntersection(segments[i], segments[j]);
      if (pt) points.push(pt);
    }
    points.push(segments[i][0], segments[i][1]);
  }

  // Filter out any duplicate points within the precision tolerance threshold
  const uniquePoints = [];
  for (const p of points) {
    if (!uniquePoints.some(u => samePoint(p, u))) {
      uniquePoints.push(p);
    }
  }

  // --- SECTION 3: ATOMIC EDGE SUBDIVISION ---
  const edgesMap = new Set();

  for (const seg of segments) {
    // Isolate every unique point resting along the path of this specific segment
    const onSegment = uniquePoints.filter(p => isPointOnSegment(p, seg));

    // Sort the points sequentially along the direction of the vector line
    if (Math.abs(seg[0].x - seg[1].x) > Math.abs(seg[0].y - seg[1].y)) {
      onSegment.sort((a, b) => a.x - b.x);
    } else {
      onSegment.sort((a, b) => a.y - b.y);
    }

    // Connect adjacent ordered points on the line together into atomic non-overlapping edges
    for (let i = 0; i < onSegment.length - 1; i++) {
      const pA = onSegment[i];
      const pB = onSegment[i + 1];

      if (!samePoint(pA, pB)) {
        const idxA = uniquePoints.findIndex(u => samePoint(pA, u));
        const idxB = uniquePoints.findIndex(u => samePoint(pB, u));
        
        // Save the edge configuration using an ordered string identity to ensure strict uniqueness
        const key = idxA < idxB ? `${idxA}-${idxB}` : `${idxB}-${idxA}`;
        edgesMap.add(key);
      }
    }
  }

  // --- SECTION 4: DISJOINT SET UNION (DSU) NETWORK MAPPING ---
  const V = uniquePoints.length;
  const E = edgesMap.size;

  const parent = Array.from({ length: V }, (_, i) => i);
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

  for (const edgeStr of edgesMap) {
    const [u, v] = edgeStr.split('-').map(Number);
    union(u, v);
  }

  // Count the total number of disconnected structural component networks
  const uniqueRoots = new Set();
  for (let i = 0; i < V; i++) {
    uniqueRoots.add(find(i));
  }
  const C = uniqueRoots.size;

  // --- SECTION 5: EULER PLANAR FACE VALIDATION ---
  // Calculates total separate faces inside + outside: F = E - V + 1 + C
  const totalFaces = E - V + 1 + C;

  // An open room with 0 walls has 2 faces (1 outside, 1 inside).
  // If totalFaces is greater than 2, it is guaranteed to have 2 or more partitions.
  return totalFaces > 2;
}

