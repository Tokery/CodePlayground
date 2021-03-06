/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    name: {
      type: 'string',
      required: true
    },

    email : { 
      type: 'email',
      required: true,
      unique: true
    },

    password : { 
      type: 'string',
      required: true
    }
    
  },

  signup: function(inputs, cb) {
    // Create a user
    User.findOne({
      email: inputs.email
    }).exec(function (err, user) {
      
      if (!user) {
        User.create({
          name: inputs.name,
          email: inputs.email,
          // TODO: encrypt the password
          password: inputs.password
        })
        .exec(cb);
      }
      else {
        cb("Duplicate");
      }
    });
    
  },

  attemptLogin: function(inputs, cb) {
    // Create a user
    User.findOne({
      email: inputs.email,
      // TODO: encrypt the password
      password: inputs.password
    })
    .exec(cb);
  }
};

