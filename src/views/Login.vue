<template>
   <div class="container text-center">
      <div>
         <h1>Войти</h1>
      </div>
      <form @click.prevent>
         <input type="email" required v-model.trim="user.email" ref="name" placeholder="Ваша почта" />
         <input type="password" v-model.trim="user.password" required placeholder="Ваш пароль" />
         <button @click="login">Войти</button>
      </form>
      <router-link to="/sign">Нет аккаунта ?</router-link>
   </div>
</template>

<script>
import axios from 'axios';

export default {
   name: 'Login',
   data() {
      return {
         user: {
            email: '',
            password: '',
         },
      };
   },

   methods: {
      async login() {
         if (!this.user.password && !this.user.email) {
            alert('Введит email и пароль!');
            this.$refs.name.focus();
            return;
         }
         await axios
            .get(`http://localhost:5000/users?email=${this.user.email}&password=${this.user.password}`)
            .then(res => {
               console.log(res);
               if (res.status == 200 && res.data.length > 0) {
                  localStorage.setItem('user-info', JSON.stringify(res.data[0]));
                  this.$router.push('/');
                  location.reload();
               } else {
                  alert('Некорректный email или пароль!');
               }
            })
            .catch(error => console.log(error));
      },
   },

   mounted() {
      let logged = localStorage.getItem('user-info');
      if (logged) {
         this.$router.push('/');
      }
   },
};
</script>

<style lang="scss" scoped>
form {
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   gap: 15px;
   width: 300px;
   margin: 0 auto;

   input {
      width: 100%;
      font-size: 1.2em;
      padding: 10px;
      border: 2px solid darkblue;

      &:focus {
         box-shadow: 0px 0px 15px purple;
         color: rgb(1, 56, 105);
         text-shadow: 0px 0px 1px green;
      }
   }

   button {
      width: 100%;
      padding: 10px;
      font-size: 1.2em;
      border: 2px solid darkblue;
      letter-spacing: 1px;
      border-radius: 5px;
      font-weight: bold;
      cursor: pointer;
      color: salmon;
      background-color: rgb(255, 244, 227);
      transition: all 0.3s ease-in-out 0s;

      &:hover {
         color: blanchedalmond;
         background-color: salmon;
      }
   }
}
a {
   display: block;
   margin-top: 20px;
   color: rgb(246, 89, 72);
   text-decoration: none;
   font-size: 1.5rem;
   &:hover {
      text-decoration: underline;
   }
}
</style>
