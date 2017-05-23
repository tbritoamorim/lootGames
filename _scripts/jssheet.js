$(document).ready(function(){
  $("#searchButton").on("click", function() {
    $(".video-games-tab").hide();
    $(".board-games-tab").hide();
    $("#secret-bar").removeClass('searchbar-hidden');
    $("#secret-bar").addClass('searchbar');
    $("input").select();
    $(this).hide()
  });
  $("header").on("mouseleave", function() {
    $(".video-games-tab").show();
    $(".board-games-tab").show();
    $("#secret-bar").addClass('searchbar-hidden');
    $("#secret-bar").removeClass('searchbar');
    $("#searchButton").show();
  })
});
