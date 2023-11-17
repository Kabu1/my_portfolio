<script setup> 
const {data :posts} = await useAsyncData('latest-posts', () => 
    queryContent('/blog')
    .sort({data:1})
    .limit(3)
    .find()
)
console.log('are we here', posts)

</script>
<template>
<section>
    <h1 class="text-5xl font-bold mt-20 font-stylish"> 👋 𝐻𝒾 𝓉𝒽𝑒𝓇𝑒, 𝐼'𝓂 𝐵𝑒𝓃𝓈𝑜𝓃 𝑀𝒷𝑜𝒸𝒾!
    </h1>
    <p class="text-base text-gray-900 p-2 italic">Vuejs Developer at Home</p>
</section>
<section class="flex flex-col md:flex-row">
    <div class="md:w-3/4">
        <h2 class="text-3xl font-bold mt-8">My Story</h2>
        <p class="text-lg py-2">
            Played a pivotal role in the analysis and planning phase, working
            closely with team members to assess the feasibility, benefits,
            and challenges of adopting the new technology stack.
        </p>
        <p class="text-lg py-2">
            Played a pivotal role in the analysis and planning phase, working
            closely with team members to assess the feasibility, benefits,
            and challenges of adopting the new technology stack.
        </p>
    </div>
    <img src="~/assets/img/blackavatar.jpeg" alt="myavatar" class="w-1/2 md:max-w-sm p-8 mx-auto">
</section>
<section>
    <h2 class="text-3xl font-bold mt-8"> Latest Blog Post</h2>
    <div class="grid md:grid-cols-3 pt-8 gap-10 mb-5">
        <post :posts="posts"/>
    </div>
</section>
</template> 

<style>

</style>
