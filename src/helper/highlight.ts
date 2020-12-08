import hl from "highlight.js/lib/core";

// eslint-disable-next-line @typescript-eslint/no-var-requires
hl.registerLanguage("html", require("highlight.js/lib/languages/xml"));

export default hl;
