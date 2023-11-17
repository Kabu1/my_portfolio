import { d as useAsyncQuery, b as __nuxt_component_0 } from "../server.mjs";
import { gql } from "graphql-tag";
import { withAsyncContext, unref, useSSRContext } from "vue";
import { ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
import "ufo";
import "destr";
import "defu";
import "klona";
import "devalue";
import "tslib";
import "ts-invariant";
import "zen-observable-ts";
import "symbol-observable";
import "cookie-es";
import "ohash";
import "graphql";
import "optimism";
import "@wry/equality";
import "@wry/trie";
import "@headlessui/vue";
import "@heroicons/vue/24/outline";
import "@iconify/vue/dist/offline";
import "@iconify/vue";
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
export {
  _sfc_main as default
};
//# sourceMappingURL=projects-801313f3.js.map
