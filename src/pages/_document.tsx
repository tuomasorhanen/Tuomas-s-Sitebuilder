import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html className="dark" lang="en">
      <Head />
      <body className="bg-[#000b33] text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
