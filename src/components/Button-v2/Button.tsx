// @ts-nocheck
import React, { ReactNode } from 'react';
import bem from 'easy-bem';
import { Button as ButtonAntd, Checkbox } from 'antd';
import { ButtonType } from 'antd/lib/button/button';
import { DownloadOutlined } from '@ant-design/icons';

import './Button.less';


interface ButtonProperties {
    type: ButtonType | 'checkbox' | 'download',
    className?: string,
    imgUrl?: string,
    href?: string,
    icon?: ReactNode,
    onClick: () => void;
}

const Button: React.FC<ButtonProperties> = (props) => {
  const b = bem('ooc-button-v2');
  const {
    className: classNameProp,
    type = 'default',
    imgUrl,
    children,
    ...rest
  } = props;

  if (type === 'checkbox') {
    return (
      <Checkbox
        className={b({ checkbox: true })}
        {...rest}
      >
        {children}
      </Checkbox>
    );
  }

  if (type === 'download') {
    const cn = classNameProp
      ? `${classNameProp} ${b('download')}`
      : `${b('download')}`;

    return (
      <ButtonAntd className={cn} {...rest}>
        <DownloadOutlined />
      </ButtonAntd>
    );
  }

  const cn = classNameProp
    ? `${classNameProp} ${b()}`
    : `${b()}`;

  if (type === 'link' && imgUrl) {
    return (
      <div>
        <img src={imgUrl} alt="" />
        <ButtonAntd className={cn} type={type} {...rest}>
          {children}
        </ButtonAntd>
      </div>
    );
  }

  return (
    <Button className={cn} type={type} {...rest}>
      {children}
    </Button>
  );
};

export default Button;
