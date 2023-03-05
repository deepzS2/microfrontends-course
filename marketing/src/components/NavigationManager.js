import { useEffect } from 'react';
import { matchRoutes, useLocation, useNavigate } from 'react-router-dom';

import { routes } from '../routing/routes';

export default function NavigationManager({ children }) {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    function containerNavigationHandler(event) {
      const pathname = event.detail

      if (location.pathname === pathname || !matchRoutes(routes, { pathname })) {
        return
      }

      navigate(pathname)
    }

    window.addEventListener("[container] navigated", containerNavigationHandler);

    return () => {
      window.removeEventListener("[container] navigated", containerNavigationHandler);
    };
  }, [location])

  useEffect(() => {
    window.dispatchEvent(
      new CustomEvent("[marketing] navigated", { detail: location.pathname })
    )
  }, [location])

  return children
}