<template>
   <h1 v-if="!name"><span>Store.</span> The best way to buy the products you love.</h1>
   <h1 v-else>
      Пользователь - <span> {{ name }} </span>
   </h1>
   <!-- <div id="carouselExample" class="carousel slide">
         <div class="carousel-inner">
            <div class="carousel-item active">
               <img src="@/assets/store.jpeg" class="d-block w-100 h-100" alt="..." />
            </div>
            <div class="carousel-item">
               <img src="@/assets/iphone.png" class="d-block w-100 h-100" alt="..." />
            </div>
            <div class="carousel-item">
               <img src="@/assets/ipad.jpg" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
               <img src="@/assets/mac.jpg" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
               <img src="@/assets/ipad1.webp" class="d-block w-100" alt="..." />
            </div>
         </div>
         <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" style="color: black" aria-hidden="true"></span>
            <span class="visually-hidden" style="color: black">Previous</span>
         </button>
         <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
         </button>
      </div> -->
   <div id="carouselExampleCaptions" class="carousel slide">
      <div class="carousel-inner">
         <div class="carousel-item active">
            <img src="@/assets/store.jpeg" class="d-block" alt="..." />
            <div class="carousel-caption d-none d-md-block box">
               <!-- <h5>First slide label</h5> -->
               <p>Новинки! Посмотрите, что нового, прямо сейчас.</p>
            </div>
         </div>
         <div class="carousel-item">
            <img src="@/assets/iphone.png" class="d-block" alt="..." />
            <div class="carousel-caption d-none d-md-block">
               <h5>Самые новые смартфоны от Apple</h5>
            </div>
         </div>
         <div class="carousel-item">
            <img src="@/assets/mac.jpg" class="d-block" alt="..." />
            <div class="carousel-caption d-none d-md-block">
               <p>
                  Все модели MacBook <br />
                  Cделайте свой выбор
               </p>
            </div>
         </div>
         <div class="carousel-item">
            <img src="@/assets/ipad1.png" class="d-block" alt="..." />
            <div class="carousel-caption d-none d-md-block">
               <p>Касание, рисование на одном волшебном устройстве iPad.</p>
            </div>
         </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
         <span class="carousel-control-prev-icon" aria-hidden="true"></span>
         <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
         <span class="carousel-control-next-icon" aria-hidden="true"></span>
         <span class="visually-hidden">Next</span>
      </button>
   </div>
</template>

<script>
export default {
   data() {
      return {
         name: '',
      };
   },

   mounted() {
      let logged = localStorage.getItem('user-info');
      if (logged) {
         this.name = JSON.parse(logged).name;
      }
   },
};
</script>

<style lang="scss" scoped>
.carousel-control-next,
.carousel-control-prev /*, .carousel-indicators */ {
   filter: invert(170%);
}
.carousel-item {
   height: 750px;
   @media (max-width: 992px) {
      width: 100%;
      height: 100%;
   }
   img {
      margin: 0 auto;
      @media (max-width: 992px) {
         width: 100%;
      }
   }
}

.carousel-caption {
   transform: translate(0, -26px);
   @media (max-width: 992px) {
      display: none !important;
   }
}

h5,
p {
   font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
   color: black;
   font-size: 38px;
}

h1 {
   text-align: center;
   font-size: 48px;
   font-weight: 600;
   color: #6e6e73;
   margin: 2px;
   letter-spacing: -0.003em;
   @media (max-width: 992px) {
      font-size: 34px;
   }
   span {
      color: #000;
   }
}
.cnt {
   display: flex;
   align-items: center;
   img {
      cursor: pointer;
      max-height: 760px;
   }
}
@media (max-width: 768px) {
   .mac {
      display: none;
   }
   .iphone {
      min-width: 100%;
   }
}
</style>
