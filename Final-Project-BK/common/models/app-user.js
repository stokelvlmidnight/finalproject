'use strict';

module.exports = function(Appuser) {
    //copied code below
    Appuser.afterRemote('login', async(ctx, user, next) =>{
        if (user) {
            user.token = user.id;
        }
   })
   //Second copied code from the instructions 
   //Now within the same file, lets modify our register endpoint so we can register and receive a token in the same step
   // vs registering then having to login.
   
   Appuser.observe('after save', function(ctx, next) {
  if (ctx.isNewInstance === true) {
    var instance = ctx.instance;
     instance.createAccessToken(1209600000, function(err, response){
        if (err === null) {
           ctx.instance['userId'] = response.userId
           ctx.instance["token"] = response.id;
         }
          next();
       });
        }
        else {
            next();
        }
    });

};
