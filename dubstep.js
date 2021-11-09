function songDecoder(song){
  // At its simplest form...
  return (
	song
	  // First, split strings into array
	  .split('WUB')
      	  // Second, remove empty strings, with (' ')
	  .filter(Boolean)
	  // And finally, join the words from the array into a string
	  .join(' ')
  );
}




// Nice, very short code, simple and easy to read...
function songDecoder(song){
  return song.replace(/(WUB)+/g," ").trim()
}


// with filter method...
function songDecoder(song){
  return song.split('WUB').filter(Boolean).join(' ');
}
