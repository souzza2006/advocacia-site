# Arthur Morgan | Advocacia

Este repositório contém um modelo de página institucional para um escritório de advocacia. O projeto é totalmente estático, sendo construído com HTML, CSS e JavaScript puros, sem dependências externas de build ou instalação.

## Conteúdo do modelo

- Layout responsivo para desktop e celulares;
- Cabeçalho com navegação e botão de contato;
- Seção hero com apresentação clara e mensagem de destaque;
- Áreas de atuação em detalhes expansíveis;
- Etapas do atendimento jurídico;
- Apresentação do advogado com espaço para foto, formação e inscrição profissional;
- Formulário de contato que encaminha a mensagem para o WhatsApp;
- Tema claro e escuro automático, acionado pela preferência do sistema;
- Melhorias de acessibilidade, incluindo foco visível, navegação por teclado e redução de movimento.

## Estrutura dos arquivos

- `index.html`: estrutura e conteúdo da página;
- `styles.css`: visual, responsividade, tipografia e animações;
- `script.js`: menu responsivo, áreas expansíveis e envio do formulário;
- `README.md`: documentação e instruções de uso.

## Como personalizar

1. Abra `index.html` e altere o nome, serviço e textos do escritório.
2. Substitua o espaço reservado da foto profissional pela imagem real do advogado.
3. Informe a formação, a especialidade, a OAB e a frase de apresentação.
4. Atualize o número do WhatsApp no arquivo `script.js`, incluindo código do país e DDD, por exemplo `5511999999999`.
5. Adicione ou remova áreas de atuação no HTML.
6. Ajuste cores, fontes e espaçamentos no arquivo `styles.css`.

> As informações exibidas neste modelo devem ser verdadeiras e verificadas. O formulário não deve receber documentos sigilosos nem substituir uma consulta jurídica.

## Como usar localmente

Abra o arquivo `index.html` diretamente no navegador. Para uma experiência mais completa, você também pode executar um servidor local na pasta do projeto:

```bash
python -m http.server 8000
```

Depois, acesse `http://localhost:8000`.

## Publicar no GitHub

1. Crie um repositório vazio no GitHub.
2. No terminal, execute os comandos abaixo, substituindo `SEU-USUARIO` e `NOME-DO-REPOSITORIO`:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/NOME-DO-REPOSITORIO.git
git push -u origin main
```

3. Ative a opção **Pages** nas configurações do repositório, selecionando a branch `main` e a pasta raiz.

## Observações sobre o modelo

Este é um template para apresentação profissional de um escritório de advocacia. Ele foi desenvolvido para servir de base e pode ser adaptado para outros profissionais da área jurídica, preservando as informações, a ética profissional e a responsabilidade pelo conteúdo publicado.

## Licença

Este projeto é distribuído sem uma licença específica. Recomenda-se que você preserve os créditos e verifique as regras locais antes de publicar conteúdo profissional ou imagens de terceiros.
