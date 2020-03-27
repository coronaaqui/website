export function format(number) {
  const parsedNumber = Number(number);

  return !isNaN(parsedNumber)
    ? new Intl.NumberFormat('pt-BR', { maximumSignificantDigits: 3 }).format(
        parsedNumber
      )
    : '-';
}
