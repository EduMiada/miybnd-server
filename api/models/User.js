/**
 * User.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

//var CipherService = require('../services/cipher');


module.exports = {
  schema:true,
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
        displayName: {
		    type: 'string'
	    },
        avatar: {
            type: 'string',
            defaultsTo: '',
            url: true
        },
        providerData: {
            type: 'json',
            defaultsTo: {}
        },
	    additionalProvidersData: {
            type: 'json',
            defaultsTo: {}
        },
        bands:{
            collection: 'band',
            via: 'member',
            through: 'userbands'
        },
        spotifyAuthCode: {
            type:'string',
            defaultsTo: ''
        },
        
        profile: {
            type: 'json',
            defaultsTo: {   about:'', 
                            instrument:'',
                            experience:'', 
                            styles:[],
                            influencies:[]
                        }
        },

        contact:{
            type: 'json',
            defaultsTo: {bio:'', city:'', area:'', zip:''}
        },
        channels:{
            type: 'json',
            defaultsTo:[{channel:'', name:'', url:''}]
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


