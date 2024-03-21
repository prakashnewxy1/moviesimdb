function searchMovie() {
    var query = document.getElementById('searchQuery').value;
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=YOUR_API_KEY&query=${query}`)
        .then(response => response.json())
        .then(data => {
            var movies = data.results;
            var output = '';
            movies.forEach(function(movie) {
                output += `<p>${movie.title}</p>`;
            });
            document.getElementById('movieResults').innerHTML = output;
        })
        .catch(error => console.error(error));
}
