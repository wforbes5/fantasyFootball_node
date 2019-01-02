const $ = require('cheerio');
const rp = require('request-promise');
const url = 'https://www.footballoutsiders.com/stats/teamdef';
const fs = require('fs');
const tableParser = require('cheerio-tableparser');
//const Sequelize = require('sequelize')
//const sequelize = new Sequelize('fantasyfootball', 'python_service', 'password');

  
  

function Main() {
  rp(url)
  .then(function(html) {

   let w = $.load('<table>' + $('table', html).first().html() + '</table>')

    tableParser(w)
    let v= w('table').parsetable(true, true,true );

    classValue(v)

  })
  .catch(function(err) {
    //handle error
    console.log(err)
    return false
  });  
}; //end main

let res = Main();

  module.exports.firstTable = res


  