import convert from 'easy-currencies';

export const convertBRLtoUSD = async (amount) => {
  try {
    const rate = await convert('BRL', 'USD');
    const convertedAmount = amount * rate;
    
    return {
      original: amount.toFixed(2),
      converted: convertedAmount.toFixed(2),
      rate: rate.toFixed(4)
    };
  } catch (error) {
    throw new Error('Não foi possível realizar a conversão. Verifique sua conexão com a internet.');
  }
};