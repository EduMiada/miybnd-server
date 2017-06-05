/**
* UserController
*
* @description :: Server-side actions for handling incoming requests.
* @help        :: See https://sailsjs.com/docs/concepts/actions
*/

module.exports = {
  
    findOne: function (req, res) {
        
        User.findOne({ id: req.param('id') }).omit(['password'])
        .populate('bands', { select: ['id', 'name'] })
        .exec(function(err, user) {
            if (err) {
                switch (err.name) {
                case 'UsageError': return res.badRequest(err);
                default: return res.serverError(err);
                }
            }

            if (!user) { return res.notFound(); }

            sails.helpers.quoter().exec(function(err, quote){
                return res.ok({sucess: true, data: user, chuckQuote:quote});
            })
        });
    },

    create: function (req, res) {
        res.ok(req.allParams());
        // User.findOne({ id: req.param('id') }).omit(['password'])
        // .populate('bands', { select: ['id', 'name'] })
        // .exec(function(err, user) {
        //     if (err) {
        //         switch (err.name) {
        //         case 'UsageError': return res.badRequest(err);
        //         default: return res.serverError(err);
        //         }
        //     }

        //     if (!user) { return res.notFound(); }

        //     sails.helpers.quoter().exec(function(err, quote){
        //         return res.ok({sucess: true, data: user, chuckQuote:quote});
        //     })
        // });
    }



};

