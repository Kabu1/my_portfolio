import _sfc_main$1 from "./ContentRenderer-98373aa3.js";
import { u as useRoute, a as useAsyncData, b as __nuxt_component_0 } from "../server.mjs";
import { q as queryContent } from "./query-66f43737.js";
import { withAsyncContext, unref, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import "./ContentRendererMarkdown-5d36e0c2.js";
import "destr";
import "scule";
import "property-information";
import "devalue";
import "defu";
import "klona";
import "./preview-eb8d2e1c.js";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
import "ufo";
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
  __name: "[...slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const {
      path
    } = useRoute();
    const {
      data
    } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(`content-${path}`, () => {
      return queryContent().where({
        _path: path
      }).findOne();
    })), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ContentRenderer = _sfc_main$1;
      const _component_Icon = __nuxt_component_0;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_ContentRenderer, {
        value: unref(data),
        class: "prose my-10 mx-auto max-w-7xl"
      }, null, _parent));
      _push(`<div class="my-8"><!--[-->`);
      ssrRenderList(unref(data).tags, (tag) => {
        _push(`<a${ssrRenderAttr("href", `/blog/tags/${tag}`)} class="text-sm font-semibold inline-block py-2 px-4 rounded-lg text-gray-100 bg-blue-500 uppercase last:mr-0 mr-4">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "pajamas:label",
          size: "1.5rem",
          class: "text-gray-100 mr-2"
        }, null, _parent));
        _push(` ${ssrInterpolate(tag)}</a>`);
      });
      _push(`<!--]--></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/[...slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_...slug_-b3ce3ab2.js.map
