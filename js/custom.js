$(document).ready(function() {
  var options = [{
    selector: '#staggered-test',
    offset: 100,
    callback: function(el) {
      Materialize.showStaggeredList($(el));
    }
  }];
  
  Materialize.scrollFire(options);
});

$(document).ready(function(){
      $('.carousel').carousel();
    });