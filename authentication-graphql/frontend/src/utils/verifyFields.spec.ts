import { describe, it, expect } from 'vitest';
import { verifyFields } from './verifyFields';

describe('verify the receives values', () => {
  it('should pass because have all values', () => {
    const fields = { name: 'Rafael', password: 'Strongpassoword1' };
    expect(() => verifyFields(fields)).not.toThrowError();
  });

  it('throw a error because a field is empty', () => {
    const fields = { name: '', password: '' };
    expect(() => verifyFields(fields)).toThrowError(/A value is missing/);
  });
});
