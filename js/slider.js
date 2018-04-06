
  ( function($) {
  
  $(document).ready(function() {
    
    var s           = $('.slider'),
        sWrapper    = s.find('.slider-wrapper'),
        sItem       = s.find('.slide'),
        btn         = s.find('.slider-link'),
        sWidth      = sItem.width(),
        sCount      = sItem.length,
        slide_date  = s.find('.slide-date'),
        slide_title = s.find('.slide-title'),
        slide_text  = s.find('.slide-text'),
        slide_more  = s.find('.slide-more'),
        slide_image = s.find('.slide-image img'),
        sTotalWidth = sCount * sWidth;
    
    sWrapper.css('width', sTotalWidth);
    sWrapper.css('width', sTotalWidth);
    
    var clickCount  = 0;
    
    btn.on('click', function(e) {
      e.preventDefault();

      if( $(this).hasClass('next') ) {

        var aa=clickCount+1;

        if(aa<sCount)
        {

            ( clickCount < ( sCount - 1 ) ) ? clickCount++ : clickCount = 0;
        }
       

      } else if ( $(this).hasClass('prev') ) {
          aa=clickCount;
       
        if(aa!==0)
        {
        ( clickCount > 0 ) ? clickCount-- : ( clickCount = sCount - 1 );
      }
      }

      TweenMax.to(sWrapper, 0.4, {x: '-' + ( sWidth * clickCount ) })


     

    });


 var s1           = $('.slider1'),
        sWrapper1   = s1.find('.slider-wrapper'),
        sItem1       = s1.find('.slide'),
        btn1         = s1.find('.slider-link'),
        sWidth1      = sItem1.width(),
        sCount1      = sItem1.length,
        slide_date1  = s1.find('.slide-date'),
        slide_title1 = s1.find('.slide-title'),
        slide_text1  = s1.find('.slide-text'),
        slide_more1  = s1.find('.slide-more'),
        slide_image1 = s1.find('.slide-image img'),
        sTotalWidth1 = sCount1 * sWidth1;
    
    sWrapper1.css('width', sTotalWidth1);
    sWrapper1.css('width', sTotalWidth1);
    
    var clickCount1  = 0;
    
    btn1.on('click', function(e) {
      e.preventDefault();

    if( $(this).hasClass('next') ) {
        var aa1=clickCount1+1;
        if(aa1<sCount1)
        {
            ( clickCount1 < ( sCount1 - 1 ) ) ? clickCount1++ : clickCount1 = 0;
        }
       

      } else if ( $(this).hasClass('prev') ) {
          aa1=clickCount1;
       
        if(aa1!==0)
        {
        ( clickCount1 > 0 ) ? clickCount1-- : ( clickCount1 = sCount1 - 1 );
      }
      }
      TweenMax.to(sWrapper1, 0.4, {x: '-' + ( sWidth1 * clickCount1 ) })

     

    });





          
  });
})(jQuery);

$('.overlay').addClass('overlay-blue');
