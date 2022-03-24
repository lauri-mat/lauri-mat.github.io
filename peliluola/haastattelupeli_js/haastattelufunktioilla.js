var vastaus = "olen supermyyjä";

var vastausPisteet = function(pisteet, x)
{
        pisteet = x*pisteet;
        return pisteet;
} 


if (vastaus === 'olen hyvä tyyppi')
{
    vastausPisteet(1, 2);
    alert('Pisteet, olen hyvä tyyppi: ' + vastausPisteet(1, 2));
}
else if (vastaus == 'olen supermyyjä')
{
    alert('Pisteet, olen supermyyjä: ' + vastausPisteet(1,1));
}

