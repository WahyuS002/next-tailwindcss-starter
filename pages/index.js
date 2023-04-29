import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Next Tailwindcss Starter Template</title>
        <meta name="description" content="Next Tailwindcss Starter Template" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex min-h-screen items-center justify-center">
        <h1>Hello World</h1>
      </main>
    </>
  );
}
