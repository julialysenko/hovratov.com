
//slider 
 $('#gallery-1').royalSlider({
     fullscreen: {
         enabled: true,
         nativeFS: true
     },
     controlNavigation: 'thumbnails',
     autoScaleSlider: true,
     autoScaleSliderWidth: 800,
     autoScaleSliderHeight: 533,
     loop: false,
     imageScaleMode: 'fit-if-smaller',
     navigateByClick: true,
     numImagesToPreload: 2,
     arrowsNav: true,
     arrowsNavAutoHide: true,
     arrowsNavHideOnTouch: true,
     keyboardNavEnabled: true,
     fadeinLoadedSlide: true,
     globalCaption: true,
     globalCaptionInside: false,
     thumbs: {
         appendSpan: true,
         firstMargin: true,
         paddingBottom: 4
     }
 });
