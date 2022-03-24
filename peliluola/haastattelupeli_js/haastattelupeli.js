var pisteet = 0;

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
  
  alert("Kerro hieman itsestäsi. Kuka olet?");
  var lista = [": olen hyvä tyyppi", ": pärjään nälkäpalkalla", ": olen supermyyjä", ": osaan paljon tässä tehtävässä tarvittavia asioita"];
  shuffle(lista);
  console.log(lista);

  for (var i = 0; i < lista.length; i++)
  {
      alert(i+1+lista[i])
  }
  
  var vastaus = prompt("Anna vastauksesi: ");
  if (vastaus == 'olen hyvä tyyppi')
  {
      pisteet++;
      pisteet++;
      console.log("Olen hyvä tyyppi pisteet: " + pisteet);
  }
  else if (vastaus == 'olen supermyyjä')
  {
      pisteet++;
      console.log("Olen supermyyjä pisteet: " + pisteet);
  }

  alert("Miksi haet tähän tehtävään?");
  var lista = [": olen hyvä tyyppi", ": pärjään nälkäpalkalla", ": olen supermyyjä", ": osaan paljon tässä tehtävässä tarvittavia asioita"];
  shuffle(lista);
  console.log(lista);

  for (var i = 0; i < lista.length; i++)
  {
      alert(i+1+lista[i])
  }
  
  var vastaus = prompt("Anna vastauksesi: ");
  if (vastaus == 'olen hyvä tyyppi')
  {
      pisteet++;
      pisteet++;
      console.log("Olen hyvä tyyppi pisteet: " + pisteet);
  }
  else if (vastaus == 'olen supermyyjä')
  {
      pisteet++;
      console.log("Olen supermyyjä pisteet: " + pisteet);
  }

  
  alert("Mitkä ovat vahvuuksiasi?");
  var lista = [": olen hyvä tyyppi", ": pärjään nälkäpalkalla", ": olen supermyyjä", ": osaan paljon tässä tehtävässä tarvittavia asioita"];
  shuffle(lista);
  console.log(lista);

  for (var i = 0; i < lista.length; i++)
  {
      alert(i+1+lista[i])
  }
  
  var vastaus = prompt("Anna vastauksesi: ");
  if (vastaus == 'olen hyvä tyyppi')
  {
      pisteet++;
      pisteet++;
      console.log("Olen hyvä tyyppi pisteet: " + pisteet);
  }
  else if (vastaus == 'olen supermyyjä')
  {
      pisteet++;
      console.log("Olen supermyyjä pisteet: " + pisteet);
  }

  
  alert("Millaisena näet itsesi viiden vuoden kuluttua?");
  var lista = [": olen hyvä tyyppi", ": pärjään nälkäpalkalla", ": olen supermyyjä", ": osaan paljon tässä tehtävässä tarvittavia asioita"];
  shuffle(lista);
  console.log(lista);

  for (var i = 0; i < lista.length; i++)
  {
      alert(i+1+lista[i])
  }
  
  var vastaus = prompt("Anna vastauksesi: ");
  if (vastaus == 'olen hyvä tyyppi')
  {
      pisteet++;
      pisteet++;
      console.log("Olen hyvä tyyppi pisteet: " + pisteet);
  }
  else if (vastaus == 'olen supermyyjä')
  {
      pisteet++;
      console.log("Olen supermyyjä pisteet: " + pisteet);
  }


pisteraja = Math.floor(Math.random()*8+2)
console.log(pisteraja);

if (pisteet >= pisteraja)
{
    alert("Tervetuloa töihin!");
}
else
{
    alert("Meille tuli paljon hyviä hakemuksia ja valinta oli vaikea. Valitettavasti valintamme ei kuitenkaan tällä kertaa kohdistunut sinuun. Muistathan hakea jatkossakin meidän paikkojamme. Kiitos yhteistyöstä.");
}


