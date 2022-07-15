import { describe, it, expect } from 'vitest';
import { strongPassword } from './strongPassword';

describe('verify if the password is strong enough', () => {
  it('password is strong enough', () => {
    expect(() => strongPassword('Strongpassword1')).not.toThrowError();
  });

  it('password is weak, throw error', () => {
    expect(() => strongPassword('strong')).toThrowError();
    expect(() => strongPassword('Strong')).toThrowError();
    expect(() => strongPassword('Strong1')).toThrowError();
    expect(() => strongPassword('Strongpassword')).toThrowError();
  });
});
