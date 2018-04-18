$(function(){
    var myMovies = JSON.parse(localStorage.getItem('watchlist'));

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
};
if(myMovies){
    var testHTML = renderMovies(myMovies);
    $('.movies-container').html(testHTML);
};
});