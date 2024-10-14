<template>
    <div class="list_events_main_container">
        <CardEvent />
        <CardEvent />
        <CardEvent />
        <CardEvent />
        <CardEvent />
        <CardEvent />
        <CardEvent />
        <CardEvent />
        <CardEvent />

    </div>
</template>

<script setup>
import CardEvent from '../components/CardEvent.vue'


</script>

<style scoped>
.list_events_main_container{
    z-index: 2;
    width: 100%;
    min-height: 75vh;/* 
    border: 1px solid green; */
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    row-gap: 30px;
    padding: 20px;
}


@media(min-width: 1000px){
    .list_events_main_container{
        width:80%;
        height: 100vh;
    }
}
</style>