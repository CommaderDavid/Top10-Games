import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { BestGames } from './top10-search.js';

$(document).ready(function () {

  $("form.consoles").submit(function (e) {
    e.preventDefault();

    let userPicked = parsInt($("select#platform").val());
    
  });
});
