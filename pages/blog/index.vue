<script setup>
const {
    data: posts
} = await useAsyncData('posts', () =>
    queryContent('/blog').find()
)
</script>

<template>
<h1 class="text-3xl my-8">Blog Posts</h1>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis omnis odio, dolorem sunt ipsa facilis. Dignissimos ratione qui accusamus, optio vitae nisi magni porro quos perferendis voluptatem, temporibus, expedita modi?

<ul>
    <li v-for="post in posts" :key="post._id" class="my-8 py-4 border-b-2">
        <nuxt-link :to="post_path" :key="post._id" class="text-blue-500 text-2xl"> {{ post.title }}

        </nuxt-link>
        <p class="text-gray-500"> {{ post.description }}</p>
    </li>
</ul>
</template>