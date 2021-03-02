import {useEffect} from 'react';
import State, {use} from 'use-minimal-state';

let state = State({});

export function useLocation() {
  use(state);
  useEffect(() => {
    let updater = () => state.update();
    window.addEventListener('popstate', updater);
    return () => window.removeEventListener('popstate', updater);
  }, []);
  return location;
}

export function usePath() {
  return useLocation()
    .pathname.split('/')
    .filter(p => p);
}

export function navigate(route: string) {
  history.pushState(null, '', route);
  state.update();
}
