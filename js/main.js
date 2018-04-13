// Instantiate the Bootstrap carousel
$('.multi-item-carousel').carousel({
    interval: false
});
// for every slide in carousel, copy the next slide's item in the slide.
// Do the same for the next, next item.
var carouselItems = $('.multi-item-carousel .carousel-item');
carouselItems.each(function(){
    var next = $(this).next();
    if (!next.length) next = $(this).siblings(':first');
    next.children(':first-child').clone().appendTo($(this));
});
carouselItems.each(function(){
    var prev = $(this).prev();
    if (!prev.length) prev = $(this).siblings(':last');
    prev.children(':nth-last-child(2)').clone().prependTo($(this));
});
carouselItems.each(function () {
    if(window.innerWidth<=576){
        this.children[0].setAttribute("href","#carousel-1");
        this.children[0].setAttribute("role","button");
        this.children[0].setAttribute("data-slide","prev");
        this.children[2].setAttribute("href","#carousel-1");
        this.children[2].setAttribute("role","button");
        this.children[2].setAttribute("data-slide","next");
    }
});

/*--- function to toggle panel 4 cosy steps content ---------*/
/*--- first hide the content ---*/
if(window.innerWidth<=576){
    $('#panel-4-content').addClass('d-none');
}
/*--- now display content on click -----*/
function togglePanel4Content(condition) {
    if(condition) {
        $('#panel-4-content').removeClass('d-none');
        $('.panel-4 .panel4-content').addClass('plain-background');
        $('#content-inner').addClass('d-none');
    }else{
        $('#panel-4-content').addClass('d-none');
        $('.panel-4 .panel4-content').removeClass('plain-background');
        $('#content-inner').removeClass('d-none');
    }
}
/*--- function to toggle panel 3 table content for multiple items carousel ---------*/
function toggleTab(string) {
    $('.panel-3 .tab-content .tab-pane').each(function () {
        $(this).removeClass('active show');
        if(this.id===string){
            $(this).addClass('active show');
        }
    });
}