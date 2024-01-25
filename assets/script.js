


let queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=hxSJXXX4qVzmjHpal3R6G1OC8RKRcxWJ"


fetch(queryURL)
  .then(function (response) {
    return response.json();
  }).then(function (data) {

    console.log(data)
  })
