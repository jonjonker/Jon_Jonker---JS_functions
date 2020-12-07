const myFavMovie = {
    title: "Puff the Magic Dragon",
    duration: 30,
    stars: ["Puff", "Jackie", "Living Sneezes"]
};

const printMovie = function(movie) {
    console.log(movie.title + " lasts for " + movie.duration + " minutes");
    console.log("It stars: " + movie.stars.join(", "));
  };

  printMovie(myFavMovie);