/**
 * User.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

//var CipherService = require('../services/cipher');


module.exports = {

  attributes: {
        username: {
            type: 'string',
            required: true,
            unique: true
        },
        password: {
            type: 'string'
        },
        email: {
            type: 'string',
            email: true,
            required: true,
            unique: true
        },
        firstName: {
            type: 'string',
            defaultsTo: ''
        },
        lastName: {
            type: 'string',
            defaultsTo: ''
        },
        photo: {
            type: 'string',
            defaultsTo: '',
            url: true
        },
        socialProfiles: {
            type: 'json',
            defaultsTo: {}
        },
        bands:{
            collection: 'band',
            via: 'member',
            through: 'userbands'
        }
       
    },
    
    customToJSON: function () {
      return _.omit(this,['password','socialProfiles']);
    }, 
        
    afterCreate: function (values, cb) {
        //create a default Personal band
        Band.create({name:'Personal', personal:true})
            .then(function (band) {
                userbands.create({member:values.id, band:band.id, admin:true})
                .then(function (usrbnd){
                    cb();
                });
          });
        //next();
    }



};


