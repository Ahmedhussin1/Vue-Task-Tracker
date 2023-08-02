
<template>
   <header>
    <h1>{{title}}</h1>
    <Button color="green" text="Add Task"></Button>
   </header>
</template>

<script>
import Button from './Button.vue'
    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: 'Header',
        props: ['title'],
        components: {
            Button
        }
    }
</script>

<style scoped>
    header{
        display: flex;
        justify-content : space-between;
        align-items : center;
        margin-bottom : 20px
    }
</style>
