angular.module('starter.services', [])

/**
*
*/
.factory('ContactsService', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var contacts = [
{ id: 0, firstname: 'Herry', lastname : 'Wang', phonenumber: "12345" },
{ id: 1, firstname: 'Harry',lastname: "Porter", phonenumber: "22345"},
{ id: 2, firstname: 'John',lastname: "Moshe", phonenumber: "32345"},
{ id: 3, firstname: 'Leo',lastname: "Fancy", phonenumber: "42345"},
];

return {
  all: function() {
    return contacts;
  },
  get: function(Id) {
    // Simple index lookup
    return contacts[Id];
  },
  add: function(contact) {
    console.log("adding " + contact);
    contacts.push(contact);
    return contact;
  }
}
});
