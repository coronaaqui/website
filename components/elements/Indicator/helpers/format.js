export function format(number) {
  return !!Number(number)
    ? new Intl.NumberFormat('pt-BR', { maximumSignificantDigits: 3 }).format(
        number
      )
    : '-';
}
