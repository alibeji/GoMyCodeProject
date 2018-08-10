  AOS.init();

	var scroll = $(window).scrollTop();
  $(window).scroll(function(){
    $(".top").css("opacity", 1 - $(window).scrollTop() / 270);
});

var pxlCount = 0
$(window).on('scroll', function () {
    pxlCount = $(document).scrollTop()/50;
  	$('p.pxlCount > span').text(pxlCount);
    $(".top").css({"-webkit-filter": "blur("+pxlCount*0.9+"px)","-moz-filter": "blur("+pxlCount*0.9+"px)","filter": "blur("+pxlCount*0.9+"px)" })     
});

$(".sliding-link").click(function(e) {
    e.preventDefault();
    var aid = $(this).attr("href");
    $('html,body').animate({scrollTop: $(aid).offset().top},'slow');
});

// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
var favorites = [];
var favoritesIds= [];
/*$( document ).ready(function() {
    clas=".test"
     index = favoritesIds.indexOf(clas);
  // return if target doesn't have an id (shouldn't happen)
  if (!clas) return;
  // item is not favorite
  if (index != -1) {
    item.className = 'fa fa-star checked test fav';
  // item is already favorite
  }

});
*/favorites.forEach(function(favorite) {
  document.getElementById(favorite).className = 'fav';
});
console.log(document.querySelector(".star"))
$(document).on('mousedown',function(){

$(".test").mouseup(function(){

 id=this.id
 /*console.log(id)	
 $("#"+id).toggleClass("fav");*/
      item = this,
      index = favoritesIds.indexOf(id);
  // return if target doesn't have an id (shouldn't happen)
  if (!id) return;
  // item is not favorite
  if (index == -1) {
    favoritesIds.push(id);
    item.className = 'fa fa-star checked test fav';
  // item is already favorite
  } else {
    favoritesIds.splice(index, 1);
    item.className = 'fa fa-star checked test';
  }
  // store array in local storage
  localStorage.setItem('favorites', favoritesIds);
});
})



