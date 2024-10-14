<template>
    <div class="main_view_container">
        <NavBarComponent  @navbar-emit="handleEmit"/>
        <ListEvents v-if="showSection == 'ver-eventos'"/>
        <AddEventForm v-if="showSection == 'agregar-eventos'"/>
        <AddLocationForm v-if="showSection == 'agregar-locacion'" />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import NavBarComponent from '../components/NavBarComponent.vue'
import ListEvents from '../components/ListEvents.vue'
import AddEventForm from '../components/AddEventForm.vue'
import AddLocationForm from '../components/AddLocationForm.vue'

const showSection = ref('ver-eventos')
const handleEmit= (valorRecibido)=>{
    showSection.value = valorRecibido
    console.log(showSection.value)
}
</script>

<style scoped>
.main_view_container{
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;

}
@media(min-width: 1000px){
    .main_view_container{
    width: 100%;
    flex-direction: row;
    }

}
</style>