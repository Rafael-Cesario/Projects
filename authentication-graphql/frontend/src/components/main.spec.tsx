/* eslint-disable @typescript-eslint/no-empty-function */
import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import { Main } from './main';
import { UserContext } from '../context/userContext';

const renderComponent = (contextValues: { userAuthStatus: boolean }) => {
  const fakeContextValues = {
    createUser: async () => {},
    doLogin: async () => {},
    userAuthStatus: false,
    setUserAuthStatus: () => {},
  };

  return render(
    <UserContext.Provider value={{ ...fakeContextValues, ...contextValues }}>
      <Main />
    </UserContext.Provider>
  );
};

describe('<Main/>', () => {
  it('tells the user to do login', () => {
    const { getAllByRole } = renderComponent({ userAuthStatus: false });
    const mainText = getAllByRole('heading');

    expect(mainText.length).toBe(1);
    expect(mainText[0].textContent).toBe('Faça login para descobrir um segredo');
  });

  it('tells a secret to the user', () => {
    const { getAllByRole } = renderComponent({ userAuthStatus: true });
    const mainText = getAllByRole('heading');

    expect(mainText.length).toBe(1);
    expect(mainText[0].textContent).toBe('Segredo super Secreto');
  });
});
