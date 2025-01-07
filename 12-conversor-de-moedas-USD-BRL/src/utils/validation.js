export const validateAmount = (amount) => {
    const value = parseFloat(amount);
    
    if (isNaN(value)) {
      throw new Error('Por favor, digite um valor numérico válido.');
    }
    
    if (value <= 0) {
      throw new Error('O valor deve ser maior que zero.');
    }
    
    return value;
  };
  