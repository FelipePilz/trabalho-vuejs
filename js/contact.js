const PaginaContato = {
    template: `
      <div id="contact">
        <h1>{{title}}</h1>
        <p>{{paragraph}}</p>
        <form>
          <label for="nome">{{nameInputLabel}}</label><br>
          <input type="text" id="nome" name="nome"><br>
          
          <label for="email">{{emailInputLabel}}</label><br>
          <input type="email" id="email" name="email"><br>
  
          <label for="mensagem">{{messageInputLabel}}</label><br>
          <textarea id="mensagem" name="mensagem"></textarea>
  
          <button type="submit" @click="submitContactForm">Enviar</button>
        </form>
      </div>
    `,
    data() {
        return {
            title: "Entre em contato",
            paragraph : "Gostaria de uma gambiarra na sua vida? entre em contato com a gente!",
            nameInputLabel: "Seu nome:",
            emailInputLabel: "Email de contato",
            messageInputLabel: "Descreva sua situação:"
        }
    },
    methods: {
        submitContactForm() {
            alert('Contato enviado com sucesso!')
        }
    },
};

