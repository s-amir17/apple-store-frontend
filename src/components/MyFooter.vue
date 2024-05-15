<template>
   <footer class="text-center bg-body-tertiary text-muted navbar-fixed-bottom">
      <!-- <section class="d-flex justify-content-center p-4 border-bottom">
         <div class="me-5 d-none d-lg-block">
            <span>Me on social networks:</span>
         </div>
         <div>
            <a href="" class="me-4 text-reset mylinks">
               <i class="fab fa-facebook-f"></i>
            </a>
            <a href="" class="me-4 text-reset mylinks">
               <i class="fab fa-twitter"></i>
            </a>
            <a href="" class="me-4 text-reset mylinks">
               <i class="fab fa-google"></i>
            </a>
            <a href="" class="me-4 text-reset mylinks">
               <i class="fab fa-instagram"></i>
            </a>
            <a href="" class="me-4 text-reset mylinks">
               <i class="fab fa-linkedin"></i>
            </a>
            <a href="" class="me-4 text-reset mylinks">
               <i class="fab fa-github"></i>
            </a>
         </div>
      </section> -->

      <section>
         <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6 class="text-uppercase fw-bold mb-4">Мои контакты</h6>
            <p>
               <a href="https://www.instagram.com/" target="_blank" class="me-4 text-reset mylinks">
                  <i class="fab fa-instagram me-3"></i>
                  amigoo__17
               </a>
            </p>
            <p>
               <a href="https://mail.ru/" target="_blank" class="me-4 text-reset mylinks">
                  <i class="fas fa-envelope me-3"></i>
                  почта@mail.ru
               </a>
            </p>
            <p>
               <a href="https://web.whatsapp.com/" target="_blank" class="me-4 text-reset mylinks"> <i class="fas fa-phone me-3"></i> + 7 747 919 87 84 </a>
            </p>
         </div>
      </section>

      <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.07)">© Компания Apple 2024. ВСЕ ПРАВА ЗАЩИЩЕНЫ.</div>
   </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
a {
   transition: all 0.2s ease 0s;
   text-decoration: none;
   &:hover {
      color: #000 !important;
   }
}
.mylinks {
   font-size: 20px;
}
</style>
