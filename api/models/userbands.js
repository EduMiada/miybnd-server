module.exports = {
  schema:true,
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