{"parsed":{"_path":"/blog/vue-3-3","_dir":"blog","_draft":false,"_partial":false,"_locale":"","title":"Announcing Vue 3.3","description":"This release is focused on developer experience improvements and bug fixes.","date":"2023-05-24T00:00:00.000Z","cover":"neom-9f7oiGARGIg-unsplash.jpg","tags":["vue"],"body":{"type":"root","children":[{"type":"element","tag":"h1","props":{"id":"announcing-vue-33"},"children":[{"type":"text","value":"Announcing Vue 3.3"}]},{"type":"element","tag":"p","props":{},"children":[{"type":"text","value":"Today we're excited to announce the release of Vue 3.3 \"Rurouni Kenshin\"!"}]},{"type":"element","tag":"p","props":{},"children":[{"type":"text","value":"This release is focused on developer experience improvements - in particular, SFC "},{"type":"element","tag":"script","props":{"setup":""},"children":[{"type":"text","value":" usage with TypeScript. Together with the 1.6 release of Vue Language Tools (previously known as Volar), we have resolved many long-standing pain points when using Vue with TypeScript."}]}]},{"type":"element","tag":"p","props":{},"children":[{"type":"text","value":"This post provides an overview of the highlighted features in 3.3. For the full list of changes, please consult the full changelog on GitHub."}]},{"type":"element","tag":"h2","props":{"id":"script-setup-typescript-dx-improvements"},"children":[{"type":"element","tag":"code","props":{"className":""},"children":[{"type":"text","value":"<script setup>"}]},{"type":"text","value":" + TypeScript DX Improvements"}]},{"type":"element","tag":"h3","props":{"id":"imported-and-complex-types-support-in-macros"},"children":[{"type":"text","value":"Imported and Complex Types Support in Macros"}]},{"type":"element","tag":"p","props":{},"children":[{"type":"text","value":"Previously, types used in the type parameter position of defineProps and defineEmits were limited to local types, and only supported type literals and interfaces. This is because Vue needs to be able to analyze the properties on the props interface in order to generate corresponding runtime options."}]},{"type":"element","tag":"p","props":{},"children":[{"type":"text","value":"This limitation is now resolved in 3.3. The compiler can now resolve imported types, and supports a limited set of complex types:"}]},{"type":"element","tag":"pre","props":{"className":"language-vue shiki shiki-themes nord","code":"<script setup lang=\"ts\">\nimport type { Props } from \"./foo\";\n\n// imported + intersection type\ndefineProps<Props & { extraProp?: string }>();\n</script>\n","language":"vue","meta":"","style":""},"children":[{"type":"element","tag":"code","props":{"__ignoreMap":""},"children":[{"type":"element","tag":"span","props":{"class":"line","line":1},"children":[{"type":"element","tag":"span","props":{"style":"--shiki-default:#81A1C1"},"children":[{"type":"text","value":"<script"}]},{"type":"element","tag":"span","props":{"style":"--shiki-default:#8FBCBB"},"children":[{"type":"text","value":" setup"}]},{"type":"element","tag":"span","props":{"style":"--shiki-default:#8FBCBB"},"children":[{"type":"text","value":" lang"}]},{"type":"element","tag":"span","props":{"style":"--shiki-default:#ECEFF4"},"children":[{"type":"text","value":"="}]},{"type":"element","tag":"span","props":{"style":"--shiki-default:#ECEFF4"},"children":[{"type":"text","value":"\""}]},{"type":"element","tag":"span","props":{"style":"--shiki-default:#A3BE8C"},"children":[{"type":"text","value":"ts"}]},{"type":"element","tag":"span","props":{"style":"--shiki-default:#ECEFF4"},"children":[{"type":"text","value":"\""}]},{"type":"element","tag":"span","props":{"style":"--shiki-default:#81A1C1"},"children":[{"type":"text","value":">\n"}]}]},{"type":"element","tag":"span","props":{"class":"line","line":2},"children":[{"type":"element","tag":"span","props":{"style":"--shiki-default:#81A1C1"},"children":[{"type":"text","value":"import"}]},{"type":"element","tag":"span","props":{"style":"--shiki-default:#81A1C1"},"children":[{"type":"text","value":" type"}]},{"type":"element","tag":"span","props":{"style":"--shiki-default:#ECEFF4"},"children":[{"type":"text","value":" {"}]},{"type":"element","tag":"span","props":{"style":"--shiki-default:#D8DEE9"},"children":[{"type":"text","value":" Props"}]},{"type":"element","tag":"span","props":{"style":"--shiki-default:#ECEFF4"},"children":[{"type":"text","value":" }"}]},{"type":"element","tag":"span","props":{"style":"--shiki-default:#81A1C1"},"children":[{"type":"text","value":" from"}]},{"type":"element","tag":"span","props":{"style":"--shiki-default:#ECEFF4"},"children":[{"type":"text","value":" \""}]},{"type":"element","tag":"span","props":{"style":"--shiki-default:#A3BE8C"},"children":[{"type":"text","value":"./foo"}]},{"type":"element","tag":"span","props":{"style":"--shiki-default:#ECEFF4"},"children":[{"type":"text","value":"\""}]},{"type":"element","tag":"span","props":{"style":"--shiki-default:#81A1C1"},"children":[{"type":"text","value":";\n"}]}]},{"type":"element","tag":"span","props":{"class":"line","line":3},"children":[{"type":"element","tag":"span","props":{"emptyLinePlaceholder":true},"children":[{"type":"text","value":"\n"}]}]},{"type":"element","tag":"span","props":{"class":"line","line":4},"children":[{"type":"element","tag":"span","props":{"style":"--shiki-default:#616E88"},"children":[{"type":"text","value":"// imported + intersection type\n"}]}]},{"type":"element","tag":"span","props":{"class":"line","line":5},"children":[{"type":"element","tag":"span","props":{"style":"--shiki-default:#88C0D0"},"children":[{"type":"text","value":"defineProps"}]},{"type":"element","tag":"span","props":{"style":"--shiki-default:#ECEFF4"},"children":[{"type":"text","value":"<"}]},{"type":"element","tag":"span","props":{"style":"--shiki-default:#8FBCBB"},"children":[{"type":"text","value":"Props"}]},{"type":"element","tag":"span","props":{"style":"--shiki-default:#81A1C1"},"children":[{"type":"text","value":" &"}]},{"type":"element","tag":"span","props":{"style":"--shiki-default:#ECEFF4"},"children":[{"type":"text","value":" {"}]},{"type":"element","tag":"span","props":{"style":"--shiki-default:#D8DEE9FF"},"children":[{"type":"text","value":" extraProp"}]},{"type":"element","tag":"span","props":{"style":"--shiki-default:#81A1C1"},"children":[{"type":"text","value":"?:"}]},{"type":"element","tag":"span","props":{"style":"--shiki-default:#8FBCBB"},"children":[{"type":"text","value":" string"}]},{"type":"element","tag":"span","props":{"style":"--shiki-default:#ECEFF4"},"children":[{"type":"text","value":" }>"}]},{"type":"element","tag":"span","props":{"style":"--shiki-default:#D8DEE9FF"},"children":[{"type":"text","value":"()"}]},{"type":"element","tag":"span","props":{"style":"--shiki-default:#81A1C1"},"children":[{"type":"text","value":";\n"}]}]},{"type":"element","tag":"span","props":{"class":"line","line":6},"children":[{"type":"element","tag":"span","props":{"style":"--shiki-default:#81A1C1"},"children":[{"type":"text","value":"</script>\n"}]}]}]}]},{"type":"element","tag":"p","props":{},"children":[{"type":"text","value":"Do note that complex types support is AST-based and therefore not 100% comprehensive. Some complex types that require actual type analysis, e.g. conditional types, are not supported. You can use conditional types for the type of a single prop, but not the entire props object."}]},{"type":"element","tag":"style","props":{},"children":[{"type":"text","value":"html .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}html .default .shiki span {color: var(--shiki-default);background: var(--shiki-default-bg);font-style: var(--shiki-default-font-style);font-weight: var(--shiki-default-font-weight);text-decoration: var(--shiki-default-text-decoration);}"}]}],"toc":{"title":"","searchDepth":2,"depth":2,"links":[{"id":"script-setup-typescript-dx-improvements","depth":2,"text":"<script setup> + TypeScript DX Improvements","children":[{"id":"imported-and-complex-types-support-in-macros","depth":3,"text":"Imported and Complex Types Support in Macros"}]}]}},"_type":"markdown","_id":"content:blog:vue-3-3.md","_source":"content","_file":"blog/vue-3-3.md","_extension":"md"},"hash":"VbWipke2kZ"}