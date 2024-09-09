import { HttpInterceptorFn } from '@angular/common/http';

// Interceptor HTTP funcional
export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const authToken = localStorage.getItem('authToken');
  
  if (authToken) {
    const authReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${authToken}`)
    });
    return next(authReq); // Pasar la solicitud clonada
  }

  return next(req); // Pasar la solicitud original si no hay token
};
