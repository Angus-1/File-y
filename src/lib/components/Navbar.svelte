<script>
  import { goto } from "$app/navigation";
  import { getAuth, signOut } from "firebase/auth";
  
  import { isLoggedIn } from "./utils/authStore";

  const auth = getAuth();

  function logout() {
    signOut(auth)
      .then(() => {
        localStorage.removeItem("uid");
        goto("/login");
      })
      .catch((error) => {
        console.error(error);
      });
  }
</script>

<div class="nav-container">
  
  <a class="nav-link" target="_blank" href="https://www.angelsantoyo.com/"
      >made by angel with 💙 </a
    >
  {#if $isLoggedIn}
      <a
        class="nav-link"
        on:click|preventDefault={logout}
        target="_blank"
        href="/">sign out</a
      >

  {/if}
</div>

<style> 
.nav-container {
  max-width: 100%;;
  margin: 3px auto;
  background-color: transparent;
  color:rgb(191, 229, 252);
  border-radius: 10px;
  padding: 1rem;
  display: flex;
  font-weight: 600;
  font-size:x-large;

  justify-content: space-evenly;
  align-items: center;
  width: auto;
  list-style: none;
}

a:link { text-decoration: none; }


a:visited { text-decoration: none; }


a:hover { text-decoration: none; 
color:aquamarine
}


a:active { text-decoration: none; }
</style>