import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

// As with other collections
const SimpleTasks = new Mongo.Collection('simpleTasks');

if(Meteor.isServer){
  Meteor.publish('simpleTasks', function simpleTasksPublication(){
    return SimpleTasks.find();
  })
}

// Create a Schema using simple-schema for a new SimpleTasks collection
// It should have:
// name: a String with 10 characters max
// details: an optional String

let Schemas = {};


// Attach...
SimpleTasks.attachSchema(Schemas.SimpleTask);
// ... and allow insert operations
SimpleTasks.allow({
  insert: function(){
    return true;
  }
});

// make it available to our UI
export default SimpleTasks;
