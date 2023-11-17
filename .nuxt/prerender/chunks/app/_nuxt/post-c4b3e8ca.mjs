import { _ as __nuxt_component_0$1 } from './nuxt-link-48225c8e.mjs';
import { useSSRContext, withCtx, createVNode, createTextVNode } from 'file:///Users/bensonmboci/Desktop/project/portfolio/portfolio/node_modules/vue/index.mjs';
import { ssrRenderList, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'file:///Users/bensonmboci/Desktop/project/portfolio/portfolio/node_modules/vue/server-renderer/index.mjs';

const _sfc_main = {
  __name: "post",
  __ssrInlineRender: true,
  props: ["posts"],
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<!--[-->`);
      ssrRenderList(props.posts, (post) => {
        _push(`<div class="bg-white rounded-lg shadow-md overflow-hidden hover:opacity-75">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: post._path
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", `/images/blog/${post.cover}`)} alt="Blog Post Cover Image" class="w-full h-48 object-cover"${_scopeId}>`);
            } else {
              return [
                createVNode("img", {
                  src: `/images/blog/${post.cover}`,
                  alt: "Blog Post Cover Image",
                  class: "w-full h-48 object-cover"
                }, null, 8, ["src"])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`<div class="p-6"><h2 class="text-xl font-bold mb-2">${ssrInterpolate(post.title)}</h2><p class="text-gray-700 mb-4">${ssrInterpolate(post.description)}</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: post._path,
          class: "inline-block bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded float-right mb-8"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Read More `);
            } else {
              return [
                createTextVNode("Read More ")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div>`);
      });
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/post.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main;

export { __nuxt_component_0 as _ };
//# sourceMappingURL=post-c4b3e8ca.mjs.map
