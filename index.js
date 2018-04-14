$(function(){
var renderMovies = function(movieArray) {
    var finalHTML = '';
    movieArray.forEach( function(movie) {
        finalHTML += '<div class = "movie card col-3 mx-1">'
        finalHTML += '<img src="'+movie.Poster+'" class = "card-img-top">'
        finalHTML += '<div class="card-body">'
        finalHTML += '<h1>'+ movie.Title +'</h1>'
        finalHTML += '<h3>' + movie.Year +'</h3>'
        finalHTML += '<button class = "add">add</button>'
        finalHTML += '</div></div>'
    });
    return finalHTML;
}


$('form').on('submit', function(e){
    e.preventDefault();
    var testHTML = renderMovies(movieData);
    $('.movieshow').html(testHTML);
});


});