<template>
    <div class="app_container">
        <LoginView />
        <!-- <ManagerView /> -->
         {{ authClient.role }}
    </div>

</template>

<script setup>
import LoginView from './views/LoginView.vue'
import ManagerView from './views/ManagerView.vue'
import { computed,ref } from 'vue';
import { useStore } from 'vuex'

const store = useStore();

const currentRole = ref("")
const authClient = computed(()=>{
    return store.state.authCustomer
})


</script>

<style>
*{
    margin: 0;
        padding: 0;
        box-sizing: border-box;
}
    .app_container{
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        width: 100%;
    }


</style>
