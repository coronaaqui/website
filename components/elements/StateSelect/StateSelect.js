import React from 'react';
import { stateSelectWithStyle } from './StateSelect.styles';
import Select from 'antd/lib/select';
import { statesByRegion } from '../../../resources/states';
import Flag from '../Flag/Flag';

const { Option, OptGroup } = Select;

const StateSelect = ({ className, onSelect }) => {
  return (
    <>
      <Select
        placeholder='Select um estado'
        className={className}
        onSelect={onSelect}
        showSearch
      >
        {Object.keys(statesByRegion).map(region => (
          <OptGroup key={region} label={region}>
            {statesByRegion[region].map(state => (
              <Option key={JSON.stringify(state)} value={state.name}>
                <Flag state={state.initial} />
                {state.name}
              </Option>
            ))}
          </OptGroup>
        ))}
      </Select>
    </>
  );
};

export default stateSelectWithStyle(StateSelect);
