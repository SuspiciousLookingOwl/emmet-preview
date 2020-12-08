declare const hljs: HLJSApi;

type HLJSApi = PublicApi;

interface PublicApi {
  highlight: (languageName: string, code: string) => HighlightResult;
  getLanguage: (languageName: string) => Language | undefined;
  registerLanguage: (languageName: string, module: unknown) => void;
}

interface HighlightResult {
  value: string;
  language?: string;
}
type AutoHighlightResult = HighlightResult;

interface Language {
  name?: string;
}

declare module "highlight.js" {
  export = hljs;
}

declare module "highlight.js/lib/core" {
  export = hljs;
}
