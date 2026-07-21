'use strict';

/**
 * Demo SimpleWorkJS application.
 *
 * Uses:
 *   @simpleworkjs/backend  — framework, routes, live sync
 *   @simpleworkjs/orm-identity — ORM with built-in users/groups/roles/permissions/tokens
 *   @simpleworkjs/conf      — configuration
 */

const backend = require('@simpleworkjs/backend');
const conf = require('@simpleworkjs/conf');
const models = require('./models');

async function seedDemo(models) {
  try {
    const existing = await models.Project.list({limit: 1});
    if (existing.length) return;

    const adminUser = await models.User.create({
      userName: 'admin',
      email: 'admin@example.com',
      password: 'Changeme1!',
      isAdmin: true,
    });

    const adminGroup = await models.Group.create({
      name: 'Administrators',
      description: 'Full access to everything.',
    });

    const adminRole = await models.Role.create({
      name: 'Admin',
      description: 'Grants the global admin permission.',
    });

    const adminPermission = await models.Permission.create({
      name: 'admin',
      description: 'Global administrator permission.',
    });

    await models.UserGroup.create({userId: adminUser.id, groupId: adminGroup.id});
    await models.GroupRole.create({groupId: adminGroup.id, roleId: adminRole.id});
    await models.RolePermission.create({roleId: adminRole.id, permissionId: adminPermission.id});

    const project = await models.Project.create({
      name: 'Demo Project',
      description: 'A sample project created automatically by the beta framework.',
      active: true,
      createdById: adminUser.id,
    });

    await models.Task.create({
      title: 'Welcome to SimpleWorkJS',
      description: 'This task was generated automatically. Edit it or create your own.',
      done: false,
      priority: 1,
      projectId: project.id,
      createdById: adminUser.id,
    });
  } catch (error) {
    console.error('Demo seed failed (non-fatal):', error.message);
  }
}

backend({conf, models, seed: seedDemo}).start();
