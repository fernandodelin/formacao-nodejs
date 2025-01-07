import { prompt } from './services/prompt-schema.js';
import { messages } from './services/messages.js';
import { validateAmount } from './utils/validation.js';
import { convertBRLtoUSD } from './converter.js';


async function main() {
  try {
    // Exibe mensagem de boas-vindas
    console.log(messages.welcome());
    
    // Solicita o valor
    const input = prompt(messages.askAmount());
    
    // Valida a entrada
    const amount = validateAmount(input);
    
    // Realiza a conversão
    const result = await convertBRLtoUSD(amount);
    
    // Exibe o resultado
    console.log(messages.result(result.original, result.converted, result.rate));
    
  } catch (error) {
    console.log(messages.error(error.message));
  } finally {
    console.log(messages.exit());
  }
}

main();