import React from 'react';
import { countrySelectWithStyle } from './CountrySelect.styles';
import Select from 'antd/lib/select';

const { Option, OptGroup } = Select;

const CountrySelect = ({ className }) => {
  return (
    <Select placeholder='Select um estado' showSearch className={className}>
      <OptGroup label='Nordeste'>
        <Option value='jack'>Bahia</Option>
        <Option value='lucy'>Pernambuco</Option>
      </OptGroup>
    </Select>
  );
};

export default countrySelectWithStyle(CountrySelect);
