<script>
  function setChangeColor(headerColor, wantedColor, glassColor, ppTopColor, ppBottomColor) {
    const header = document.querySelector(".header__cv");
    header.style.backgroundColor = headerColor;

    const wanted = document.querySelector(".article__wanted");
    wanted.style.borderLeft = wantedColor;

    const glasses = document.querySelectorAll(".cv__glass");
    for (const glass of glasses) {glass.style.backgroundColor = glassColor;}

    const ppTop = document.querySelector(".header__pp");
    ppTop.style.backgroundColor = ppTopColor;

    const ppBottom = document.querySelector(".text");
    ppBottom.style.backgroundColor = ppBottomColor;
  }
</script>

<aside>
  <div>
    <div on:click={() => setChangeColor("#f0be8d", "2rem solid #c5b7dd", "#c4e0e3", "#ffde59", "#ffde59")}>
      <div class="roundfirst" />
    </div>
    <div on:click={() => setChangeColor("#ffde59", "2rem solid #f0be8d", "#c4e0e3", "#c5b7dd", "#c5b7dd")}>
      <div class="roundsecond" />
    </div>
    <div on:click={() => setChangeColor("#c4e0e3", "2rem solid #f0be8d", "#c5b7dd", "#ffde59", "#ffde59")}>
      <div class="roundthird" />
    </div>
  </div>
</aside>

<style lang="scss">
  @import "../utils/extends";
  @import "../utils/mixins";
  @import "../utils/variables";

  aside {
    height: 5.5rem;
    @media screen and (min-width: 1024px) {
      height: 6.5rem;
    }

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
