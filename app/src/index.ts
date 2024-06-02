import { Elysia } from 'elysia';
import { html } from '@elysiajs/html';
import pageRouter from './routers/page';
import staticPlugin from '@elysiajs/static';
import apiRouter from './routers/api';
import { tailwind } from '@gtramontina.com/elysia-tailwind';

const port = process.env['PORT'] || '8080';
const app = new Elysia()
  .use(staticPlugin())
  .use(html())
  .use(
    tailwind({
      path: '/public/styles.css',
      source: './src/styles.css',
      config: './tailwind.config.js',
    })
  )
  .use(pageRouter)
  .use(apiRouter)
  .onError((error) => {
    return `URL "${error.request.url}" not found`;
  })
  .listen(port);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
