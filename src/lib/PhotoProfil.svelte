<script>
</script>

<aside>
  <header class="header__pp">
    <i class="fa-regular fa-window-minimize minimize" />
    <i class="fa-regular fa-window-restore restore " />
    <i class="fa-regular fa-rectangle-xmark close" />
  </header>
  <div class="photo" id="header-photo" />
  <div class="text">Contactez-moi.</div>
  <i class="icon--down"
    ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
      ><g id="_01_align_center" data-name="01 align center"
        ><path
          d="M12,15.5a1.993,1.993,0,0,1-1.414-.585L5.293,9.621,6.707,8.207,12,13.5l5.293-5.293,1.414,1.414-5.293,5.293A1.993,1.993,0,0,1,12,15.5Z"
        /></g
      ></svg
    >
  </i>
</aside>


<style lang="scss">
    @import "../utils/extends";
    @import "../utils/mixins";
    @import "../utils/variables";

aside {
        display: grid;
        grid-template-columns: 80% 20%;
        grid-template-rows: 14% 86%;
        grid-template-areas:
          "icons icons icons"
          "image image image"
          "text icon icon";
        width: 10rem;
        height: 11rem;
        border: 2px solid $color-black;
        border-radius: 5px 5px 0 0;
        position: relative;
        @media screen and (min-width: 830px) {
          position: absolute;
          left: 3.5rem;
          top: -3rem;
          width: 20rem;
          height: 21rem;
          grid-template-rows: 12% 74% 14%;
          grid-template-columns: 80% 20% 0%;
        }
        @media screen and (min-width: 1024px) {
          width: 24rem;
          height: 25rem;
        }
        top: 3rem;
        margin: auto;
        z-index: 1;
        box-shadow: 5px 5px 4px rgb(0 0 0 / 25%);
        .header__pp {
          grid-area: icons;
          display: flex;
          justify-content: right;
          align-items: center;
          background-color: $color-yellow;
          padding: 0.5rem;
          border-radius: 5px 5px 0 0;
          .minimize,
          .restore {
            background-position: center;
            background-size: contain;
            background-repeat: no-repeat;
            height: $iconsize;
            width: auto;
            margin-right: 0.5rem;
          }
          .close {
            background-image: url(./assets/images/rectangle-xmark.png);
            background-position: center;
            background-size: contain;
            background-repeat: no-repeat;
            height: $iconsize;
            width: auto;
          }
        }
        .photo {
          grid-area: 2/1/3/3;
          border-top: 1px solid $color-black;
          background-image: url(https://i.ibb.co/r2JvG2M/Tamara.png);
          background-position: 0 15%;
          background-size: cover;
          @media screen and (min-width: 830px) {
            border-bottom: 1px solid $color-black;
          }
        }
        .text {
          display: none;
          @media screen and (min-width: 830px) {
            grid-area: text;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: $color-yellow;
            text-align: center;
            font-family: $dmsans;
          }
        }
        .icon--down {
          display: none;
          svg {
            height: 100%;
          }
          @media screen and (min-width: 830px) {
            grid-area: icon;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: white;
            width: 100%;
            height: 100%;
          }
        }
      }
</style>