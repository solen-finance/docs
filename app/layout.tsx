import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";

export const metadata = {
  // Define your metadata here
  // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
};

const navbar = (
  <Navbar
    logo={
      <span>
        <img src="/logo.png" alt="Solen Finance" style={{ height: 32, verticalAlign: "middle", marginRight: 8 }} />
      </span>
    }
  // ... Your additional navbar options
  />
);
const footer = <Footer>Solen Finance Documentation</Footer>;

export default async function RootLayout({ children }) {
  return (
    <html
      // Not required, but good for SEO
      lang="en"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head
      // ... Your additional head options
      >
        <title>Docs | Solen Finance</title>
        <meta name="description" content="Solen Finance Documentation" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/solen-finance/docs"
          footer={footer}
        // ... Your additional layout options
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
