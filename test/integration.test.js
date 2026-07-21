'use strict';

const test = require('node:test');
const assert = require('node:assert');
const backend = require('@simpleworkjs/backend');
const conf = require('@simpleworkjs/conf');
const models = require('../models');

// Use an in-memory database for tests.
conf.database = {
  dialect: 'sqlite',
  storage: ':memory:',
  logging: false,
};

test('beta app loads identity + demo models', async function() {
  const app = backend({conf, models});
  const loaded = await app.init();

  assert.ok(loaded.User, 'identity User loaded');
  assert.ok(loaded.Project, 'Project loaded');
  assert.ok(loaded.Task, 'Task loaded');

  await app.close();
});

test('demo models can create records and resolve relations', async function() {
  const app = backend({conf, models});
  const loaded = await app.init();

  const project = await loaded.Project.create({name: 'Integration project'});
  assert.ok(project.id, 'project created');

  const task = await loaded.Task.create({
    title: 'Integration task',
    projectId: project.id,
  });
  assert.strictEqual(task.projectId, project.id, 'task stores projectId');

  await app.close();
});
