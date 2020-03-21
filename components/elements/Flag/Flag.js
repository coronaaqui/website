import React from 'react';
import dynamic from 'next/dynamic';

/* import AL from '../../../resources/states/AL.jpg';
import AC from '../../../resources/states/AC.jpg';
import AM from '../../../resources/states/AM.jpg';
import AP from '../../../resources/states/AP.jpg';
import BA from '../../../resources/states/BA.jpg'; */
/* import('../../../resources/states/CE.svg'))
import('../../../resources/states/ES.svg'))
import('../../../resources/states/DF.svg'))
import('../../../resources/states/GO.svg'))
import('../../../resources/states/MA.svg'))
import('../../../resources/states/MG.svg'))
import('../../../resources/states/MS.svg'))
import('../../../resources/states/MT.svg'))
import('../../../resources/states/PA.svg'))
import('../../../resources/states/PB.svg'))
import('../../../resources/states/PE.svg'))
import('../../../resources/states/PI.svg'))
import('../../../resources/states/PR.svg')
import('../../../resources/states/RJ.svg')
import('../../../resources/states/RN.svg')
import('../../../resources/states/RO.svg')
import('../../../resources/states/RR.svg')
import('../../../resources/states/RS.svg')
import('../../../resources/states/SC.svg')
import('../../../resources/states/SE.svg')
import('../../../resources/states/SP.svg')
import('../../../resources/states/TO.svg')
 */
import { flagWithStyle } from './Flag.styles';

/* const FlagIcons = {
  AL,
  AC,
  AM,
  AP,
  BA
};
 */
const Flag = ({ state = 'BA', className }) => {
  /* const Icon = FlagIcons[state];
  console.log(BA); */
  return (
    <figure className={'flag ' + className} alt={state}>
      <img width='23px' src={`/static/${state}.svg`} />
    </figure>
  );
};

export default flagWithStyle(Flag);
