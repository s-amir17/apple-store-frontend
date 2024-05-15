<template>
   <div class="wrap" v-if="show" @click="hideDialog">
      <div @click.stop class="wrap__body">
         <i class="fa-solid fa-xmark xmark" @click="hideDialog"></i>
         <form>
            <div class="user">
               <h3>Ваши данные</h3>
               <label for="fname"><i class="fa fa-user"></i> Полное имя</label>
               <input type="text" id="fname" name="firstname" placeholder="Аяулым M." />
               <label for="email"><i class="fa fa-envelope"></i> Почта</label>
               <input type="text" id="email" name="email" placeholder="amir@mail.ru" />
               <label for="adr"><i class="fa fa-address-card"></i> Адрес проживания</label>
               <input type="text" id="adr" name="address" placeholder="Аль-Фараби 77/8" />
               <label for="city"><i class="fa fa-institution"></i> Город</label>
               <input type="text" id="city" name="city" placeholder="Алматы" />
            </div>

            <div class="payment">
               <h3>Оплата</h3>
               <label for="cname">Имя на Карте</label>
               <input type="text" id="cname" name="cardname" placeholder="Аяулым" />
               <label for="ccnum">Номер карты</label>
               <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444" />
               <label for="expyear">Срок действия</label>
               <input type="text" id="expyear" name="expyear" placeholder="08/25" />
               <label for="cvv">Номер CVV</label>
               <input type="text" id="cvv" name="cvv" placeholder="777" />
            </div>
            <button class="btn btn-dark" type="submit" @click.prevent="orderProduct">Оформить заказ</button>
         </form>
         <h5>или</h5>
         <div class="kaspi">
            <h4>Открыть в приложении <span>Kaspi</span></h4>
            <img src="@/assets/qr.png" alt="qr" />
            <img src="@/assets/kaspi.png" alt="kaspi" id="kaspi" />
         </div>
      </div>
   </div>
</template>

<script>
export default {
   props: {
      show: {
         type: Boolean,
         default: false,
      },
   },
   methods: {
      orderProduct() {
         alert('Заказ успешно оформлен!');
         this.hideDialog();
      },

      hideDialog() {
         this.$emit('update:show', false);
      },
   },
};
</script>

<style lang="scss" scoped>
.wrap {
   position: fixed;
   top: 0;
   right: 0;
   width: 100%;
   min-height: 100%;
   background: rgba(0, 0, 0, 0.7);
   padding: 0 10px;

   &__body {
      position: relative;
      border-radius: 25px;
      padding: 35px 20px;
      background: whitesmoke;
      gap: 50px;
      scroll-behavior: auto;
      @media (max-width: 992px) {
         flex-wrap: wrap;
      }

      h5 {
         color: darkred;
         @media (max-width: 990px) {
            display: none;
         }
      }

      .kaspi {
         display: flex;
         flex-direction: column;
         align-items: center;
         h4 {
            color: black;
            span {
               color: red;
            }
         }
         #kaspi {
            width: 100px;
            height: 100px;
            @media (max-width: 990px) {
               display: none;
            }
         }
      }
      form {
         gap: 80px;
         position: relative;
         .user,
         .payment {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
         }
         button {
            position: absolute;
            bottom: 0;
            width: 100%;
            transform: translateY(38px);
         }
      }
      .xmark {
         color: darkslategrey;
         cursor: pointer;
         font-size: 20px;
         position: absolute;
         top: 10px;
         right: 15px;
      }
   }
}

.wrap {
   display: flex;
   justify-content: center;
   align-items: center;
   &__body,
   &__body.kaspi,
   &__body form {
      display: flex;
      justify-content: center;
      align-items: center;
   }
}
</style>
