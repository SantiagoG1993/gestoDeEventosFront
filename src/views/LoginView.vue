<template>
    <div class="login_view_container">
        <LoginForm />
    </div>
</template>

<script setup>
import LoginForm from '../components/LoginForm.vue'


</script>

<style scoped>
.login_view_container{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
}


</style>