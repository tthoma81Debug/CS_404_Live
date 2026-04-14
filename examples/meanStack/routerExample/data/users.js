// data/users.js

// in-memory "database"
let nextId = 3;
let users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
];

exports.getAll = () => users;

exports.getById = (id) => users.find(u => u.id === id);

exports.create = ({ name }) => {
  const user = { id: nextId++, name };
  users.push(user);
  return user;
};