export function format(number) {
  const parsedNumber = Number(number);

  return !isNaN(parsedNumber)
    ? new Intl.NumberFormat('pt-BR', { style: 'decimal' }).format(
        parsedNumber
      )
    : '-';
}
