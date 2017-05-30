module.exports = {
  attributes: {
    member:{
      model:'user'
    },
    band: {
      model: 'band'
    },
    admin:{
      type:'Boolean',
      defaultsTo:false
    }
  }
}