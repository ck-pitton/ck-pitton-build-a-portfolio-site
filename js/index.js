$(window).resize(function(){
   console.log('resize called');
   var width = $(window).width();
   if(width <= 600){
       $('.portfolio_item').removeClass('col-4').addClass('col-12');
       $('.portfolio_item').removeClass('middle_portfolio');
   }
})
.resize();//trigger the resize event on page load.
