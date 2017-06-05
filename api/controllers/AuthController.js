/**
 * AuthController
 *
 * @description :: Server-side logic for managing Auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var passport = require('passport');


/**
 * Triggers when user authenticates via passport
 * @param {Object} req Request object
 * @param {Object} res Response object
 * @param {Object} error Error object
 * @param {Object} user User profile
 * @param {Object} info Info if some error occurs
 * @private
 */
function _onPassportAuth(req, res, error, user, info) {

  if (error) return res.serverError(error);
  if (!user) return res.forbidden(null, info && info.code, info && info.message);
 

  sails.helpers.quoter().exec(function(err, quote){
    //return res.ok({sucess: true, data: user, chuckQuote:quote});
    return res.ok({
        sucess:true, 
        data: {
            token: CipherService.createToken(user), 
            user: user, 
            chuckQuote:quote
          }
    });
  });



}
 
module.exports = {
  /**
   * Sign up in system
   * @param {Object} req Request object
   * @param {Object} res Response object
   */
  signup: function (req, res) {
    var user = _.omit(req.allParams(), 'id');
    CipherService.hashPassword(user);

    User.create(user)
      .then(function (user) {
          return res.ok( {
            token: CipherService.createToken(user),
            user: user
          });
      })
      .catch(res.serverError);
  },
 
  /**
   * Sign in by local strategy in passport
   * @param {Object} req Request object
   * @param {Object} res Response object
   */
  signin: function (req, res) {
    console.log('sign in');
    passport.authenticate('local', _onPassportAuth.bind(this, req, res))(req, res);
  },
};
