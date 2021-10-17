import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEvent,
  HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { finalize, tap } from 'rxjs/operators';

@Injectable()
export class LogHeadersInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log(`HTTP: Log headers:`);
    let headerList: { key: string; values: string }[] = [];
    req.headers.keys().map((key) => {
      headerList.push({ key, values: req.headers.getAll(key).toString() });
    });
    console.table(headerList);
    const started = Date.now();
    let ok: string;
    return next.handle(req).pipe(
      tap(
        (event) => (ok = event instanceof HttpResponse ? 'succeeded' : ''),
        (error) => (ok = 'failed')
      ),
      finalize(() => {
        const elapsed = Date.now() - started;
        console.log(
          `${req.method} "${req.urlWithParams}" \n\t ${ok} in ${elapsed} ms.`
        );
      })
    );
  }
}
