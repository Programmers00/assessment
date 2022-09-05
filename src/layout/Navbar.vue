<template>
  <nav>
    <!-- Logo -->
    <div class="navbarLogo">
      <a href="">Assessment</a>
    </div>
    <!-- ToggleBtn By CSS Only -->
    <div class="navbarMenuToggleBtn">
      <i class="fas fa-bars navbarToggleIcon"></i>
      <input type="checkbox" id="navbarToggleBtn" class="navbarToggleBtn" checked="unchecked">
      <ul class="navbarMenu">
        <li>
          <router-link to='/'>main</router-link>
        </li>
        <li>
          <router-link to='/test1'>test1</router-link>
        </li>
        <li>
          <router-link to='/test2'>test2</router-link>
        </li>
      </ul>
      <label for="navbarToggleBtn"></label>
    </div>
  </nav>  
</template>

<script>
export default {
  name: 'Navbar',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  text-decoration: none;
  color: whitesmoke;
}
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #263343;
  padding: 13px 13px 13px 16px;
}
.navbarLogo {
  font-size: 24px;
  color: whitesmoke;
}
.navbarLogo i{
  color: #d49466;
}
.navbarMenuToggleBtn i,
.navbarMenuToggleBtn input{
  display: none;
}
.navbarMenu {
  display: flex;
  font-size:  16px;
  list-style: none;
  padding-left: 0;
}
.navbarMenu li {
  padding: 8px 12px;
}
.navbarMenu li:hover {
  background-color: #d49466;
  border-radius: 4px;
}

@media screen and (max-width: 768px) {
  nav {
    flex-direction: column;
    align-items: flex-start;
    padding: 16px;
  }
  .navbarMenuToggleBtn {
    display: flex;
    width: 100%;
  }
  .navbarMenuToggleBtn i {
    display: flex;
    position: absolute;
    font-size: 24px;
    color: #d49466;
    padding: 4px;
    top: 15px;
    right: 12px;
  }
  .navbarMenuToggleBtn input {
    display: flex;
    position: absolute;
    width: 24px;
    height: 24px;
    top: 15px;
    right: 12px;
    opacity: 0;
    z-index: 1;
    cursor: pointer;
  }
  .navbarMenu {
    display: inline;
    flex-direction: column;
    width: 100%;
  }
  .navbarToggleBtn:checked + .navbarMenu{
    display: none;
  }
  .navbarToggleBtn:checked + .navbarToggleIcon{
    color: whitesmoke;
  }
}
</style>