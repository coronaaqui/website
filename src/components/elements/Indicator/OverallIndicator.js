import React from 'react';
import { overallIndicatorWithStyle, OverallItem } from './OverallIndicator.styles';
import {
  HomeOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
} from '@ant-design/icons';
import { format } from './helpers/format';

const OverallIndicator = ({ className, metrics }) => {
  return (
    <div className={'overall-indicator ' + className}>
      {metrics.map(({ label, value, arrow = { direction: 'up', type: 'success ' } }) => (
        <OverallItem
          key={JSON.stringify({ label, value })}
          arrow={arrow}
          className='overall-indicator__item'
        >
          <p className='value'>
            {format(value)} {arrow.direction === 'up' ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
          </p>
          <h3 className='title'>{label}</h3>
        </OverallItem>
      ))}
    </div>
  );
};

export default overallIndicatorWithStyle(OverallIndicator);
