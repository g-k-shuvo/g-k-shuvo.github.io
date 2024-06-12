import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <meta charSet='utf-8' />
        <meta title="Golam Kibria's Personal Website" />
        <meta
          name='description'
          content="Golam Kibria's personal website. A software engineer based in Sylhet, Bangladesh."
        />
        <meta name='author' content='Golam Kibria' />
        <meta
          name='keywords'
          content='software engineer, web developer, freelancer, frontend developer, backend developer, full stack developer '
        />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
