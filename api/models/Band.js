/**
 * Band.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  schema:true,
  
  attributes: {
    name: {
       type: 'string',
       required: true
    },
    personal:{
        type: 'boolean',
        defaultsTo:false
    },   
    members:{
        collection: 'user',
        via: 'band',
        through: 'userbands'
    }


  },

};

