module.exports = {
    getQuote: function(req, res) {
        sails.helpers.quoter().exec(function(err, quote){
            return res.json({ quote:quote  });
        })
            
    },

     getProtectedQuote: function(req, res) {
        sails.helpers.quoter().exec(function(err, quote){
            return res.json({ quote:quote  });
        })
            
    }
};