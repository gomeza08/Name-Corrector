function handleText(textNode) {
  var v = textNode.nodeValue;

  var bernieNames = ["Sandy Amberg", "Angie Sanders", "Ambly Andberg", "Bergly Sanders", "Colonel Sanders", "Sal Amanders"];

  v = v.replace(/\bBernie Sanders\b/g, bernieNames[Math.floor(Math.random() * 6)]);

  var firstnamelist = ["Bumblebee", "Bandersnatch", "Broccoli", "Rinkydink", "Bombadil", "Boilerdang", "Bandicoot", "Fragglerock", "Muffintop", "Congleton", "Buffalo", "Benadryl", "Butterfree", "Burberry", "Whippersnatch", "Buttermilk", "Beezlebub", "Budapest", "Boilerdang", "Blubberwhale", "Bumberstump", "Bulbasaur", "Liverswort", "Bodybuild", "Johnnycash", "Bendydick", "Burgerking", "Bonaparte", "Bunsenburner", "Billiardball", "Bukkake", "Baseballmitt", "Blubberbutt", "Baseballbat", "Rumblesack", "Barister", "Danglerack", "Rinkydink", "Bombadil", "Honkytonk", "Billyray", "Bumbleshack", "Snorkeldink", "Anglerfish", "Beetlejuice", "Bedlington", "Bandicoot", "Boobytrap", "Blenderdick", "Bentobox", "Anallube", "Pallettown", "Wimbledon", "Buttercup", "Blasphemy", "Syphilis", "Snorkeldink", "Brandenburg", "Barbituate", "Snozzlebert", "Tiddleywomp", "Bouillabaisse", "Wellington", "Benetton", "Bendandsnap", "Timothy", "Brewery", "Bentobox", "Brandybuck", "Benjamin", "Buckminster", "Bourgeoisie", "Bakery", "Oscarbait", "Buckyball", "Bourgeoisie", "Burlington", "Buckingham", "Barnoldswick"];

  var lastnamelist = ["Coddleswort", "Crumplesack", "Curdlesnoot", "Calldispatch", "Humperdinck", "Rivendell", "Cuttlefish", "Lingerie", "Vegemite", "Ampersand", "Cumberbund", "Candycrush", "Clombyclomp", "Cragglethatch", "Nottinghill", "Cabbagepatch", "Camouflage", "Creamsicle", "Curdlemilk", "Upperclass", "Frumblesnatch", "Crumplehorn", "Talisman", "Candlestick", "Chesterfield", "Bumbersplat", "Scratchnsniff", "Snugglesnatch", "Charizard", "Carrotstick", "Cumbercooch", "Crackerjack", "Crucifix", "Cuckatoo", "Cockletit", "Collywog", "Capncrunch", "Covergirl", "Cumbersnatch", "Countryside", "Coggleswort", "Splishnsplash", "Copperwire", "Animorph", "Curdledmilk", "Cheddarcheese", "Cottagecheese", "Crumplehorn", "Snickersbar", "Banglesnatch", "Stinkyrash", "Cameltoe", "Chickenbroth", "Concubine", "Candygram", "Moldyspore", "Chuckecheese", "Cankersore", "Crimpysnitch", "Wafflesmack", "Chowderpants", "Toodlesnoot", "Clavichord", "Cuckooclock", "Oxfordshire", "Cumbersome", "Chickenstrips", "Battleship", "Commonwealth", "Cunningsnatch", "Custardbath", "Kryptonite", "Curdlesnoot", "Cummerbund", "Crackersprout", "Crumplebutt", "Colonist", "Cogglesnatch"];


  var fullnamelist = ["Wimbledon Tennismatch", "Rinkydink Curdlesnoot", "Butawhiteboy Cantbekhan", "Benadryl Claritin", "Bombadil Rivendell", "Biblical Concubine", "Butawhiteboy Cantbekhan", "Syphilis Cankersore", "Butawhiteboy Cantbekhan", "Benedict Timothy Carlton Cumberbatch", "Buckminster Fullerene", "Bourgeoisie Capitalist"];
  var random1 = parseInt(Math.random() * firstnamelist.length, 10);
  var random2 = parseInt(Math.random() * lastnamelist.length, 10);
  var randomfull = parseInt(Math.random() * fullnamelist.length, 10);

  var name = firstnamelist[random1] + " " + lastnamelist[random2];
  var fullname = fullnamelist[randomfull];

  var numberroll = Math.floor(Math.random() * 10) + 1;
  var finalname = "";
  if (numberroll > 9) {
    finalname = fullname;
  } else {
    finalname = name;
  }

  v = v.replace(/\bBenedict Cumberbatch\b/g, finalname);

  textNode.nodeValue = v;
}

function walk(node) {
  var child, next;

  switch (node.nodeType) {
  case 1:  // Element
  case 9:  // Document
  case 11: // Document fragment
    child = node.firstChild;
    while (child) {
      next = child.nextSibling;
      walk(child);
      child = next;
    }
    break;

  case 3: // Text node
    handleText(node);
    break;
  }
}

walk(document.body);