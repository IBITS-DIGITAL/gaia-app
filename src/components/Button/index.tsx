import React from 'react';
import * as S from './styled';

interface Props {
  href?: string;
  text?: string;
  onPress?: (e: any) => void; // Prop for controlled component
  width?: string
}

export const Button = (props: Props) => {
  const { text, onPress, href, width = '100%' } = props;
  return (
    <S.ButtonContainer width={width}>
      <S.Button
        href={href || "/"} // Link destination for navigation
        onPress={onPress}
      >
        <S.ButtonText>
          {text || 'Button Text'}
        </S.ButtonText>
      </S.Button>
    </S.ButtonContainer>
  );
};


export default Button;
