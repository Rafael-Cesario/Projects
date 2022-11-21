import { useEffect, useState } from 'react';

export const useUserAuthStatus = (defaultValue: boolean) => {
  const [state, setState] = useState(defaultValue);

  const fetchToken = async () => {
    const fetchToken = await fetch('/api/token');
    const { token } = await fetchToken.json();
    if (!token) return;

    setState(true);
  };

  useEffect(() => {
    fetchToken();
  }, []);

  return [state, setState] as [boolean, (newState: boolean) => void];
};
