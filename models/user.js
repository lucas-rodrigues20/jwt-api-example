const users = require('./users.json');

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
