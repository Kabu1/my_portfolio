import { _ as __nuxt_component_0 } from "./post-c4b3e8ca.js";
import { a as useAsyncData } from "../server.mjs";
import { q as queryContent } from "./query-66f43737.js";
import { withAsyncContext, unref, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
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
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const {
      data: posts
    } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "posts",
      () => queryContent("/blog").find()
    )), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_post = __nuxt_component_0;
      _push(`<!--[--><h1 class="text-3xl my-8">Blog Posts</h1> Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis omnis odio, dolorem sunt ipsa facilis. Dignissimos ratione qui accusamus, optio vitae nisi magni porro quos perferendis voluptatem, temporibus, expedita modi? <section class="grid md:grid-cols-3 mt-8 gap-10">`);
      _push(ssrRenderComponent(_component_post, { posts: unref(posts) }, null, _parent));
      _push(`</section><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-88ba34b8.js.map
