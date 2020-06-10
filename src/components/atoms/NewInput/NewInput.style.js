import styled from 'styled-components';
import { Form, Input as InputAntd} from 'antd';
import InputWithMask from 'react-input-mask';

const { Item } = Form;

export const InputBase = styled(Item)``;

export const InputText = styled(InputAntd)``;

export const InputMasked = styled(InputWithMask)``;
