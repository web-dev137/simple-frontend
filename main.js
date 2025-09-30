function changeIcon(parentElement, pathImgFind, pathImgReplace) {
    $(parentElement).hover(
        function(){$(this).children('img').attr("src", pathImgReplace)},
        function(){$(this).children('img').attr("src", pathImgFind)}
    );
}

function changeBackgroundColor(element, colorFind, colorReplace) {
    $(element).hover(
        function(){$(this).css("background-color", colorReplace)},
        function(){$(this).css("background-color", colorFind)}
    );
}

changeIcon(
    '.footer-icon-1', 
    'img/icons-footer/icon-footer-1-black.svg', 
    'img/icons-footer/icon-footer-1-white.svg'
);

changeIcon(
    '.footer-icon-2', 
    'img/icons-footer/icon-footer-2-black.svg', 
    'img/icons-footer/icon-footer-2-white.svg'
);

changeIcon(
    '.footer-icon-3', 
    'img/icons-footer/icon-footer-3-black.svg', 
    'img/icons-footer/icon-footer-3-white.svg'
);

changeIcon(
    '.search', 
    'img/search-yellow.svg', 
    'img/search-black.svg'
);

changeIcon(
    '.bucket-btn', 
    'img/bucket-yellow.svg', 
    'img/bucket-black.svg'
);

changeBackgroundColor(
    '.landing-page', 
    'rgba(0, 0, 0, 20%)', 
    'rgba(0, 0, 0, 4%)'
);

$('#logo').hover(
    function(){$(this).addClass("zoom")},
    function(){$(this).removeClass("zoom")}
);