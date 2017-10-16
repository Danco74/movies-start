app.directive("movieDirective", function() {
    return {
        scope: {
            movie: '=myMovie',
            isDeleting: '<allowAction',
            delete: '&'
        },
        templateUrl: 'app/movies/movieTemplate.html',
        link: function(scope, elem, attr) {
            elem.on('click', function() {
              alert(scope.movie.name)
            });
          }
      };
  });