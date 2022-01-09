# 🔗 Como contribuir
Este é um projeto totalmente livre que aceita contribuições via pull requests no GitHub. Este documento tem a responsabilidade de alinhar as contribuições de acordo com os padrões estabelecidos no mesmo. Em caso de dúvidas, [abra uma issue](https://github.com/Comunidade-ProgramadoresBR/ProgramaBOT/issues/new/choose).

O bot foi desenvolvido utilizando a biblioteca [Discord.js](https://discord.js.org/#/). Para acessar a documentação, [Clique Aqui!](https://discordjs.guide/#before-you-begin)

## Importante
Sugestões também são muito bem-vindas, para isso basta criar uma issue utilizando o template de feature request. Para criar uma issue você pode [clicar aqui!](https://github.com/Comunidade-ProgramadoresBR/ProgramaBOT/issues/new?assignees=&labels=enhancement&template=feature_request.md&title=%5BFEAT%5D%3A+)

## Primeiros passos
1. Faça um *fork* deste repositório.
2. Faça um clone do respositório *fork* criado
3. Crie uma *branch* para *commitar* a sua *feature* ou correção:
4. Adicione as alterações que você deseja contribuir.
5. Envie seus *commits* conforme o padrão descrito abaixo.
6. Abra um *pull request*.
7. Aguarde até que a sua contribuição seja analisada e aprovada.

*Obs: Sempre mantenha sua branch atualizada com a Main para evitar conflitos.*

Caso você tenha dúvidas sobre o passo a passo, [Clique Aqui!](https://github.com/aprenda-git/pull-request)

## Como usar
Do seu terminal de comando execute:

```bash
# Go into the repository
$ cd ProgramaBOT

# Install dependencies
$ npm i
```
Crie um arquivo *config.json*, você pode usar o arquivo *config.json.example* como template.

Para iniciar o bot é só rodar no seu terminal o seguinte comando: `node .`.

## Como criar um comando novo

Os comandos ficam dentro da pasta *commands*. Para criar um novo comando é só adicionar um novo arquivo .js. Você pode usar o arquivo *ping.js* como referência.

## Mensagens de commit

Sugerimos que as mensagens de commit sigam o padrão do _conventional commit_.

Execute `npm run commit` ou `yarn commit` para ter um painel interativo que permite seguir o padrão de commit de forma fácil.

Para saber mais, acesse esses links:
- [Especificação do Conventional Commit](https://www.conventionalcommits.org/)
- [Regras do @commitlint/config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional).
