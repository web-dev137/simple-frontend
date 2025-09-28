$('.search').hover(
    function() {$(this).children('img').attr("src","img/search-black.svg");}, 
    function() {$(this).children('img').attr("src","img/search-yellow.svg");}
);

$('.bucket-btn').hover(
    function() {$(this).children('img').attr("src","img/bucket-black.svg");}, 
    function() {$(this).children('img').attr("src","img/bucket-yellow.svg");}
)

$('.landing-page').hover(
    function() {$(this).css("background-color","rgba(0, 0, 0, 20%)")},
    function() {$(this).css("background-color","rgba(0, 0, 0, 4%)")}
)
    