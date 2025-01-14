function search() {
  let inputTag = document.getElementById("movie-input");
  let movieName = inputTag.value;

  console.log(movieName);

  let htmlRequest = new XMLHttpRequest();

  let url =
    "http://www.omdbapi.com/?i=tt3896198&apikey=f70ea423&t=" + movieName;

  htmlRequest.open("GET", url);

  htmlRequest.responseType = "json";

  htmlRequest.onload = () => {
    let response = htmlRequest.response;
    console.log(response);

    let imgTag = document.getElementById("poster");
    imgTag.src = response.Poster || "./assets/not_found.png";

    let titleTag = document.getElementById("title");
    titleTag.innerHTML = response.Title || "Movie not found";

    let yearTag = document.getElementById("year");
    yearTag.innerHTML = response.Year || "";

    let plotTag = document.getElementById("plot");
    plotTag.innerHTML = response.Plot || "";

    let ratingsTag = document.getElementById("Ratings");
    let ratingsHtml = "";

    if (response.Ratings && response.Ratings.length > 0) {
      for (let i = 0; i < response.Ratings.length; i++) {
        ratingsHtml += `${response.Ratings[i].Source}: ${response.Ratings[i].Value}<br>`;
      }
    } else {
      ratingsHtml = "";
    }

    ratingsTag.innerHTML = ratingsHtml;
  };
  htmlRequest.send();
}
