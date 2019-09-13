// Kenny Nathalia. Opdracht: Pizza Calculator
alert('Welkom bij pizzeria DaVinci');
alert('Hier heb je onze prijzen lijst')
alert('De kleine pizza`s zijn €5,99')
alert('De medium pizza`s zijn €8,99')
alert('De grote pizza`s zijn €11,99')

const smallAmount = Number(prompt("Hoeveel kleine pizza`s zou u willen hebben?"))
const mediumAmount = Number(prompt("Hoeveel medium pizza`s zou u willen hebben?"))
const largeAmount = Number(prompt("Hoeveel large pizza`s zou u willen hebben?"))

const priceSmallAmount= 5.99;
const priceMediumAmount = 8.99;
const priceLargeAmount= 11.99;

var totalPriceSmall = smallAmount * priceSmallAmount
var totalPriceMedium = mediumAmount * priceMediumAmount
var totalPriceLarge = largeAmount * priceLargeAmount
var totalPriceBill = totalPriceSmall + totalPriceMedium + totalPriceLarge
var totalPizza = smallAmount + mediumAmount + largeAmount

alert('Het totale aantal kleine pizza`s dat u heeft is ' + smallAmount)
alert('Het totale aantal medium pizza`s dat u heeft is ' + mediumAmount)
alert('Het totale aantal large pizza`s dat u heeft is ' + largeAmount)

alert('Totale aantal pizza ' + totalPizza)
alert('De totale prijs is €' + totalPriceBill) 

alert('De pizza`s komen er over 15 min aan, geniet van uw pizza!')
