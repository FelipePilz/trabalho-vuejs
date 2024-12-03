const PaginaHome = {
    template: `
    <div id="home">
      <h1>{{ title }}</h1>
      <h2> {{ slogan }} </h2>
      <img :src="image" alt="Cortador de grama de bike">
    </div>
  `,
    data() {
        return {
            title: "GAMBITECH",
            slogan: "Inovação em cada gambiarra!",
            image: this.getRandomImg()
        }
    },
    methods: {
        getRandomImg() {
            const images = [
                "https://engenharia360.com/wp-content/uploads/pessoas-dom-gambiarra-blog-da-engenharia-1.jpg",
                "https://www.humordido.net/wp-content/uploads/2020/08/gambiarra.jpg",
                "https://www.caoguimaraes.com/wordpress/wp-content/uploads/2012/12/04-gambiarras.jpg",
                "https://i.imgur.com/nfLA6C4.jpg",
                "https://img.redbull.com/images/c_fill,g_auto,w_850,h_567/q_auto:low,f_auto/redbullcom/2014/04/19/1331646362467_2/o-jeito-mais-f%C3%A1cil-de-assar-uma-calabresa.jpg"
            ];
            return images[Math.floor(Math.random() * images.length)];
        }
    }
};

const home = Vue.createApp({
    data() {
        return {
            paginaAtual: 'home',
            componentes: {
                home: PaginaHome,
                sobre: PaginaSobre,
                contato: PaginaContato
            },
        };
    },
    methods: {
        trocaPagina(paginaAtual) {
            let buttonSuffix = "Button";
            document.getElementById(this.paginaAtual + buttonSuffix).disabled = false;
            this.paginaAtual = paginaAtual;
            document.getElementById(this.paginaAtual + buttonSuffix).disabled = true;
        }
    },
    template: `
      <div>
        <nav>
          <button id="homeButton" @click="trocaPagina('home')" disabled>Página Inicial</button>
          <button id="sobreButton" @click="trocaPagina('sobre')">Sobre Nós</button>
          <button id="contatoButton" @click="trocaPagina('contato')">Contato</button>
        </nav>
  
        <section>
          <component :is="componentes[paginaAtual]"></component>
        </section>
      </div>    `
});

home.mount('#app');