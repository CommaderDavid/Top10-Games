import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { BestGames } from './top10-search.js';

$(document).ready(function () {

  $("form.consoles").submit(function (e) {
    e.preventDefault();

    const userPicked = parsInt($("select#platform").val());

    if (userPicked === 6) {
      $("#user-pick").empty().append("PC");
    } else if (userPicked === 48) {
      $("#user-pick").empty().append("Playstation 4");
    } else if (userPicked === 49) {
      $("#user-pick").empty().append("XBox One");
    } else if (userPicked === 130) {
      $("#user-pick").empty().append("Nintendo Switch");
    }

    
  });
});
