var quotes = require('../services/quotes.json');

module.exports = {
  friendlyName: 'Quoter',
  description: 'Quoter something.',
  inputs: {    
  },
  exits: {

  },


  fn: function (inputs, exits) {

    // All done.
    var totalAmount = quotes.length;
    var rand = Math.floor(Math.random() * totalAmount);
    return exits.success(quotes[rand]);
  }


};
