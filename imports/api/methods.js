import { Meteor } from 'meteor/meteor';
import { RegisteredUsers } from './registeredUsers.js'; // Import any necessary collections


Meteor.methods({
    'registerUser'(email,role) {
      // Here you can perform any necessary validation or logic before saving the email
      // For simplicity, let's just insert the email into a collection
      RegisteredUsers.insert({ email: email, role:role });

    },
  });