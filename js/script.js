(function() {
    'use strict';

    var url = 'http://api.icndb.com/jokes/random';
    var button = document.getElementById('getJoke');
    var joke = document.getElementById('joke');

    function getJoke() {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.addEventListener('load', function() {
            var response = JSON.parse(xhr.response);
            joke.innerHTML = response.value.joke;
        });
        xhr.send();
    };

    getJoke();
    
    button.addEventListener('click', function() {
        getJoke();
    });
})();
