/**
 * BandController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    name: {
       type: 'String'
    },
    personal:{
        type: 'Boolean',
        default:false
    },   
    members:{
        collection: 'user',
        via: 'band',
        through: 'userbands'
    }

};

