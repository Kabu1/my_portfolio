import { ssrRenderAttrs, ssrRenderSlot } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "../server.mjs";
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
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<strong${ssrRenderAttrs(_attrs)}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</strong>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseStrong.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ProseStrong = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  ProseStrong as default
};
//# sourceMappingURL=ProseStrong-3aee53eb.js.map
