<template>
    <div class="navbar_container">
        <ul class="ul_navbar">
            <li @click="handleClick('ver-eventos')">See all events</li>
            <li @click="handleClick('agregar-eventos')">Add events</li>
            <li @click="handleClick('agregar-locacion')">Add location</li>
            <li @click="handleClick('gestionar-asistencia')">Manage assistance</li>

        </ul>

    </div>
</template>

<script setup>
import { defineEmits } from 'vue';

const emit = defineEmits(['navbar-emit'])

const handleClick = (value)=>{
    emit('navbar-emit',value)
}

</script>

<style scoped>
.navbar_container{
    z-index: 2;
    width: 100%;
    min-height: 20vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: rgb(188, 0, 0);
    color: white;

}
.ul_navbar{
    font-family: Arial, Helvetica, sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-size: 20px;
    list-style-type: none;
    padding-left: 20px;
}
.ul_navbar li{
    cursor: pointer;
}
.ul_navbar li:hover{
    color: rgb(248, 217, 217);
}
@media(min-width: 1000px){
    .navbar_container{
/*         border: 3px solid red;
 */        width: 20%;
        min-height: 100vh;
    }
    .ul_navbar{
    padding-left: 0px;
}
}
</style>