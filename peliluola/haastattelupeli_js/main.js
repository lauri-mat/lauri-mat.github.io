var randNum;
var randNum2;
var randNum3;

randNum = Math.floor(Math.random()*6+1)
console.log(randNum);

randNum2 = Math.floor(Math.random()*6+1)
console.log(randNum2);

randNum3 = Math.floor(Math.random()*5+1)
console.log(randNum3);


    prompt(randNum, randNum2, randNum3);
    var vastaus1 = prompt("a) Jotta pääsen seuraavaan paikkaan helpommin.\n b) Jotta pääsisin alkuun metsäteollisuuden konsultointialalla.");
    console.log(vastaus1);

    alert("Mitä tiedät yrityksestämme?");
    var vastaus2 = prompt("a) Olette metsäteollisuuden konsulttifirma, joka on alan johtavia Suomessa.\n b) Olette kaivosteollisuuden konsulttifirma, joka on alan johtavia Euroopassa.");       
    console.log(vastaus2);


if (vastaus1 == 'a' || vastaus2 == 'a')
{
    alert("Tervetuloa töihin!");
}
else
{
    alert("Meille tuli paljon hyviä hakemuksia ja valinta oli vaikea. Valitettavasti valintamme ei kuitenkaan tällä kertaa kohdistunut sinuun. Muistathan hakea jatkossakin meidän paikkojamme. Kiitos yhteistyöstä.");
}



