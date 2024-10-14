<template>
    <div  class="add_event_form_main_container">
        <h1 id="title">Add new location</h1>
        <form action="" id="add-e-form">
            <label for=""> Location name:        
                <input type="text" >
            </label>
            <label for="">Image:
                <input type="text">
            </label>
            <label for="">Capacity:
                    <input type="number">
            </label>
            <input type="submit" value="Add location" id="btn_add_event">
        </form>

    </div>
</template>

<script setup>


</script>

<style scoped>
.add_event_form_main_container{
    width: 100%;
    min-height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    z-index: 2;
}
label{
    display: flex;
    flex-direction: column;
    width: 60%;
    gap: 10px;
    font-family: Arial, Helvetica, sans-serif
}
#add-e-form{
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 20px;
    width: 100%;
    align-items: center;

}
#add-e-form input{
    height: 45px;
    width: 100%;
    padding-left: 20px;/* 
    border: 1px solid red; */

}
#btn_add_event{
    border: none;
    padding: 0px!important;
    background-color: rgb(185, 28, 28);
    color: white;
    cursor: pointer;
    width: 40%!important;
}
#title{
    font-family: Arial, Helvetica, sans-serif;
}
#btn_add_event:hover{
    background-color: rgb(168, 76, 76);

}
.location_age_container{
    width: 60%;
    display: flex;
}
@media(min-width: 1000px){
    .add_event_form_main_container{
    width: 80%;
    height: 70vh;
}
#age_req{
    width: 150px!important;

}
#btn_add_event{
    width: 20%!important;
    align-self: flex-end;
    margin-right: 20%;
    z-index: 2;
}
#add-e-form{
    gap: 30px;
}
select{
    height: 50px;
    width: 80%;
    padding-left: 10px;
}
input[type="text"],input[type="number"] {
        border: none;
        background-color: rgb(225, 225, 225);
}
input:focus{
    outline: none;
    background-color: rgb(241, 241, 241);
}
}

</style>