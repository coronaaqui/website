import React, { useState, useMemo } from 'react';
import { regionSelectWithStyle } from './RegionSelect.styles';
import Select from 'antd/lib/select';
import { regionsByRegion } from '../../../resources/regions';
import Flag from '../Flag/Flag';

const { Option, OptGroup } = Select;

function cleanStr(str) {
  return str !== null && typeof str === 'string'
    ? str.toLowerCase().replace(' ', '')
    : str;
}

function generateSearchTerms(item) {
  const term = cleanStr(Object.values(item).join(''));

  return term;
}

const RegionSelect = ({ className, defaultValue, onSelect }) => {
  const [query, setQuery] = useState(null);

  const handleSearch = q => {
    setQuery(q);
  };

  return (
    <>
      <Select
        placeholder='Selecione um estado'
        className={className}
        onSelect={onSelect}
        defaultValue={defaultValue}
        onSearch={handleSearch}
        showSearch
      >
        {Object.keys(regionsByRegion).map(region => (
          <OptGroup key={region} label={region}>
            {regionsByRegion[region].map(region => (
              <Option key={JSON.stringify(region)} value={region.name}>
                <Flag region={region.initial} />
                {region.name}
              </Option>
            ))}
          </OptGroup>
        ))}
      </Select>
    </>
  );
};

export default regionSelectWithStyle(RegionSelect);
