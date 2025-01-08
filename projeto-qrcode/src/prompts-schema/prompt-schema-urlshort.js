import chalk from "chalk";

const promptSchemaUrl = {
  properties: {
    url: {
      description: chalk.yellow("Digite a URL que deseja encurtar"),
      required: true,
      message: chalk.red.italic("A URL é obrigatória")
    }
  }
};

export default promptSchemaUrl;