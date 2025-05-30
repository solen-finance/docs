import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  head: (
    <>
      <title>Docs | EDUChain Yield</title>
      <meta name="description" content="EDUChain Yield Documentation" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </>
  ),
  logo: (
    <>
      <span style={{ marginLeft: ".4em", fontWeight: 500 }}>EDUChain Yield</span>
    </>
  ),
  project: {
    link: "https://github.com/educhain-yield",
  },
  docsRepositoryBase: "https://github.com/educhain-yield/docs",
  footer: {
    content: "EDUChain Yield Documentation",
  },
};

export default config;
