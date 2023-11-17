<script setup>
const {
    data: posts
} = await useAsyncData('posts', () =>
    queryContent('/blog').find()
)
console.log('data', posts)
</script>

<template>
<h1 class="text-3xl my-8">Blog Posts</h1>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis omnis odio, dolorem sunt ipsa facilis. Dignissimos ratione qui accusamus, optio vitae nisi magni porro quos perferendis voluptatem, temporibus, expedita modi?

<section class=" grid md:grid-cols-3 mt-8 gap-10">
    <post :posts="posts"/>

</section>
</template>