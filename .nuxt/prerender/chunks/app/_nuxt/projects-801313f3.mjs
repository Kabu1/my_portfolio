import { d as useAsyncQuery, b as __nuxt_component_0 } from '../server.mjs';
import { gql } from 'file:///Users/bensonmboci/Desktop/project/portfolio/portfolio/node_modules/graphql-tag/main.js';
import { withAsyncContext, unref, useSSRContext } from 'file:///Users/bensonmboci/Desktop/project/portfolio/portfolio/node_modules/vue/index.mjs';
import { ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from 'file:///Users/bensonmboci/Desktop/project/portfolio/portfolio/node_modules/vue/server-renderer/index.mjs';
import 'file:///Users/bensonmboci/Desktop/project/portfolio/portfolio/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/bensonmboci/Desktop/project/portfolio/portfolio/node_modules/hookable/dist/index.mjs';
import 'file:///Users/bensonmboci/Desktop/project/portfolio/portfolio/node_modules/unctx/dist/index.mjs';
import 'file:///Users/bensonmboci/Desktop/project/portfolio/portfolio/node_modules/unhead/dist/index.mjs';
import 'file:///Users/bensonmboci/Desktop/project/portfolio/portfolio/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/bensonmboci/Desktop/project/portfolio/portfolio/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/bensonmboci/Desktop/project/portfolio/portfolio/node_modules/h3/dist/index.mjs';
import 'file:///Users/bensonmboci/Desktop/project/portfolio/portfolio/node_modules/ufo/dist/index.mjs';
import 'file:///Users/bensonmboci/Desktop/project/portfolio/portfolio/node_modules/destr/dist/index.mjs';
import 'file:///Users/bensonmboci/Desktop/project/portfolio/portfolio/node_modules/defu/dist/defu.mjs';
import 'file:///Users/bensonmboci/Desktop/project/portfolio/portfolio/node_modules/klona/dist/index.mjs';
import 'file:///Users/bensonmboci/Desktop/project/portfolio/portfolio/node_modules/tslib/modules/index.js';
import 'file:///Users/bensonmboci/Desktop/project/portfolio/portfolio/node_modules/ts-invariant/lib/invariant.cjs';
import 'file:///Users/bensonmboci/Desktop/project/portfolio/portfolio/node_modules/zen-observable-ts/index.cjs';
import 'file:///Users/bensonmboci/Desktop/project/portfolio/portfolio/node_modules/cookie-es/dist/index.mjs';
import 'file:///Users/bensonmboci/Desktop/project/portfolio/portfolio/node_modules/ohash/dist/index.mjs';
import 'file:///Users/bensonmboci/Desktop/project/portfolio/portfolio/node_modules/graphql/index.js';
import 'file:///Users/bensonmboci/Desktop/project/portfolio/portfolio/node_modules/optimism/lib/bundle.cjs';
import 'file:///Users/bensonmboci/Desktop/project/portfolio/portfolio/node_modules/@wry/equality/lib/bundle.cjs';
import 'file:///Users/bensonmboci/Desktop/project/portfolio/portfolio/node_modules/@wry/trie/lib/bundle.cjs';
import 'file:///Users/bensonmboci/Desktop/project/portfolio/portfolio/node_modules/@headlessui/vue/dist/headlessui.esm.js';
import 'file:///Users/bensonmboci/Desktop/project/portfolio/portfolio/node_modules/@heroicons/vue/24/outline/esm/index.js';
import 'file:///Users/bensonmboci/Desktop/project/portfolio/portfolio/node_modules/@iconify/vue/dist/offline.mjs';
import 'file:///Users/bensonmboci/Desktop/project/portfolio/portfolio/node_modules/@iconify/vue/dist/iconify.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file:///Users/bensonmboci/Desktop/project/portfolio/portfolio/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/bensonmboci/Desktop/project/portfolio/portfolio/node_modules/scule/dist/index.mjs';
import 'file:///Users/bensonmboci/Desktop/project/portfolio/portfolio/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/bensonmboci/Desktop/project/portfolio/portfolio/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/bensonmboci/Desktop/project/portfolio/portfolio/node_modules/unstorage/drivers/memory.mjs';
import 'file:///Users/bensonmboci/Desktop/project/portfolio/portfolio/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/bensonmboci/Desktop/project/portfolio/portfolio/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/bensonmboci/Desktop/project/portfolio/portfolio/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/bensonmboci/Desktop/project/portfolio/portfolio/node_modules/pathe/dist/index.mjs';
import 'file:///Users/bensonmboci/Desktop/project/portfolio/portfolio/node_modules/shikiji/dist/index.mjs';
import 'file:///Users/bensonmboci/Desktop/project/portfolio/portfolio/node_modules/unified/index.js';
import 'file:///Users/bensonmboci/Desktop/project/portfolio/portfolio/node_modules/mdast-util-to-string/index.js';
import 'file:///Users/bensonmboci/Desktop/project/portfolio/portfolio/node_modules/micromark/index.js';
import 'file:///Users/bensonmboci/Desktop/project/portfolio/portfolio/node_modules/unist-util-stringify-position/index.js';
import 'file:///Users/bensonmboci/Desktop/project/portfolio/portfolio/node_modules/micromark-util-character/index.js';
import 'file:///Users/bensonmboci/Desktop/project/portfolio/portfolio/node_modules/micromark-util-chunked/index.js';
import 'file:///Users/bensonmboci/Desktop/project/portfolio/portfolio/node_modules/micromark-util-resolve-all/index.js';
import 'file:///Users/bensonmboci/Desktop/project/portfolio/portfolio/node_modules/micromark-util-sanitize-uri/index.js';
import 'file:///Users/bensonmboci/Desktop/project/portfolio/portfolio/node_modules/slugify/slugify.js';
import 'file:///Users/bensonmboci/Desktop/project/portfolio/portfolio/node_modules/remark-parse/index.js';
import 'file:///Users/bensonmboci/Desktop/project/portfolio/portfolio/node_modules/remark-rehype/index.js';
import 'file:///Users/bensonmboci/Desktop/project/portfolio/portfolio/node_modules/remark-mdc/dist/index.mjs';
import 'file:///Users/bensonmboci/Desktop/project/portfolio/portfolio/node_modules/hast-util-to-string/index.js';
import 'file:///Users/bensonmboci/Desktop/project/portfolio/portfolio/node_modules/github-slugger/index.js';
import 'file:///Users/bensonmboci/Desktop/project/portfolio/portfolio/node_modules/detab/index.js';
import 'file:///Users/bensonmboci/Desktop/project/portfolio/portfolio/node_modules/remark-emoji/index.js';
import 'file:///Users/bensonmboci/Desktop/project/portfolio/portfolio/node_modules/remark-gfm/index.js';
import 'file:///Users/bensonmboci/Desktop/project/portfolio/portfolio/node_modules/rehype-external-links/index.js';
import 'file:///Users/bensonmboci/Desktop/project/portfolio/portfolio/node_modules/rehype-sort-attribute-values/index.js';
import 'file:///Users/bensonmboci/Desktop/project/portfolio/portfolio/node_modules/rehype-sort-attributes/index.js';
import 'file:///Users/bensonmboci/Desktop/project/portfolio/portfolio/node_modules/rehype-raw/index.js';
import 'file:///Users/bensonmboci/Desktop/project/portfolio/portfolio/node_modules/unist-util-visit/index.js';

const _sfc_main = {
  __name: "projects",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const query = gql`
{
  viewer {
    repositories(first: 8, orderBy: {field: CREATED_AT, direction: DESC}) {
      totalCount
      nodes {
        id
        name
        createdAt
        forks {
          totalCount
        }
        watchers {
          totalCount
        }
        stargazers {
          totalCount
        }
      }
    }
  }
}
`;
    const { data } = ([__temp, __restore] = withAsyncContext(() => useAsyncQuery(query)), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_Icon = __nuxt_component_0;
      _push(`<!--[--><h1 class="text-3xl my-8">Projects</h1><p class="text-lg mb-8">Here are some of my projects on GitHub hhhh.</p><section class="grid grid-cols-2 gap-10"><!--[-->`);
      ssrRenderList((_a = unref(data)) == null ? void 0 : _a.viewer.repositories.nodes, (project) => {
        _push(`<div class="p-8 border-4 my-4 rounded-lg hover:bg-gray-50"><a${ssrRenderAttr("href", project.url)} target="_blank"><h2 class="text-2xl text-indigo-800 font-semibold mb-2 hover:underline">${ssrInterpolate(project.name)}</h2></a><p>${ssrInterpolate(project.description)}</p><div class="mt-4">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "fontisto:star",
          size: "1.1rem",
          class: "text-indigo-700"
        }, null, _parent));
        _push(` Stars: ${ssrInterpolate(project.stargazers.totalCount)} `);
        _push(ssrRenderComponent(_component_Icon, {
          name: "system-uicons:branch",
          size: "1.1rem",
          class: "text-indigo-800"
        }, null, _parent));
        _push(` Forks: ${ssrInterpolate(project.forks.totalCount)} `);
        _push(ssrRenderComponent(_component_Icon, {
          name: "system-uicons:eye",
          size: "1.1rem",
          class: "text-indigo-700"
        }, null, _parent));
        _push(` Watchers: ${ssrInterpolate(project.watchers.totalCount)}</div></div>`);
      });
      _push(`<!--]--></section><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=projects-801313f3.mjs.map
