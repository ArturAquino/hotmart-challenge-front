export const currency = (code, symbol, value) => {
    const formatValue = new Intl.NumberFormat({ style: 'currency', currency: code }).format(Number(value))
    
    return `${symbol} ${formatValue}`
}

