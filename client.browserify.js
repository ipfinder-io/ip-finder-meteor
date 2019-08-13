// Write your package code here!

// Variables exported by this module can be imported by other packages and
// applications. See ip-finder-meteor-tests.js for an example of importing.
if (Meteor.isServer) {
    Ipfinder = Npm.require('ipfinder');
} else {
    Ipfinder = require('ipfinder');
}