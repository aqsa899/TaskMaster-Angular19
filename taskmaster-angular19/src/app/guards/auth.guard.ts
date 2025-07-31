import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = () => {
  const token = localStorage.getItem('auth_token');
  const router = inject(Router);

  return token ? true : router.parseUrl('/login');
};