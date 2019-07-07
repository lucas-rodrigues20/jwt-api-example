const users = require('./users.json');
const jwt = require('jsonwebtoken');

exports.findAll = () => {

  return new Promise((resolve, reject) => {

    setTimeout(() => {
      resolve(users);
    }, 2000);

  });
};

exports.findOneById = (id) => {

  return new Promise((resolve, reject) => {

    const user = users.filter(u => u.id === id)[0];

    setTimeout(() => {

      if (user)
        return resolve(user);
      
      const err = new Error("User not found.");
      err.status = 404;

      reject(err);
    
    }, 2000);

  });
};

exports.authenticate = (email, password) => {
  
  return new Promise((resolve, reject) => {
    
    const user = users.find(u => u.email === email && u.password === password);
    
    setTimeout(() => {
  
      if (!user) {
        const err = new Error("Username or password is incorrect.");
        err.status = 400;
    
        return reject(err);
      }
    
      const token = jwt.sign({ user_id: user.id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRATION });
      delete user.password;
    
      resolve({ user, token });
  
    }, 2000);

  });
}
