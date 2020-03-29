import calango from 'calango';

export const regions = [
  {
    initial: 'AC',
    name: 'Acre',
    region: 'Norte',
  },
  {
    initial: 'AL',
    name: 'Alagoas',
    region: 'Nordeste',
  },
  {
    initial: 'AM',
    name: 'Amazonas',
    region: 'Norte',
  },
  {
    initial: 'AP',
    name: 'Amapá',
    region: 'Norte',
  },
  {
    initial: 'BA',
    name: 'Bahia',
    region: 'Nordeste',
  },
  {
    initial: 'CE',
    name: 'Ceará',
    region: 'Nordeste',
  },
  {
    initial: 'DF',
    name: 'Distrito Federal',
    region: 'Distrito Federal',
  },
  {
    initial: 'ES',
    name: 'Espírito Santo',
    region: 'Sudeste',
  },
  {
    initial: 'GO',
    name: 'Goiás',
    region: 'Centro-Oeste',
  },
  {
    initial: 'MA',
    name: 'Maranhão',
    region: 'Nordeste',
  },
  {
    initial: 'MG',
    name: 'Minas Gerais',
    region: 'Sudeste',
  },
  {
    initial: 'MS',
    name: 'Mato Grosso do Sul',
    region: 'Centro-Oeste',
  },
  {
    initial: 'MT',
    name: 'Mato Grosso',
    region: 'Centro-Oeste',
  },
  {
    initial: 'PA',
    name: 'Pará',
    region: 'Norte',
  },
  {
    initial: 'PB',
    name: 'Paraíba',
    region: 'Nordeste',
  },
  {
    initial: 'PE',
    name: 'Pernambuco',
    region: 'Nordeste',
  },
  {
    initial: 'PI',
    name: 'Piauí',
    region: 'Nordeste',
  },
  {
    initial: 'PR',
    name: 'Paraná',
    region: 'Sul',
  },
  {
    initial: 'RJ',
    name: 'Rio de Janeiro',
    region: 'Sudeste',
  },
  {
    initial: 'RN',
    name: 'Rio Grande do Norte',
    region: 'Nordeste',
  },
  {
    initial: 'RO',
    name: 'Rondônia',
    region: 'Norte',
  },
  {
    initial: 'RR',
    name: 'Roraima',
    region: 'Norte',
  },
  {
    initial: 'RS',
    name: 'Rio Grande do Sul',
    region: 'Sul',
  },
  {
    initial: 'SC',
    name: 'Santa Catarina',
    region: 'Sul',
  },
  {
    initial: 'SE',
    name: 'Sergipe',
    region: 'Nordeste',
  },
  {
    initial: 'SP',
    name: 'São Paulo',
    region: 'Sudeste',
  },
  {
    initial: 'TO',
    name: 'Tocantins',
    region: 'Norte',
  },
];

export const regionsByRegion = regions.reduce((acc, curr) => {
  return {
    ...acc,
    [curr.region]: [...(acc[curr.region] || []), curr],
  };
}, {});

export const popularRegions = [
  {
    initial: 'BA',
    name: 'Bahia',
    region: 'Nordeste',
  },
  {
    initial: 'RJ',
    name: 'Rio de Janeiro',
    region: 'Sudeste',
  },
  {
    initial: 'SP',
    name: 'São Paulo',
    region: 'Sudeste',
  },
  {
    initial: 'PE',
    name: 'Pernambuco',
    region: 'Nordeste',
  },
  {
    initial: 'MA',
    name: 'Maranhão',
    region: 'Nordeste',
  },
  {
    initial: 'MG',
    name: 'Minas Gerais',
    region: 'Sudeste',
  },
];
