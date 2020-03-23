$(document).ready(function(){
    var home = home;
    var homePageContent = "#home-page-content";
    $(homePageContent).show();
    $("#home").addClass('selected');
    $( "ul li div" ).click(function() {
        $(homePageContent).hide();
        $(home).removeClass('selected');
        var id = $(this).attr('id');
        var tempValue = "#" + id;
        $(tempValue).addClass('selected');
        var idPageContent = '#' + id + '-page-content';
        $(idPageContent).show();
        homePageContent = idPageContent;
        home = tempValue;
    });

    var count = 0;
    var word = ["Montaż okien",
                "Serwis rolet",
                "Regulacja okien i drzwi",
                "Konserwacja okuć",
                "Usuwanie zarysowań",
                "Przeróbki okien",
                "Wymiana uszkodzonych elementów",
                "Funkcje uchylania",
                "Montaż nawiewników",
                "Szlifowanie",
                "Usterki stolarskie",
                "Dojazd do klienta"];

   setInterval(function(){
       $("#words").fadeOut(function() {
           $(this).text(word[count]).fadeIn();
       });

       count++;

       if (count == 12) {
           count = 0;
       }
   }, 1500);
});
