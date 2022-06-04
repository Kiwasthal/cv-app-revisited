import styled from 'styled-components';
import { useState } from 'react';

const EditingForm = props => {
  const { formHandling, edit, index, values, labels } = props;

  const firstInput = useInput(values.first);
  const secondInput = useInput(values.second);
  const thirdInput = useInput(values.third);
  const fourthInput = useInput(values.fourth);

  const handler = () => {
    console.log(index, firstInput.value);
    edit(
      index,
      firstInput.value,
      secondInput.value,
      thirdInput.value,
      fourthInput.value
    );
    formHandling.onClick();
  };

  return (
    <div>
      <button {...formHandling}>+</button>
      <div>
        <label>{labels[0]}</label>
        <input {...firstInput} />
      </div>
      <div>
        <label>{labels[1]}</label>
        <input {...secondInput} />
      </div>
      <div>
        <label>{labels[2]}</label>
        <input {...thirdInput} />
      </div>
      <div>
        <label>{labels[3]}</label>
        <input {...fourthInput} />
      </div>
      <button onClick={handler}>Add</button>
    </div>
  );
};

const useInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  const handleChange = e => setValue(e.target.value);

  return {
    value,
    onChange: handleChange,
  };
};

export default EditingForm;
