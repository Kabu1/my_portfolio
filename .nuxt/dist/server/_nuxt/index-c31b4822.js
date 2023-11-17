import { _ as __nuxt_component_0 } from "./post-c4b3e8ca.js";
import { a as useAsyncData } from "../server.mjs";
import { q as queryContent } from "./query-66f43737.js";
import { withAsyncContext, unref, useSSRContext } from "vue";
import { ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import "./nuxt-link-48225c8e.js";
import "ufo";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
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
import "./preview-eb8d2e1c.js";
const _imports_0 = "" + __buildAssetsURL("blackavatar.1a63cf8c.jpeg");
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: posts } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "latest-posts",
      () => queryContent("/blog").sort({ data: 1 }).limit(3).find()
    )), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_post = __nuxt_component_0;
      _push(`<!--[--><section><h1 class="text-5xl font-bold mt-20 font-stylish"> 👋 𝐻𝒾 𝓉𝒽𝑒𝓇𝑒, 𝐼&#39;𝓂 𝐵𝑒𝓃𝓈𝑜𝓃 𝑀𝒷𝑜𝒸𝒾! </h1><p class="text-base text-gray-900 p-2 italic">Vuejs Developer at Home</p></section><section class="flex flex-col md:flex-row"><div class="md:w-3/4"><h2 class="text-3xl font-bold mt-8">My Story</h2><p class="text-lg py-2"> Played a pivotal role in the analysis and planning phase, working closely with team members to assess the feasibility, benefits, and challenges of adopting the new technology stack. </p><p class="text-lg py-2"> Played a pivotal role in the analysis and planning phase, working closely with team members to assess the feasibility, benefits, and challenges of adopting the new technology stack. </p></div><img${ssrRenderAttr("src", _imports_0)} alt="myavatar" class="w-1/2 md:max-w-sm p-8 mx-auto"></section><section><h2 class="text-3xl font-bold mt-8"> Latest Blog Post</h2><div class="grid md:grid-cols-3 pt-8 gap-10 mb-5">`);
      _push(ssrRenderComponent(_component_post, { posts: unref(posts) }, null, _parent));
      _push(`</div></section><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-c31b4822.js.map
