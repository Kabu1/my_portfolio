import{_ as n}from"./post.26880800.js";import{f as l,c,a as s,b as i,g as r,F as p,j as m,h as d,o as h}from"./entry.9c5de21a.js";import{q as _}from"./query.b26ca47c.js";import"./nuxt-link.1e978d73.js";import"./preview.074bd19c.js";const f=""+new URL("blackavatar.1a63cf8c.jpeg",import.meta.url).href,g=m('<section><h1 class="text-5xl font-bold mt-20 font-stylish"> 👋 𝐻𝒾 𝓉𝒽𝑒𝓇𝑒, 𝐼&#39;𝓂 𝐵𝑒𝓃𝓈𝑜𝓃 𝑀𝒷𝑜𝒸𝒾! </h1><p class="text-base text-gray-900 p-2 italic">Vuejs Developer at Home</p></section><section class="flex flex-col md:flex-row"><div class="md:w-3/4"><h2 class="text-3xl font-bold mt-8">My Story</h2><p class="text-lg py-2"> Played a pivotal role in the analysis and planning phase, working closely with team members to assess the feasibility, benefits, and challenges of adopting the new technology stack. </p><p class="text-lg py-2"> Played a pivotal role in the analysis and planning phase, working closely with team members to assess the feasibility, benefits, and challenges of adopting the new technology stack. </p></div><img src="'+f+'" alt="myavatar" class="w-1/2 md:max-w-sm p-8 mx-auto"></section>',2),y=s("h2",{class:"text-3xl font-bold mt-8"}," Latest Blog Post",-1),x={class:"grid md:grid-cols-3 pt-8 gap-10 mb-5"},N={__name:"index",async setup(b){let t,e;const{data:a}=([t,e]=l(()=>d("latest-posts",()=>_("/blog").sort({data:1}).limit(3).find())),t=await t,e(),t);return(u,w)=>{const o=n;return h(),c(p,null,[g,s("section",null,[y,s("div",x,[i(o,{posts:r(a)},null,8,["posts"])])])],64)}}};export{N as default};