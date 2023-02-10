import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html className="dark" lang="en">
      <Head />
      <body className="bg-gray-900 text-white">
        <Main />
        <NextScript />
        <script src="../node_modules/flowbite/dist/flowbite.min.js"></script>
      </body>
    </Html>
  );
}
