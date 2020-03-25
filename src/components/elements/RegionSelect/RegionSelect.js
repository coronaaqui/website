import React from 'react';
import { regionSelectWithStyle } from './RegionSelect.styles';
import Select from 'antd/lib/select';
import { regionsByRegion } from '../../../resources/regions';
import Flag from '../Flag/Flag';

const { Option, OptGroup } = Select;

const RegionSelect = ({ className, defaultValue, onSelect }) => {
  return (
    <>
      <Select
        placeholder='Selecione um estado'
        className={className}
        onSelect={onSelect}
        defaultValue={defaultValue}
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
