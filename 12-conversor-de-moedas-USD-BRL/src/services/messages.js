import chalk from 'chalk';

export const messages = {
  welcome: () => chalk.blue.bold('\n💰 Bem-vindo ao Conversor de Moedas 💰\n'),
  askAmount: () => chalk.yellow('Digite o valor em Reais (BRL): '),
  result: (brl, usd, rate) => chalk.green(`
    Valor em BRL: R$ ${brl}
    Valor em USD: $ ${usd}
    Taxa de câmbio: ${rate}
  `),
  error: (message) => chalk.red(`❌ Erro: ${message}`),
  exit: () => chalk.blue('\nObrigado por usar nosso conversor! 👋\n')
};