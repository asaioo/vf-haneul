import test from 'node:test';
import assert from 'node:assert/strict';
import { greet } from './greeting.js';

test('greets a named user', () => assert.equal(greet('Kapo'), 'Hello, Kapo!'));
test('rejects an empty name', () => assert.throws(() => greet(''), /required/));
