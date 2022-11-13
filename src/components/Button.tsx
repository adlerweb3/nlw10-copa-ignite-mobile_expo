//Just changed Button component name to avoid confict with our Button component
import { Button as ButtonNativeBase, Text, IButtonProps } from 'native-base';

//extends IButtonProps to access all Native-Base Button Props
interface Props extends IButtonProps {
  title: string;
  textColor: string;
  type?: 'PRIMARY' | 'SECONDARY';
}

// ...rest allow to use all orthers properties not listed in interface
export function Button({ title, textColor, type = 'PRIMARY', ...rest }: Props) {
  return (
    <ButtonNativeBase
      w='full'
      h={14}
      rounded='sm'
      fontSize='md'
      textTransform='uppercase'
      bg={type === 'SECONDARY' ? 'red.500' : 'yellow.500'}
      _pressed={{
        bg: type === 'SECONDARY' ? 'red.600' : 'yellow.600'
      }}
      _loading={{
        _spinner: { color: 'black' }
      }}

      {...rest}
    >
      <Text
        fontSize='sm'
        fontFamily='heading'
        // color={ type === 'SECONDARY ? 'white' : 'black' }
        color={textColor}
      >
        {title}
      </Text>
    </ButtonNativeBase>
  )
}