#!/usr/bin/env node

const { spawnSync } = require('node:child_process');

const wranglerBin = require.resolve('wrangler/bin/wrangler.js');
const args = process.argv.slice(2);
const result = spawnSync(process.execPath, [wranglerBin, 'deploy', ...args], {
  stdio: 'inherit',
  shell: false,
  env: process.env,
});

process.exit(result.status ?? 1);
