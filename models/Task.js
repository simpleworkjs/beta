'use strict';

const {Model} = require('@simpleworkjs/orm-identity');

class Task extends Model {
  static fields = {
    id: {type: 'uuid', primaryKey: true},
    title: {type: 'string', isRequired: true, max: 200, display: {searchable: true}},
    description: {type: 'text'},
    done: {type: 'boolean', default: false},
    priority: {type: 'int', default: 0, min: 0, max: 5},
    dueDate: {type: 'date'},
    createdBy: {type: 'hasOne', model: 'User'},
    project: {type: 'hasOne', model: 'Project', form: {omit: false}},
  };

  static permissions = {
    read: ['user'],
    create: ['admin'],
    update: ['admin', 'owner'],
    delete: ['admin'],
  };

  static display = {
    name: 'Task',
    titleField: 'title',
  };
}

module.exports = Task;
