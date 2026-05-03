/**
Background:
Wikidata is a public database with over a hundred million entries in it. You can find almost anything documented, from scientific articles to new species scientists have found.

To help developers use the site better, the website provides accessible JSON data for every submitted item. Today, you are going to program something that can read that data.

The link below leads to the page explaining how to access the corresponding JSON address of a specific Wikidata item. Although the direct URL to the data will be provided (example), you might find it helpful to see the stuff your collecting from.

https://www.wikidata.org/wiki/Wikidata:Data_access

Now let's move on to the actual scraping.

What to do:
Take a look at this labeled section of a Wikidata page:

alt caption: Identifier = Q42, Label = Douglas Adams, Description = English Writer and Humorist

All of this information can be found on the given JSON pages (link in the previous section). Your function should return a dictionary with the English (en) values of the Identifier, Label, and Description. The dictionary should have the keys "ID", "LABEL", and "DESCRIPTION", respectively.

Given the URL to our example, you should return:

{
  'ID': 'Q42',
  'LABEL': 'Douglas Adams',
  'DESCRIPTION': 'British science fiction writer and humorist (1952–2001)'
}
Be careful. Some information won't always be available in English, and some might not have a value associated with any language. That's because Wikidata only requires you to give one label or description. If the en label or description aren't included, put "No Label" or "No Description". Please be careful you are getting values from the "en" value, and not localized english versions such as "en-uk" or en-ca.

If you were given the URL to this unhelpful entry, you would return the following:

{
  "ID": "Q97226458",
  "LABEL": "No Label",
  "DESCRIPTION": "No Description"
}
That should be it for instructions. If you have any more questions, check out the section below, or ask them in the Discourse (after you read the section below please.)

Good Luck!
*/

async function wikidataScraper(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();

    // The data is nested under "entities", using the ID as the key
    const entityId = Object.keys(data.entities)[0];
    const entity = data.entities[entityId];

    return {
      id: entityId,
      // Access strictly the 'en' property, defaulting to the fallback strings
      label: entity.labels?.en?.value || "No Label",
      description: entity.descriptions?.en?.value || "No Description"
    };
  } catch (error) {
    // In a real scraper, you might want to handle network errors specifically
    return null;
  }
}

