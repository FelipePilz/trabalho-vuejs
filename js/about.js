const PaginaSobre = {
    template: `
      <div id="about">
        <h1>{{title}}</h1>
        <p>{{firstParagraph}}</p>
        <p>{{secondParagraph}}</p>
        <p>{{thirdParagraph}}</p>
      </div>
    `,
    data() {
        return {
            title: "Sobre nós",
            firstParagraph : "Na GambiTech, acreditamos que a criatividade pode resolver qualquer problema. Somos uma empresa que nasceu com o objetivo de transformar a solução de problemas cotidianos em uma experiência divertida, prática e inovadora. Somos apaixonados por gambiarras — aquelas soluções criativas e improvisadas que fazem a diferença quando mais precisamos delas.",
            secondParagraph: "Tudo começou quando um grupo de amigos, cansados de ver tantas soluções caras e complicadas, decidiu se unir para compartilhar com o mundo o prazer de 'quebrar o galho'' de forma engenhosa e econômica. Desde então, temos criado produtos e conteúdos para ajudar pessoas a solucionar desafios de maneira criativa e acessível.",
            thirdParagraph: "Aqui na GambiTech, acreditamos que todo desafio é uma oportunidade para pensar fora da caixa. E é por isso que oferecemos uma linha de produtos únicos e ferramentas que estimulam a inovação, além de uma série de tutoriais e workshops para ensinar qualquer um a se tornar um mestre das gambiarras."
        }
    }
};
