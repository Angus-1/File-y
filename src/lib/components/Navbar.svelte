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

<ul class="nav justify-content-end bg-dark">

  <li class="nav-item">
    <a class="nav-link" target="_blank" href="https://www.angelsantoyo.com/"
      >made by angel with 💙 </a
    >
  </li>
  {#if $isLoggedIn}
    <li class="nav-item">
      <a
        class="nav-link"
        on:click|preventDefault={logout}
        target="_blank"
        href="/">sign out</a
      >
    </li>
  {/if}
</ul>
