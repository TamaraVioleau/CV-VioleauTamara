<script>
  import Boutonscolors from "./lib/Boutonscolors.svelte";
  import Contact from "./lib/Contact.svelte";
</script>

<!-- Début du site web -->
<body class="body__cv">
  <!-- Corps -->
  <header class="header__cv">
    <!-- Navbar -->
    <Boutonscolors />

    <!-- Titre -->
    <section>
      <h1>Tamara VIOLEAU</h1>
      <div class="section__h2">
        <div class="title__h2">
          <h2>Développeuse front-end</h2>
        </div>
      </div>

      <!-- Photo de profil -->
      <aside>
        <header class="header__pp">
          <i class="fa-regular fa-window-minimize minimize" />
          <i class="fa-regular fa-window-restore restore " />
          <i class="fa-regular fa-rectangle-xmark close" />
        </header>
        <div class="photo" />
        <div class="text">Contactez-moi.</div>
        <i class="icon--down"
          ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><g id="_01_align_center" data-name="01 align center"><path d="M12,15.5a1.993,1.993,0,0,1-1.414-.585L5.293,9.621,6.707,8.207,12,13.5l5.293-5.293,1.414,1.414-5.293,5.293A1.993,1.993,0,0,1,12,15.5Z"/></g></svg>
      </aside>
    </section>
  </header>

  <!-- Main -->
  <main>
    <!-- Contact -->
    <Contact/>

    <!-- SECTION PRESENTATION -->

    <div class="border">
      <article class="article__wanted">
        <p>
          <lord-icon
            class="wanted__icon"
            src="https://cdn.lordicon.com/msoeawqm.json"
            trigger="hover"
            style="width:3rem;height:3rem"
          />Je recherche un <strong>stage de développeur web</strong>
          <i>non rémunéré</i>
          du <strong>25/04 au 24/10/2023</strong> (six mois). Mon expérience en
          tant que travailleuse sociale, m'a appris l'importance de
          l'accessibilité pour tous, notamment pour les personnes en situation
          de handicap. Aujourd'hui,
          <strong>développeuse front-end sensibilisée à l'accessibilité</strong
          >, je souhaite mettre mes compétences et mes qualités humaines au
          service de votre entreprise et de vos projets.
        </p>
      </article>
    </div>

    <!-- SECTION CV -->
    <section class="section__cv">
      <wrapper class="wrapper__cvleft">
        <!-- ARTICLES EXPERIENCES -->
        <article class="article__experiences">
          <div class="cv__search">
            <div class="cv__glass">
              <lord-icon
                src="https://cdn.lordicon.com/hgbzryoa.json"
                trigger="hover"
                colors="primary:#000000,secondary:#e4e4e4,tertiary:#b26836"
                style="height:3rem width: 3rem;"
              />
            </div>
            <div class="cv__text">
              <h3>Expériences</h3>
            </div>
          </div>

          <h4>oct. 2022 - avr. 2023</h4>

          <div class="cv__experience">
            <h5>Développeur web et web mobile</h5>
            <p class="p__experience">
              École O’clock (téléprésentiel)
              <i>798 heures intensives</i>
              <span class="souligner">Spécialisation : </span>Intégration i++
              (bundler Vite, Sass, Svelte.js, CMS Directus) et accessibilité.
            </p>
          </div>

          <h4>2019 - 2021</h4>

          <div class="cv__experience">
            <h5>Éducatrice de Jeunes Enfants</h5>
            <p class="p__experience">
              Crèche de 30 enfants. EJE en continuité de direction. Gestion
              d'une équipe de 10 personnes.
            </p>
          </div>

          <h4>2015 - 2018</h4>

          <div class="cv__experience">
            <h5>Diplôme d'Etat EJE</h5>
            <p class="p__experience">
              IRTS Talence (Éducateur de Jeunes Enfants)
            </p>
          </div>
        </article>
        <!-- ARTICLES SOFT SKILLS -->
        <article class="article__softskills">
          <div class="cv__search">
            <div class="cv__glass">
              <lord-icon
                src="https://cdn.lordicon.com/hgbzryoa.json"
                trigger="hover"
                colors="primary:#000000,secondary:#e4e4e4,tertiary:#b26836"
                style="height:3rem width: 3rem;"
              />
            </div>
            <div class="cv__text">
              <h3>Soft skills</h3>
            </div>
          </div>
          <ul>
            <li class="patience">Patience</li>
            <li class="curiosite">Curiosité</li>
          </ul>
          <ul><li class="equipe">Travail d'équipe</li></ul>
          <ul>
            <li class="adaptabilite">Adaptabilité</li>
            <li class="observation">Observation</li>
          </ul>
          <ul><li class="autonomie">Autonomie</li></ul>
        </article>
      </wrapper>

      <wrapper class="wrapper__cvright">
        <!-- ARTICLE COMPETENCES -->
        <article class="article__competences">
          <div class="cv__search">
            <div class="cv__glass">
              <lord-icon
                src="https://cdn.lordicon.com/hgbzryoa.json"
                trigger="hover"
                colors="primary:#000000,secondary:#e4e4e4,tertiary:#b26836"
                style="height:3rem width: 3rem;"
              />
            </div>
            <div class="cv__text">
              <h3>Compétences</h3>
            </div>
          </div>
          <h5>Intégration web</h5>
          <p>
            HTML5 / CSS3 / SCSS (Sass) selon les bonnes pratiques
            d'accessibilité (W3C, RGAA, WAI-ARIA)
          </p>
          <h5>Développement front-end</h5>
          <p>Javascript vanilla, bundler vite, Svelte.js, Bootstrap</p>
          <h5>Développement back-end</h5>
          <p>Php (orienté objet, MVC, API Rest, MySQL), Laravel</p>
          <h5>Gestion de projet numérique</h5>
          <p>Github, Figma, Photoshop, VS Code</p>
        </article>
        <article class="article__loisirs">
          <div class="cv__search">
            <div class="cv__glass">
              <lord-icon
                src="https://cdn.lordicon.com/hgbzryoa.json"
                trigger="hover"
                colors="primary:#000000,secondary:#e4e4e4,tertiary:#b26836"
                style="height:3rem width: 3rem;"
              />
            </div>
            <div class="cv__text">
              <h3>Loisirs</h3>
            </div>
          </div>

          <div class="yoga">
            <aside />
            <h5>Yoga</h5>
            <p>Pratique quotidienne, gestion du stress.</p>
          </div>
          <div class="rpg">
            <aside />
            <h5>RPG Littéraire</h5>
            <p>
              Role playing game (jeu de rôle) sur forum. Gestion et
              administration d'un forum (codage et management).
            </p>
          </div>
        </article>
      </wrapper>
    </section>
  </main>

  <!-- Footer -->
  <footer />
</body>
