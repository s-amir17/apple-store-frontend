<template>
   <div class="container box">
      <div>
         <h1>Зарегистрироваться</h1>
      </div>
      <form>
         <input type="text" v-model.trim="user.name" id="name" ref="name" required placeholder="Ваше имя" />
         <input type="email" v-model.trim="user.email" id="email" ref="email" required placeholder="Ваша почта" />
         <input type="date" v-model="user.bday" id="birthday" ref="bday" required />
         <input type="password" v-model="user.password" id="password" ref="password" required placeholder="Придумайте пароль" />
         <button @click.prevent="saveUser">Регистрация</button>
      </form>
      <router-link to="/login">Уже есть аккаунт ?</router-link>
   </div>
</template>

<script>
import axios from 'axios';

export default {
   name: 'Sign',
   data() {
      return {
         user: {
            name: '',
            email: '',
            password: '',
            bday: null,
         },
      };
   },

   methods: {
      async saveUser() {
         if (!this.user.name) {
            alert('Заполните ваше имя!');
            this.$refs.name.focus();
            return;
         } else if (!this.user.email) {
            alert('Укажите свой email адрес!');
            this.$refs.email.focus();
            return;
         } else if (this.user.password.length < 6) {
            alert('Пароль должен состоять минимум из 6 символов!');
            this.$refs.password.focus();
            return;
         } else if (!this.user.bday) {
            alert('Укажите вашу дату рождения!');
            this.$refs.bday.focus();
            return;
         }

         await axios
            .post('http://localhost:5000/users', this.user)
            .then(response => {
               if (response.status) {
                  this.$router.push('/');
                  localStorage.setItem('user-info', JSON.stringify(response.data));
                  location.reload();
               }
            })
            .catch(error => {
               console.error(error);
               alert(error.message);
            });
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
.box {
   text-align: center;
   h1 {
      margin-bottom: 25px;
   }
   form {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 20px;
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
         width: 50%;
         padding: 10px;
         font-size: 1.2em;
         border: 2px solid darkblue;
         letter-spacing: 1px;
         border-radius: 5px;
         font-weight: bold;
         cursor: pointer;
         color: rgb(246, 89, 72);
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
      color: rgb(246, 89, 72);
      margin-top: 20px;
      text-decoration: none;
      font-size: 1.5rem;
      &:hover {
         text-decoration: underline;
      }
   }
}
</style>
