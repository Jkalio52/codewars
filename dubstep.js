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
