/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SHOPIFY_URL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
