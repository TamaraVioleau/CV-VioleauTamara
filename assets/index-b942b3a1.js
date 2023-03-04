(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))c(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function i(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(s){if(s.ep)return;s.ep=!0;const n=i(s);fetch(s.href,n)}})();function u(){}function j(e){return e()}function S(){return Object.create(null)}function _(e){e.forEach(j)}function k(e){return typeof e=="function"}function q(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function P(e){return Object.keys(e).length===0}function I(e,t,i){e.insertBefore(t,i||null)}function L(e){e.parentNode&&e.parentNode.removeChild(e)}function M(e){return document.createElement(e)}function G(e,t,i){i==null?e.removeAttribute(t):e.getAttribute(t)!==i&&e.setAttribute(t,i)}function N(e){return Array.from(e.childNodes)}let y;function h(e){y=e}const d=[],A=[],f=[],E=[],D=Promise.resolve();let m=!1;function J(){m||(m=!0,D.then(C))}function g(e){f.push(e)}const v=new Set;let l=0;function C(){if(l!==0)return;const e=y;do{try{for(;l<d.length;){const t=d[l];l++,h(t),R(t.$$)}}catch(t){throw d.length=0,l=0,t}for(h(null),d.length=0,l=0;A.length;)A.pop()();for(let t=0;t<f.length;t+=1){const i=f[t];v.has(i)||(v.add(i),i())}f.length=0}while(d.length);for(;E.length;)E.pop()();m=!1,v.clear(),h(e)}function R(e){if(e.fragment!==null){e.update(),_(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(g)}}const T=new Set;function z(e,t){e&&e.i&&(T.delete(e),e.i(t))}function V(e,t,i,c){const{fragment:s,after_update:n}=e.$$;s&&s.m(t,i),c||g(()=>{const a=e.$$.on_mount.map(j).filter(k);e.$$.on_destroy?e.$$.on_destroy.push(...a):_(a),e.$$.on_mount=[]}),n.forEach(g)}function B(e,t){const i=e.$$;i.fragment!==null&&(_(i.on_destroy),i.fragment&&i.fragment.d(t),i.on_destroy=i.fragment=null,i.ctx=[])}function F(e,t){e.$$.dirty[0]===-1&&(d.push(e),J(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function H(e,t,i,c,s,n,a,O=[-1]){const p=y;h(e);const r=e.$$={fragment:null,ctx:[],props:n,update:u,not_equal:s,bound:S(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(p?p.$$.context:[])),callbacks:S(),dirty:O,skip_bound:!1,root:t.target||p.$$.root};a&&a(r.root);let b=!1;if(r.ctx=i?i(e,t.props||{},(o,w,...x)=>{const $=x.length?x[0]:w;return r.ctx&&s(r.ctx[o],r.ctx[o]=$)&&(!r.skip_bound&&r.bound[o]&&r.bound[o]($),b&&F(e,o)),w}):[],r.update(),b=!0,_(r.before_update),r.fragment=c?c(r.ctx):!1,t.target){if(t.hydrate){const o=N(t.target);r.fragment&&r.fragment.l(o),o.forEach(L)}else r.fragment&&r.fragment.c();t.intro&&z(e.$$.fragment),V(e,t.target,t.anchor,t.customElement),C()}h(p)}class U{$destroy(){B(this,1),this.$destroy=u}$on(t,i){if(!k(i))return u;const c=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return c.push(i),()=>{const s=c.indexOf(i);s!==-1&&c.splice(s,1)}}$set(t){this.$$set&&!P(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function W(e){let t;return{c(){t=M("body"),t.innerHTML=`<header class="header__cv"><nav><div><div class="roundfirst"></div> 
        <div class="roundsecond"></div> 
        <div class="roundthird"></div></div></nav> 

    
    <section><h1>Tamara VIOLEAU</h1> 
      <div class="section__h2"><img src="https://media-public.canva.com/2l0vA/MAEwp32l0vA/1/t.png" alt=""/> 
        <div class="title__h2"><h2>Développeuse front-end</h2></div> 
        <hr/></div> 

      
      <aside><header class="header__pp"><i class="header__icon--reduction"></i> 
          <i class="header__icon--format"></i><i class="header__icon--close"></i></header> 
        <div class="photo"></div> 
        <div class="text">Contactez-moi.</div> 
        <i class="i fi-rr-angle-down icon--down"></i></aside></section></header> 

  
  <main><section class="section__contact"><adress class="adress__contact"><ul class="ul__adress"><li class="li__adress"><i class="fi fi-rr-home adress__icon"></i>29450 SIZUN</li> 
          <li class="li__adress"><i class="fi fi-rr-phone-call adress__icon"></i><a href="tel:+33635942113">06.35.94.21.13</a></li> 
          <li class="li__adress"><i class="fi fi-rr-envelope-open-text adress__icon"></i><a href="mailto:tamara.violeau@gmail.com">tamara.violeau@gmail.com</a></li></ul></adress> 
      <aside class="aside__social"><ul class="ul__social"><li class="li__social"><i class="fi fi-brands-linkedin social__icon"></i><a href="#">Linkedin</a></li> 
          <li class="li__social"><i class="fi fi-brands-github social__icon"></i><a href="#">Github</a></li> 
          <li class="li__social"></li></ul></aside></section> 

    

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
    <p>Role playing game (jeu de rôle) sur forum. Gestion et administration d&#39;un forum (codage et management).</p></div></article></wrapper></section></main> 

  
  <footer></footer>`,G(t,"class","body__cv")},m(i,c){I(i,t,c)},p:u,i:u,o:u,d(i){i&&L(t)}}}class K extends U{constructor(t){super(),H(this,t,null,W,q,{})}}new K({target:document.getElementById("app")});
