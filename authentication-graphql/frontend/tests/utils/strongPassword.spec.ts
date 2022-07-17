import { describe, it, expect } from 'vitest';
import { strongPassword } from '../../src/utils/strongPassword';

describe('verify if the password is strong enough', () => {
  it('password is strong enough', () => {
    expect(() => strongPassword('Strongpassword1', null)).not.toThrowError();
  });

  it('password is weak, throw error', () => {
    expect(() => strongPassword('strong', null)).toThrowError();
    expect(() => strongPassword('Strong', null)).toThrowError();
    expect(() => strongPassword('Strong1', null)).toThrowError();
    expect(() => strongPassword('Strongpassword', null)).toThrowError();
  });
});
