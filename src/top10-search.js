import axios from 'axios';
export class BestGames {
  top10Pick() {
    // For the games
    console.log('top10pick activated');
    axios({
      method: 'GET',
      url: "https://api-v3.igdb.com/games",
      crossDomain: true,
      headers: {
        'Accept': 'application/json',
        'user-key': 

      },
      data: "fields name,category,platforms,aggregated_rating; where category = 0 & platforms = 48 & aggregated_rating > 85; sort aggregated_rating desc; limit 10;"
    })
      .then(response => {
        console.log(response.data);
      })
      .catch(err => {
        console.error(err);
      });
  }
}
