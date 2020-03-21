import React from 'react';
import { stateSelectWithStyle } from './StateSelect.styles';
import Select from 'antd/lib/select';
import { statesByRegion, states } from '../../../resources/states';
import Flag from '../Flag/Flag';

const { Option, OptGroup } = Select;

const StateSelect = ({ className }) => {
  return (
    <>
      <Select placeholder='Select um estado' showSearch className={className}>
        {Object.keys(statesByRegion).map(region => (
          <OptGroup label={region}>
            {statesByRegion[region].map(state => (
              <Option value={state.initial}>
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
