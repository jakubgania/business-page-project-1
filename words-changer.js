console.log("javascript script start"),$(document).ready(function(){console.log("function start");var a=a,t="#home-page-content";$(t).show(),$("#home").addClass("selected"),$("ul li div").click(function(){$(t).hide(),$(a).removeClass("selected");var e=$(this).attr("id"),o="#"+e;$(o).addClass("selected");var n="#"+e+"-page-content";$(n).show(),t=n,a=o});var e=0,o=["Montaż okien","Serwis rolet","Regulacja okien i drzwi","Konserwacja okuć","Usuwanie zarysowań","Przeróbki okien","Wymiana uszkodzonych elementów","Funkcje uchylania","Montaż nawiewników","Szlifowanie","Usterki stolarskie","Dojazd do klienta"];setInterval(function(){$("#words").fadeOut(function(){$(this).text(o[e]).fadeIn()}),12==++e&&(e=0)},1500),console.log("function end")}),console.log("javascript script end");