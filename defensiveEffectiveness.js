const $ = require('cheerio');
const rp = require('request-promise');
const url = 'https://www.footballoutsiders.com/stats/teamdef';
const fs = require('fs');
const tableParser = require('cheerio-tableparser');
const utils = require('./utils')
//const Sequelize = require('sequelize')
//const defenseEfficiency = require('./server/models/defenseEfficiency')
//const sequelize = new Sequelize('fantasyfootball', 'python_service', 'password');

function Main() {
  rp(url)
  .then(function(html) {

    let w = $.load('<table>' + $('table', html).first().html() + '</table>')
    tableParser(w)
    let results = utils.nestedToJsonArray( w('table').parsetable(true, true,true ))
    //convert keys to proper types below
  
    let fin = utils.convertJsonArrayTypes(results);
    
    fin.forEach((dict) => {
      console.log(dict)  
     // let defenseEfficiency.build(dict)
    //let defenseEfficiency.build(
        //dict
      
    })

  }).catch(function(err) {
    //handle error
    console.log(err)
    return false
  });  
}; //end main

let res = Main(); 
module.exports.firstTable = res


  