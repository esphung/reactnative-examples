/*
FILENAME:  User.js
PURPOSE:   User
AUTHOR:    Eric Phung
CREATED:   12/01/2019 12:35 AM
UPDATED:
*/ 

// User function with multiple constructors
function User(username) {
  this._id = `${Date.now()}`;
  this.username = username;
  this.password = null;
  this.email = null;
  this.transactions = [];
  this.created = new Date();
  this.given = ''; // first name
  this.surname = '';

  this.getFullName = () => {
    if (this.given || this.surname) {
      return `${this.given} ${this.surname}`;
    } else {
      return 'No Name';
    }
  }
} // end

// null prototype (no properties)
User.prototype = {
  _id: `${Date.now()}`,
  // username: null,
  // password: null,
  // email: null,
  // transactions: [],
  created: new Date()
};

// // create user from some properties
// User.fromComponents = function(foo, bar) {
//     var username = `${foo} ${bar}` ;
//     return new User(username);
// };

// create user from login
User.fromLoginCredentials = function(username, password) {
  const _id = `${Date.now()}`;
  const message = `User created from login credentials: ${_id}
  username: ${username}
  password: ${password}`;
  console.log(message)

  const user = new User(username);
  return user;
};

// // user function testing

// var empty = User.prototype;
// console.log(empty);

// var foo = new User('John');
// console.log(foo);
// console.log(foo.getFullName())

// var bar = User.fromLoginCredentials('Jane', 'qZ8/p"X8E]*c8aH9');
// console.log(bar);

// var comps = User.fromComponents('Eric', 'Phung');
// console.log(comps);









// User class version defintion ============================
// class User {
//  constructor(email, username, password, transactions) {
//    // properties
//     this._id = `${Date.now()}`;
//     this.email = (email) ? email : '';
//     this.username = (username) ? username : '';
//     this.password = (password) ? password : '';
//     this.transactions = (transactions) ? transactions : [];
//  }

//  // methods
// }

// // testing user class
// const empty = new User();
// console.log(empty);

// const user = new User('hello@gmail.com', '');
// console.log(user)




