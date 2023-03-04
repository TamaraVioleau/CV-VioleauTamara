(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function t(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(s){if(s.ep)return;s.ep=!0;const n=t(s);fetch(s.href,n)}})();function u(){}function A(e){return e()}function q(){return Object.create(null)}function m(e){e.forEach(A)}function O(e){return typeof e=="function"}function N(e,i){return e!=e?i==i:e!==i||e&&typeof e=="object"||typeof e=="function"}function M(e){return Object.keys(e).length===0}function C(e,i,t){e.insertBefore(i,t||null)}function k(e){e.parentNode&&e.parentNode.removeChild(e)}function I(e){return document.createElement(e)}function P(e,i,t){t==null?e.removeAttribute(i):e.getAttribute(i)!==t&&e.setAttribute(i,t)}function z(e){return Array.from(e.childNodes)}let y;function p(e){y=e}const d=[],E=[],_=[],j=[],J=Promise.resolve();let v=!1;function T(){v||(v=!0,J.then(L))}function g(e){_.push(e)}const h=new Set;let l=0;function L(){if(l!==0)return;const e=y;do{try{for(;l<d.length;){const i=d[l];l++,p(i),B(i.$$)}}catch(i){throw d.length=0,l=0,i}for(p(null),d.length=0,l=0;E.length;)E.pop()();for(let i=0;i<_.length;i+=1){const t=_[i];h.has(t)||(h.add(t),t())}_.length=0}while(d.length);for(;j.length;)j.pop()();v=!1,h.clear(),p(e)}function B(e){if(e.fragment!==null){e.update(),m(e.before_update);const i=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,i),e.after_update.forEach(g)}}const D=new Set;function G(e,i){e&&e.i&&(D.delete(e),e.i(i))}function U(e,i,t,a){const{fragment:s,after_update:n}=e.$$;s&&s.m(i,t),a||g(()=>{const c=e.$$.on_mount.map(A).filter(O);e.$$.on_destroy?e.$$.on_destroy.push(...c):m(c),e.$$.on_mount=[]}),n.forEach(g)}function V(e,i){const t=e.$$;t.fragment!==null&&(m(t.on_destroy),t.fragment&&t.fragment.d(i),t.on_destroy=t.fragment=null,t.ctx=[])}function F(e,i){e.$$.dirty[0]===-1&&(d.push(e),T(),e.$$.dirty.fill(0)),e.$$.dirty[i/31|0]|=1<<i%31}function H(e,i,t,a,s,n,c,S=[-1]){const f=y;p(e);const r=e.$$={fragment:null,ctx:[],props:n,update:u,not_equal:s,bound:q(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(i.context||(f?f.$$.context:[])),callbacks:q(),dirty:S,skip_bound:!1,root:i.target||f.$$.root};c&&c(r.root);let b=!1;if(r.ctx=t?t(e,i.props||{},(o,x,...w)=>{const $=w.length?w[0]:x;return r.ctx&&s(r.ctx[o],r.ctx[o]=$)&&(!r.skip_bound&&r.bound[o]&&r.bound[o]($),b&&F(e,o)),x}):[],r.update(),b=!0,m(r.before_update),r.fragment=a?a(r.ctx):!1,i.target){if(i.hydrate){const o=z(i.target);r.fragment&&r.fragment.l(o),o.forEach(k)}else r.fragment&&r.fragment.c();i.intro&&G(e.$$.fragment),U(e,i.target,i.anchor,i.customElement),L()}p(f)}class K{$destroy(){V(this,1),this.$destroy=u}$on(i,t){if(!O(t))return u;const a=this.$$.callbacks[i]||(this.$$.callbacks[i]=[]);return a.push(t),()=>{const s=a.indexOf(t);s!==-1&&a.splice(s,1)}}$set(i){this.$$set&&!M(i)&&(this.$$.skip_bound=!0,this.$$set(i),this.$$.skip_bound=!1)}}function R(e){let i;return{c(){i=I("body"),i.innerHTML=`<header class="header__cv"><nav><div><div class="roundfirst"></div> 
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
            l&#39;accessibilité pour tous, notamment pour les personnes en situation de
            handicap. Aujourd&#39;hui,
            <strong>développeuse front-end sensibilisée à l&#39;accessibilité</strong>,
            je souhaite mettre mes compétences et mes qualités humaines au service
            de votre entreprise et de vos projets.</p></article></div> 

    
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
            <div class="cv__text"><h3>Expériences</h3></div></div>   
            <p><li>Patience</li> 
                <li>Curiosité</li> 
                <li>Travail d&#39;équipe</li></p> 
            <p><li>Adaptabilité</li> 
                <li>Observation</li> 
                <li>Autonomie</li></p></article></wrapper> 

      <wrapper class="wrapper__cvright"><article class="article__competences"><div class="cv__search"><div class="cv__glass"><lord-icon src="https://cdn.lordicon.com/hgbzryoa.json" trigger="hover" colors="primary:#000000,secondary:#e4e4e4,tertiary:#b26836" style="height:3rem width: 3rem;"></lord-icon></div> 
            <div class="cv__text"><h3>Expériences</h3></div></div> 
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime,
            minus maiores fugit provident nam magnam distinctio quidem sed
            tempora corrupti nihil, voluptatem aliquid! Blanditiis saepe ex ut,
            rerum itaque debitis. Expedita dolorem alias error amet accusamus
            ipsum, dolor soluta molestiae sunt aliquid repudiandae eaque cumque?
            Nesciunt omnis doloribus, quidem veniam iure fugiat consequuntur,
            recusandae neque non cupiditate, tempora quisquam ad.</p></article> 
        <article class="article__loisirs"><div class="cv__search"><div class="cv__glass"><lord-icon src="https://cdn.lordicon.com/hgbzryoa.json" trigger="hover" colors="primary:#000000,secondary:#e4e4e4,tertiary:#b26836" style="height:3rem width: 3rem;"></lord-icon></div> 
            <div class="cv__text"><h3>Expériences</h3></div></div> 
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime,
            minus maiores fugit provident nam magnam distinctio quidem sed
            tempora corrupti nihil, voluptatem aliquid! Blanditiis saepe ex ut,
            rerum itaque debitis. Expedita dolorem alias error amet accusamus
            ipsum, dolor soluta molestiae sunt aliquid repudiandae eaque cumque?
            Nesciunt omnis doloribus, quidem veniam iure fugiat consequuntur,
            recusandae neque non cupiditate, tempora quisquam ad.</p></article></wrapper></section></main> 

  
  <footer></footer>`,P(i,"class","body__cv")},m(t,a){C(t,i,a)},p:u,i:u,o:u,d(t){t&&k(i)}}}class Z extends K{constructor(i){super(),H(this,i,null,R,N,{})}}new Z({target:document.getElementById("app")});
