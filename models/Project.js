'use strict';

const {Model} = require('@simpleworkjs/orm-identity');

class Project extends Model {
  static fields = {
    id: {type: 'uuid', primaryKey: true},
    name: {type: 'string', isRequired: true, max: 100, display: {searchable: true}},
    description: {type: 'text'},
    active: {type: 'boolean', default: true},
    createdBy: {type: 'hasOne', model: 'User'},
    tasks: {type: 'hasMany', model: 'Task'},
  };

  static permissions = {
    read: ['user'],
    create: ['admin'],
    update: ['admin', 'owner'],
    delete: ['admin'],
  };

  static display = {
    name: 'Project',
    titleField: 'name',
  };
}

module.exports = Project;
