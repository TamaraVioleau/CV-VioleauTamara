(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function s(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(i){if(i.ep)return;i.ep=!0;const n=s(i);fetch(i.href,n)}})();function u(){}function j(e){return e()}function A(){return Object.create(null)}function _(e){e.forEach(j)}function k(e){return typeof e=="function"}function O(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function P(e){return Object.keys(e).length===0}function I(e,t,s){e.insertBefore(t,s||null)}function q(e){e.parentNode&&e.parentNode.removeChild(e)}function M(e){return document.createElement(e)}function z(e,t,s){s==null?e.removeAttribute(t):e.getAttribute(t)!==s&&e.setAttribute(t,s)}function T(e){return Array.from(e.childNodes)}let y;function h(e){y=e}const d=[],S=[],f=[],E=[],D=Promise.resolve();let v=!1;function G(){v||(v=!0,D.then(C))}function g(e){f.push(e)}const m=new Set;let l=0;function C(){if(l!==0)return;const e=y;do{try{for(;l<d.length;){const t=d[l];l++,h(t),J(t.$$)}}catch(t){throw d.length=0,l=0,t}for(h(null),d.length=0,l=0;S.length;)S.pop()();for(let t=0;t<f.length;t+=1){const s=f[t];m.has(s)||(m.add(s),s())}f.length=0}while(d.length);for(;E.length;)E.pop()();v=!1,m.clear(),h(e)}function J(e){if(e.fragment!==null){e.update(),_(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(g)}}const N=new Set;function R(e,t){e&&e.i&&(N.delete(e),e.i(t))}function V(e,t,s,a){const{fragment:i,after_update:n}=e.$$;i&&i.m(t,s),a||g(()=>{const c=e.$$.on_mount.map(j).filter(k);e.$$.on_destroy?e.$$.on_destroy.push(...c):_(c),e.$$.on_mount=[]}),n.forEach(g)}function B(e,t){const s=e.$$;s.fragment!==null&&(_(s.on_destroy),s.fragment&&s.fragment.d(t),s.on_destroy=s.fragment=null,s.ctx=[])}function F(e,t){e.$$.dirty[0]===-1&&(d.push(e),G(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function H(e,t,s,a,i,n,c,L=[-1]){const p=y;h(e);const r=e.$$={fragment:null,ctx:[],props:n,update:u,not_equal:i,bound:A(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(p?p.$$.context:[])),callbacks:A(),dirty:L,skip_bound:!1,root:t.target||p.$$.root};c&&c(r.root);let b=!1;if(r.ctx=s?s(e,t.props||{},(o,w,...x)=>{const $=x.length?x[0]:w;return r.ctx&&i(r.ctx[o],r.ctx[o]=$)&&(!r.skip_bound&&r.bound[o]&&r.bound[o]($),b&&F(e,o)),w}):[],r.update(),b=!0,_(r.before_update),r.fragment=a?a(r.ctx):!1,t.target){if(t.hydrate){const o=T(t.target);r.fragment&&r.fragment.l(o),o.forEach(q)}else r.fragment&&r.fragment.c();t.intro&&R(e.$$.fragment),V(e,t.target,t.anchor,t.customElement),C()}h(p)}class W{$destroy(){B(this,1),this.$destroy=u}$on(t,s){if(!k(s))return u;const a=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return a.push(s),()=>{const i=a.indexOf(s);i!==-1&&a.splice(i,1)}}$set(t){this.$$set&&!P(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function K(e){let t;return{c(){t=M("body"),t.innerHTML=`<header class="header__cv"><nav><div><div class="roundfirst"></div> 
        <div class="roundsecond"></div> 
        <div class="roundthird"></div></div></nav> 

    
    <section><h1>Tamara VIOLEAU</h1> 
      <div class="section__h2"><img src="https://media-public.canva.com/2l0vA/MAEwp32l0vA/1/t.png" alt=""/> 
        <div class="title__h2"><h2>Développeuse front-end</h2></div> 
        <hr/></div> 

      
      <aside><header class="header__pp"><i class="fa-regular fa-window-minimize minimize"></i> 
            <i class="fa-regular fa-window-restore restore "></i>             
            <i class="fa-regular fa-rectangle-xmark close"></i></header> 
        <div class="photo"></div> 
        <div class="text">Contactez-moi.</div> 
        <i class="i fi-rr-angle-down icon--down"></i></aside></section></header> 

  
  <main><section class="section__contact"><adress class="adress__contact"><ul class="ul__adress"><li class="li__adress"><a href="https://tinyurl.com/3x3257fz"><i class="fa-solid fa-house adress__icon home"></i></a></li> 

          <li class="li__adress"><a href="tel:+33635942113"><i class="fa-solid fa-square-phone adress__icon tel"></i></a></li> 
          <li class="li__adress"><a href="mailto:tamara.violeau@gmail.com"><i class="fa-solid fa-paper-plane adress__icon mail"></i></a></li></ul></adress> 
      <aside class="aside__social"><ul class="ul__social"><li class="li__social"><a href="https://www.linkedin.com/in/tamara-violeau/"><i class="fa-brands fa-linkedin social__icon linkedin"></i></a></li> 
          <li class="li__social"><a href="https://github.com/TamaraVioleau"><i class="fa-brands fa-github social__icon github"></i></a></li></ul></aside></section> 

    

    <div class="border"><article class="article__wanted"><p><lord-icon class="wanted__icon" src="https://cdn.lordicon.com/msoeawqm.json" trigger="hover" style="width:3rem;height:3rem"></lord-icon>Je recherche un <strong>stage de développeur web</strong> 
          <i>non rémunéré</i>
          du <strong>25/04 au 24/10/2023</strong> (six mois). Mon expérience en
          tant que travailleuse sociale, m&#39;a appris l&#39;importance de
          l&#39;accessibilité pour tous, notamment pour les personnes en situation
          de handicap. Aujourd&#39;hui,
          <strong>développeuse front-end sensibilisée à l&#39;accessibilité</strong>, je souhaite mettre mes compétences et mes qualités humaines au
          service de votre entreprise et de vos projets.</p></article></div> 

    
    <section class="section__cv"><wrapper class="wrapper__cvleft"><article class="article__experiences"><div class="cv__search"><div class="cv__glass"><lord-icon src="https://cdn.lordicon.com/hgbzryoa.json" trigger="hover" colors="primary:#000000,secondary:#e4e4e4,tertiary:#b26836" style="height:3rem width: 3rem;"></lord-icon></div> 
            <div class="cv__text"><h3>Expériences</h3></div></div> 

          <h4>oct. 2022 - avr. 2023</h4> 

          <div class="cv__experience"><h5>Développeur web et web mobile</h5> 
            <p class="p__experience">École O’clock (téléprésentiel)
              <i>798 heures intensives</i> 
              <span class="souligner">Spécialisation : </span>Intégration i++
              (bundler Vite, Sass, Svelte.js, CMS Directus) et accessibilité.</p></div> 

          <h4>2019 - 2021</h4> 

          <div class="cv__experience"><h5>Éducatrice de Jeunes Enfants</h5> 
            <p class="p__experience">Crèche de 30 enfants. EJE en continuité de direction. Gestion
              d&#39;une équipe de 10 personnes.</p></div> 

          <h4>2015 - 2018</h4> 

          <div class="cv__experience"><h5>Diplôme d&#39;Etat EJE</h5> 
            <p class="p__experience">IRTS Talence (Éducateur de Jeunes Enfants)</p></div></article> 
        
        <article class="article__softskills"><div class="cv__search"><div class="cv__glass"><lord-icon src="https://cdn.lordicon.com/hgbzryoa.json" trigger="hover" colors="primary:#000000,secondary:#e4e4e4,tertiary:#b26836" style="height:3rem width: 3rem;"></lord-icon></div> 
            <div class="cv__text"><h3>Soft skills</h3></div></div> 
          <ul><li class="patience">Patience</li> 
            <li class="curiosite">Curiosité</li></ul> 
          <ul><li class="equipe">Travail d&#39;équipe</li></ul> 
          <ul><li class="adaptabilite">Adaptabilité</li> 
            <li class="observation">Observation</li></ul> 
          <ul><li class="autonomie">Autonomie</li></ul></article></wrapper> 

      <wrapper class="wrapper__cvright"><article class="article__competences"><div class="cv__search"><div class="cv__glass"><lord-icon src="https://cdn.lordicon.com/hgbzryoa.json" trigger="hover" colors="primary:#000000,secondary:#e4e4e4,tertiary:#b26836" style="height:3rem width: 3rem;"></lord-icon></div> 
            <div class="cv__text"><h3>Compétences</h3></div></div> 
          <h5>Intégration web</h5> 
          <p>HTML5 / CSS3 / SCSS (Sass) selon les bonnes pratiques
            d&#39;accessibilité (W3C, RGAA, WAI-ARIA)</p> 
          <h5>Développement front-end</h5> 
          <p>Javascript vanilla, bundler vite, Svelte.js, Bootstrap</p> 
          <h5>Développement back-end</h5> 
          <p>Php (orienté objet, MVC, API Rest, MySQL), Laravel</p> 
          <h5>Gestion de projet numérique</h5> 
          <p>Github, Figma, Photoshop, VS Code</p></article> 
        <article class="article__loisirs"><div class="cv__search"><div class="cv__glass"><lord-icon src="https://cdn.lordicon.com/hgbzryoa.json" trigger="hover" colors="primary:#000000,secondary:#e4e4e4,tertiary:#b26836" style="height:3rem width: 3rem;"></lord-icon></div> 
            <div class="cv__text"><h3>Loisirs</h3></div></div> 

          <div class="yoga"><aside></aside> 
            <h5>Yoga</h5> 
            <p>Pratique quotidienne, gestion du stress.</p></div> 
          <div class="rpg"><aside></aside> 
            <h5>RPG Littéraire</h5> 
            <p>Role playing game (jeu de rôle) sur forum. Gestion et
              administration d&#39;un forum (codage et management).</p></div></article></wrapper></section></main> 

  
  <footer></footer>`,z(t,"class","body__cv")},m(s,a){I(s,t,a)},p:u,i:u,o:u,d(s){s&&q(t)}}}class Q extends W{constructor(t){super(),H(this,t,null,K,O,{})}}new Q({target:document.getElementById("app")});
