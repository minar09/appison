jQuery(document).ready(function(){
  jQuery('#slippry-demo').slippry({
      slippryWrapper: '<div class="sy-box css-demo" />', // wrapper to wrap everything, including pager
      // options
      adaptiveHeight: true, // height of the sliders adapts to current slide
      useCSS: true, // true, false -> fallback to js if no browser support
      autoHover: false,
      transition: 'horizontal'
  });
});