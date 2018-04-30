app.controller('HomeController', ['$scope', function($scope) {
	


	/* THESE ARE YOUR LIST OF MOVIES AND ACCOMPANYING METADATA
	//	
	// 	They are in the following format:
	// 	title (String): the name of the movie
	// 	iscore (Number): the IMDB score
	// 	rating (String): the movie's MPAA rating 
	// 	released (Date): the release date
	// 	country (String): the country of production
	// 	posters (Array): an array of String values with the URL to movie posters
	// 	imdb (String): the URL to the corresponding IMDB website
	// 	website (String): the URL to the corresponding official website
	// 	likes (Number): a fictitious number of user likes
	// 	dislikes (Number): a fictitious number of user dislikes
	// 	posterindex (Number): a counter to use with the "posters" array to keep track of the current displayed poster index
	//
	// FOR STEP 16, ADD THREE OF YOUR OWN FAVORITE MOVIES WITH METADATA TO THE END OF THIS LIST
	*/
	$scope.movies = [
    { 
      title:	'The Shawshank Redemption', 
      iscore:	9.3,
      rating:	'R',
      runtime:	142,
      released:	new Date('1994', '10', '14'),
      country:	'USA',
      posters:	['img/shawshank.jpg','img/shawshank2.jpg','img/shawshank3.jpg'],
      imdb:		'http://www.imdb.com/title/tt0111161',
      website:	'http://www.facebook.com/ShawshankRedemptionFilm',
      likes:	1021,
      dislikes:	122,
      posterindex: 0
	},
    { 
      title:	'The Godfather', 
      iscore:	9.2,
      rating:	'R',
      runtime:	175,
      released:	new Date('1972', '03', '24'),
      country:	'USA',
      posters:	['img/godfather.jpg','img/godfather_2.jpg','img/godfather_3.jpg'],
      imdb:		'[http://www.imdb.com/title/tt0068646',
      website:	'http://www.facebook.com/thegodfather',
      likes:	928,
      dislikes:	109,
      posterindex: 0
	},
    { 
      title:	'The Godfather: Part II', 
      iscore:	9.0,
      rating:	'R',
      runtime:	202,
      released:	new Date('1974', '12', '20'),
      country:	'USA',
      posters:	['img/godfather2.jpg','img/godfather2_2.jpg'],
      imdb:		'http://www.imdb.com/title/tt0071562',
      website:	'http://www.facebook.com/thegodfather',
      likes:	855,
      dislikes:	99,
      posterindex: 0
	},
    { 
      title:	'The Dark Knight', 
      iscore:	8.9,
      rating:	'PG-13',
      runtime:	152,     
      released:	new Date('2008', '07', '18'),
      country:	'USA',
      posters:	['img/darkknight.jpg','img/darkknight2.jpg'],
      imdb:		'http://www.imdb.com/title/tt0468569',
      website:	'http://www.42entertainment.com/work/whysoserious',
      likes:	828,
      dislikes:	127,
      posterindex: 0
	},
    { 
      title:	'Schindler\'s List', 
      iscore:	8.9,
      rating:	'R',
      runtime:	195,
      released:	new Date('1993', '11', '30'),
      country:	'USA',
      posters:	['img/schindlerslist.jpg'],
      imdb:		'http://www.imdb.com/title/tt0108052',
      website:	'http://www.uphe.com/schindlers-list',
      likes:	812,
      dislikes:	101,
      posterindex: 0
	},



    { 
      title:      'Rocky: IV', 
      iscore:     6.8,
      rating:     'pg',
      runtime:    131,
      released:   new Date('1985', '11', '27'),
      country:    'USA',
      posters:    ['img/rocky.jpg','img/rocky2.jpg'],
      imdb:       'https://www.themoviedb.org/movie/1374-rocky-iv',
      website:    'http://www.facebook.com/rocky',
      likes:      1235,
      dislikes:   212,
      posterindex: 0
      },
    { 
      title:      'Jaws', 
      iscore:     8.0,
      rating:     'PG',
      runtime:    152,     
      released:   new Date('1975', '6', '20'),
      country:    'USA',
      posters:    ['img/jaws.jpg', 'img/jaws2.jpg'],
      imdb:       'https://www.imdb.com/title/tt0073195/?ref_=tt_mv_close',
      website:    'http://www.facebook.com/jaws',
      likes:      1002,
      dislikes:   58,
      posterindex: 0
      },
    { 
      title:      'Resident Evil', 
      iscore:     7.9,
      rating:     'R',
      runtime:    195,
      released:   new Date('2002', '3', '15'),
      country:    'USA',
      posters:    ['img/residentEvil.jpg','img/residentEvil2.jpg'],
      imdb:       'https://www.imdb.com/title/tt0120804/?ref_=nv_sr_1',
      website:    'http://www.uphe.com/schindlers-list',
      likes:      812,
      dislikes:   101,
      posterindex: 0
      }


	
	
  ];
	
	

	
	/* ADD VARIABLES FOR STEP 3 HERE */
	
	$scope.title = "IMDB Kevin's Top 8 Movies";
      $scope.owner = "Kevin Wildermuth";
      $scope.github = "https://github.com/kevinwild/is219wildermuthPrj3";
	
	
	
	
	
	
	/* ADD FUNCTIONS FOR STEP 7 HERE */
	
      $scope.like = function(index) { return this.movie.likes += 1; };
      $scope.dislike = function(index) { return this.movie.dislikes += 1; };
      $scope.posterClick = function(index) { 
            if(this.movie.posterindex >= this.movie.posters.length - 1){
                  return this.movie.posterindex = 0;
            }
            else {
                  return this.movie.posterindex += 1;
            }
      
      };

      $scope.timeText = function(mins){
        var hrCount  = 0;
          if(mins % 60 > 0){
            while(true){
              if(mins < 60){
                return hrCount + "h " + mins + "m";
              }
              else {
                mins = mins - 60;
                hrCount++;
              }
            }
          }else {
            return mins + "m";
          }
      }
	
	
	
	
	
}]);
