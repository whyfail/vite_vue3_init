import { readFileSync } from 'node:fs';
import process from 'node:process';

const msgPath = process.argv[2];
const msg = readFileSync(msgPath, 'utf-8').trim();

// Commit message 格式规范
const commitRE = /^(?:revert: )?(?:feat|fix|docs|style|refactor|perf|test|build|ci|chore|types|wip|release)(?:\(.+\))?: .{1,50}/;

if (!commitRE.test(msg)) {
  console.error(`
  ❌ Invalid commit message format.

  Proper commit message format is required for automated changelog generation.

  Examples:

    feat: add new feature
    fix: fix bug in component
    docs: update README
    style: format code
    refactor: restructure auth module
    perf: improve performance
    test: add unit tests
    build: update dependencies
    ci: configure CI pipeline
    chore: update config files
    types: add type definitions

  See https://www.conventionalcommits.org/ for more details.
  `);
  process.exit(1);
}
