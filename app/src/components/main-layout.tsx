export default function MainLayout(props: { children: JSX.Element }) {
  return (
    <html>
      <head>
        <meta charset='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link href='./public/styles.css' rel='stylesheet' />
        <script src='https://unpkg.com/htmx.org@1.9.12'></script>
      </head>
      <body
        class='my-12'
        hx-trigger='load'
        hx-get='/api/todos'
        hx-target='#todo-list'
      >
        <div class='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div class='mx-auto max-w-3xl'>
            <h1 class='text-3xl text-blue-500'>Simple TODO app</h1>
            <div class='py-12'>{props.children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
