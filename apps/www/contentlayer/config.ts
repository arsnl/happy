import { makeSource } from "contentlayer/source-files";
import { Doc } from "./document-types/doc";
import { ESLintConfig } from "./document-types/eslint-config";
import { Rule } from "./document-types/rule";
import { RuleVersion } from "./document-types/rule-version";
import { Version } from "./document-types/version";
import { mdxOptions } from "./mdx-options";

export const contentLayerConfig = makeSource({
  contentDirPath: "./src/content",
  documentTypes: [Doc, ESLintConfig, Rule, RuleVersion, Version],
  contentDirExclude: ["rule-versions/README.md", "versions/README.md"],
  mdx: mdxOptions,
});
