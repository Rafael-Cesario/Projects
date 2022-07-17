import { render } from '@testing-library/react';
import { describe, it, vi } from 'vitest';
import { sendErrorMessage } from '../../src/utils/sendErrorMessage';

const FakeComponent = () => {
  return (
    <div>
      <span role={'span'}>Nome</span>
      <input type="text" />
    </div>
  );
};

describe('Send Error Message', () => {
  vi.useFakeTimers();

  const { getByRole } = render(<FakeComponent />);

  const ref = { current: getByRole('textbox') as HTMLInputElement };
  const input = getByRole('textbox');
  const span = getByRole('span');

  it('add a error class on the input', () => {
    sendErrorMessage('name', ref, 'Nome não foi preenchido');
    expect(input.classList[0]).toBe('error');
  });

  it('inform the error in the span element', () => {
    expect(span.innerText).toBe('Nome não foi preenchido');
  });

  it('remove the error class after 20 seconds', () => {
    vi.runAllTimers();
    expect(input.classList[0]).not.toBe('error');
  });

  it('returns the original value to the span', () => {
    expect(span.innerText).toBe('Nome');
  });
});
