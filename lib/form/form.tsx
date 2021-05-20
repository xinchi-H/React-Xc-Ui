import React, { ReactFragment } from 'react';
import Input from '../input/input';
import './form.scss'
import { scopedClassMaker } from '../helpers/classes';

export interface FormValue {
  [k: string]: any
}

interface Props {
  value: FormValue;
  fields: Array<{name: string, label: string, input: {type: string}}>;
  buttons: ReactFragment;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  onChange: (value: FormValue) => void;
  errors: {[K: string]: string[]}
}

const sc = scopedClassMaker('xc-form')

const Form: React.FunctionComponent<Props> = (props) => {
  const formData = props.value;
  const onsubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    props.onSubmit(e);
  };
  const onInputChange = (name: string, value: string) => {
    const newValue = {...formData, [name]: value}
    props.onChange(newValue);
  };
  return (
    <form onSubmit={onsubmit}>
      <table>
        {props.fields.map(f =>
          <tr
            className={sc('tr')}
            key={f.name}
          >
            <td className={sc('td')}>
              <span className={sc('label')}>{f.label}</span>
            </td>
            <td className={sc('td')}>
              <Input
                type={f.input.type}
                value={formData[f.name]}
                onChange={(e) => onInputChange(f.name, e.target.value)}
              />
              <div>{props.errors[f.name]}</div>
            </td>
          </tr>
        )}
        <tr className={sc('tr')}>
          <td  className={sc('td')}/>
          <td className={sc('td')}>
            {props.buttons}
          </td>
        </tr>
      </table>
    </form>
  )
}

export default Form;