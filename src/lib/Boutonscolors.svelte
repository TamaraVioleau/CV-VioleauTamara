<script>
  function setHeaderColor(color) {
    const header = document.querySelector(".header__cv");
    header.style.backgroundColor = color;
  }
</script>

<aside>
  <div>
    <div on:click={() => setHeaderColor("#f0be8d")}>
      <div class="roundfirst" />
    </div>
    <div on:click={() => setHeaderColor("#ffde59")}>
      <div class="roundsecond" />
    </div>
    <div on:click={() => setHeaderColor("#c4e0e3")}>
      <div class="roundthird" />
    </div>
  </div>
</aside>

<style lang=scss>
@import "../utils/extends";
@import "../utils/mixins";
@import "../utils/variables";

   aside {
      height: 5.5rem;
      @media screen and (min-width: 1024px) {height:6.5rem;}

      div {
        display: flex;
        justify-content: right;
        .roundfirst {
          @include round($bcg: $color-peach);
        }
        .roundsecond {
          @include round($bcg: $color-yellow);
        }
        .roundthird {
          @include round($bcg: $color-blue);
        }
      }
    }
</style>
