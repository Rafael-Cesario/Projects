import { describe, it, expect } from 'vitest';
import { verifyFields } from '../../src/utils/verifyFields';

describe('verify the receives values', () => {
  const inputs = { name: null, password: null };

  it('should pass because have all values', () => {
    const fields = { name: 'Rafael', password: 'Strongpassoword1' };
    expect(() => verifyFields(fields, inputs)).not.toThrowError();
  });

  it('throw a error because a field is empty', () => {
    const fields = { name: '', password: '' };
    expect(() => verifyFields(fields, inputs)).toThrowError(/A value is missing/);
  });
});
