<template>
    <div class="card_event_main_container">
        <i class="fa-solid fa-pencil ico"></i>
        <i class="fa-solid fa-trash ico" id="trash"></i>

        <img src="https://www.educaciontrespuntocero.com/wp-content/uploads/2020/04/El-mago-de-Oz.jpg.webp" alt="">
        <h1>Obra de teatro</h1>
        <div class="desc_container">
            <p>20% Desc!</p>
        </div>
        <div class="age_container">
            <p>Age +8</p>
        </div>
    </div>
</template>

<script setup>


</script>

<style scoped>
.card_event_main_container{
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 110px;
    user-select: none
}
.ico{
    position: absolute;
    color: white;
    top: 12px;
    right: 15px;
    font-size: 14px;
}
/* img:hover{
    filter:grayscale(0.6);
    transition: .2s ease-in;
    cursor: pointer;
} */
img{
    width: 90%;
    height: 90%;
    object-fit: cover;
    box-shadow: 2px 2px 6px rgb(137, 137, 137);
}
h1{
    position: absolute;
    font-size: 15px;
    color: white;
    font-family: arial;
}
.desc_container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    background-color: rgb(207, 0, 0);
    border-radius: 50%;
    position: absolute;
    bottom: 00;
    right: 0;
    box-shadow: 2px 2px 6px rgb(137, 137, 137);

}
.desc_container p{
    color: white;
    font-size: 10px;
    text-align: center;
}
.age_container{
    width: 40px;
    height: 25px;
    background-color: rgb(7, 154, 63);
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    text-align: center;
    font-size: 10px;
    top: 0;
    left: 0;
}
@media (min-width: 1000px){
    .ico{
    position: absolute;
    color: white;
    top: 40px;
    right: 50px;
    font-size: 20px;
    cursor: pointer;
    border: 1px solid white;
    padding: 10px;
    border-radius: 2px;
}
.ico:hover{
    background-color:rgb(255, 0, 0) ;
}
#trash{
    right: 100px!important;
}

}

</style>