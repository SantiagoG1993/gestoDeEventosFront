<template>
    <div class="login_container">
        <h1 id="title">{{isOpenRegister?'Register':'Login'}}</h1>
        <form action="" class="form_login" @submit.prevent="submitLogin">
            <input v-if="isOpenRegister" type="text" placeholder="Name">
            <input v-if="isOpenRegister" type="text" placeholder="Last name">
            <input v-if="isOpenRegister" type="text" placeholder="Email">
            <input v-else type="text" placeholder="Email" v-model="usernameLogin">
            <input v-if="isOpenRegister" type="password" name="" id="" placeholder="Password" >
            <input v-if="isOpenRegister" type="password" name="" id="" placeholder="Confirm password">
            <input v-else type="password" name="" id="" placeholder="Password" v-model="passwordLogin">
            <div class=" gender_age_container">
                <input v-if="isOpenRegister" type="number" name="" id="age" placeholder="age">
            <select v-if="isOpenRegister" name="" id="gender_select">
                <option value="MALE">Male</option>
                <option value="FEMALE">Female</option>
            </select>
            </div>
            <input type="submit" id="btn_login" :value="isOpenRegister?'Register':'Login'">
            <p id="register" @click="openRegisteForm">{{ isOpenRegister?'Back to login':'Register' }}</p>
        </form>

    </div>
</template>

<script setup>
import { ref }from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const isOpenRegister = ref(false);
const usernameLogin = ref("");
const passwordLogin = ref("");

const openRegisteForm = ()=>{
    isOpenRegister.value = !isOpenRegister.value
    console.log(isOpenRegister.value)
}

const getAuthCustomer=(token)=>{
    fetch('http://localhost:8080/api/auth/customer',{
        method:'GET',
        headers:{
            'Authorization':`Bearer ${token}`,
            'Content-Type':'application/json'
        }
    })
    .then(res=>res.json())
    .then(data=>{
        store.commit('setAuthCustomer',data);
        console.log("customer auth desde vuex",store.state.authCustomer)
    })
    .catch(err=>console.log(err))
}
const submitLogin = ()=>{
    fetch('http://localhost:8080/api/auth/login',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            email:usernameLogin.value,
            password:passwordLogin.value
        })
    })
    .then(res=>res.json())
    .then(data=>{ 
        store.commit('setToken',data.token);
        getAuthCustomer(data.token)
    
    })
    .catch(err=>console.log(err))
}


</script>

<style scoped>
#title{
    margin-top: 30px;
}
.login_container{
    border: 1px solid grey;
    justify-content: center;
    width:80%;
    min-height: 60vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
}
.form_login{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    min-height: 40vh;
    gap: 30px;
/*     border: 1px solid red;
 */    position: relative;
}
.form_login input{
    height: 40px;
    padding-left: 30px;
    cursor: pointer;
    width: 60%;
}

#btn_login{
    padding: unset;
    width: 120px;
    border: none;
    border-radius: 3px;
    background-color: rgb(155, 22, 22);
    color: white;
    font-family: Arial, Helvetica, sans-serif;
}
#btn_login:hover{
    background-color:rgb(154, 62, 62) ;
    transition: all ease-in .2s;
}
#register{
    cursor: pointer;
    margin-bottom: 30px;

}
#register:hover{
    color: grey;
}
.gender_age_container{
    width: 60%;
    display: flex;
    justify-content: space-between;
}
#gender_select{
    width: 45%;
    border: none;
    padding-left: 10px;
}
#age{
    width: 45%;
    text-align: center;
}

</style>