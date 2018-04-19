$(function(){
var renderMovies = function(movieArray) {
    var finalHTML = '';
    movieArray.forEach( function(movie) {
        finalHTML += '<div class = "movie card col-3 mt-1 mx-1">'
        finalHTML += '<img src="'+movie.Poster+'" class = "card-img-top">'
        finalHTML += '<div class="card-body">'
        finalHTML += '<h1>'+ movie.Title +'</h1>'
        finalHTML += '<h3>' + movie.Year +'</h3>'
        finalHTML += '<button data-id="'+movie.imdbID+'" class = "add">add</button>'
        finalHTML += '</div></div>'
    });
    return finalHTML;
}


$('form').on('submit', function(e){
    e.preventDefault();
    var searchString = encodeURIComponent($('.search-bar').val());
    $.ajax({
        url:  "http://www.omdbapi.com/?apikey=3430a78&s=" + searchString,
        method: 'GET',
        success: function(response){
                var testHTML = renderMovies(response.Search);
                 $('.movieshow').html(testHTML);
        }
    });


});

$('.movies-container').on('click', '.add', function(){
    var imdbID = $(this).data('id');
    var movie = movieData.find(function(currentMovie){
        return currentMovie.imdbID == imdbID;
    });
    
    var watchListJSON = JSON.parse(localStorage.getItem('watchlist'))
    if(!watchListJSON){
        watchListJSON = [];
    };
    watchListJSON.push(movie);
    localStorage.setItem('watchlist', JSON.stringify(watchListJSON));
});


});