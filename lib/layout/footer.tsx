import React from 'react';
import { scopedClassMaker } from '../scoped-class-maker';

const sc = scopedClassMaker('xc-layout-footer')

interface Props extends React.HTMLAttributes<HTMLElement> {
}

const Footer: React.FunctionComponent<Props> = ({
  className,
  ...restProps
}) => {
  return (
    <div className={sc('', {extra: className})} {...restProps}>footer</div>
  )
};

export default Footer;