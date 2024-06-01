import { Elysia } from 'elysia';
import { html } from '@elysiajs/html';
import pageRouter from './routers/page';
import staticPlugin from '@elysiajs/static';
import apiRouter from './routers/api';

const app = new Elysia();

app.use(staticPlugin());
app.use(html());
app.use(pageRouter);
app.use(apiRouter);

const port = process.env.PORT || '8080';
app.listen(port);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
