<script></script>

<section class="section__contact">
    <address class="address__contact">
      <ul class="ul__address">
        <li class="li__address">
          <a href="https://tinyurl.com/3x3257fz">
            <i class="fa-solid fa-house address__icon home" />
          </a>
        </li>

        <li class="li__address">
          <a href="tel:+33635942113"
            ><i class="fa-solid fa-square-phone address__icon tel" /></a
          >
        </li>
        <li class="li__address">
          <a href="mailto:tamara.violeau@gmail.com"
            ><i class="fa-solid fa-paper-plane address__icon mail" /></a
          >
        </li>
      </ul>
    </address>
    <aside class="aside__social">
      <ul class="ul__social">
        <li class="li__social">
          <a href="https://www.linkedin.com/in/tamara-violeau/"
            ><i class="fa-brands fa-linkedin social__icon linkedin" /></a
          >
        </li>
        <li class="li__social">
          <a href="https://github.com/TamaraVioleau"
            ><i class="fa-brands fa-github social__icon github" /></a
          >
        </li>
      </ul>
    </aside>
  </section>



  <style lang=scss>
    @import "../utils/extends";
    @import "../utils/mixins";
    @import "../utils/variables";
    
    .section__contact {
      @media screen and (min-width: 470px) {
        display: flex;
        justify-content: space-around;
      }

      margin: 5rem 0;
      .address__contact {
        position: relative;
        .ul__address {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-evenly;
          .li__address {
            a {
              @media screen and (min-width: 470px) {
                margin-right: clamp(3rem, 6.5vw, 6rem);
              }
              text-decoration: none;
              .address__icon {
                @extend %iconsocialaddress;
                color: $color-purple;
              }
              .home:hover {
                color: $color-darkpurple;
                @extend %transition;
              }
              .tel:hover {
                color: $color-darkpurple;
                @extend %transition;
              }
              .mail:hover {
                color: $color-darkpurple;
                @extend %transition;
              }
            }
          }
        }
      }
      .aside__social {
        position: relative;
        @media screen and (max-width: 470px) {
          margin: 3rem;
        }

        .ul__social {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-evenly;
          .li__social {
            a {
              @media screen and (min-width: 470px) {
                margin-left: clamp(3rem, 6.5vw, 6rem);
              }
              text-decoration: none;
              .social__icon {
                @extend %iconsocialaddress;
                color: $color-purple;
              }
              .linkedin:hover {
                @extend %transition;
                color: #0a66c2;
              }
              .github:hover {
                @extend %transition;
                color: black;
              }
            }
          }
        }
      }
    }
  
    </style>