/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	


  /**
   * `UserController.login()`
   */
  login: function (req, res) {

    User.attemptLogin({
      email: req.param('email'),
      password: req.param('password')
    }, function(err, user){
      if (err) return res.negotiate(err);
      req.session.me = user.id;
      return res.redirect('/');
    });
    
  },


  /**
   * `UserController.logout()`
   */
  logout: function (req, res) {
    
      // Clear the current user session
      req.session.me = null; 

      // For non HTML browsers (cURL)
      if (req.wantsJSON) {
        return res.ok('Logged out successfully!');
      }

      // Otherwise return HTML
      return res.redirect('/');
    
  },


  /**
   * `UserController.signup()`
   */
  signup: function (req, res) {
    User.signup({
      name: req.param('name'),
      email: req.param('email'),
      password: req.param('password')
    }, function(err, user) {
      
      if (err = "Duplicate") {
        req.flash('error', 'Email address taken');
        return res.redirect('/signup');
      }
      
      // res.negotiate will determine if this is a validation error or some kind of
      // unexpected server error and then call res.badRequest or res.serverError
      if (err) return res.negotiate(err);

      req.session.me = user.id;

      if (req.wantsJSON) {
        return res.ok('Signup successful');
      }

      return res.redirect('/welcome');
    })
  }
};

