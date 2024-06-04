import React, { useState, useRef, useEffect } from 'react';
import * as S from './styled';
import { Animated } from 'react-native';

interface Props {
  label?: string;
  value?: string; // Prop for controlled component
  onChange?: (text: string) => void; // Prop for controlled component
  secureTextEntry?: boolean
}

export const TextInput = (props: Props) => {
  const { label, value: externalValue, onChange: externalOnChange, secureTextEntry } = props;
  const [internalValue, setInternalValue] = useState('');
  const isControlled = externalValue != null; // Determine if the component is controlled
  const value = isControlled ? externalValue : internalValue; // Use external value if controlled, otherwise internal
  const [isFocused, setIsFocused] = useState(false);
  const labelPosition = useRef(new Animated.Value(value ? 8 : 20)).current;
  const labelSize = useRef(new Animated.Value(value ? 12 : 16)).current;

  useEffect(() => {
    animateLabel(!!value || isFocused);
  }, [value, isFocused]); // React to changes in value or focus state

  const animateLabel = (shouldFocus: boolean) => {
    Animated.parallel([
      Animated.timing(labelPosition, {
        toValue: shouldFocus ? 8 : 20,
        duration: 200,
        useNativeDriver: false
      }),
      Animated.timing(labelSize, {
        toValue: shouldFocus ? 12 : 16,
        duration: 200,
        useNativeDriver: false
      })
    ]).start();
  };

  const handleFocus = () => setIsFocused(true);

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleChangeText = (text: string) => {
    if (!isControlled) {
      setInternalValue(text); // Update internal state if not controlled
    }
    if (externalOnChange) {
      externalOnChange(text); // Call external handler if available
    }
  };

  return (
    <S.InputContainer>
      <S.Label
        style={{
          top: labelPosition,
          fontSize: labelSize
        }}
      >
        {label}
      </S.Label>
      <S.Input
        isFocused={isFocused}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChangeText={handleChangeText}
        value={value} // This is either the internal or external value
        secureTextEntry={secureTextEntry}
      />
    </S.InputContainer>
  );
};

export default TextInput;
