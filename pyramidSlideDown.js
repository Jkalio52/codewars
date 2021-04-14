function longestSlideDown (pyramid) {
  return pyramid.reduceRight((elem, index) => index.map(
    (top, down) => top + Math.max(elem[down], elem[down + 1])
  ))[0];
}
