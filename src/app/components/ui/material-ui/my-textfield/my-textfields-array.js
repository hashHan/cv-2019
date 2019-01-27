import React from "react";

//import { MyDefaultButton } from '../../../components/ui/material-ui/my-buttons';

import { MytextField } from "./my-textfield";

export const MyTextFieldsArray = props => {
  //loggerDev('props.fieldDefaultValue: ',props.fieldDefaultValue)
  const fieldArrayComponent = props.fieldSetting
    .map((value, i) => {
      return (
        <MytextField
          key={i}
          //fieldStyle={{ display: 'inline' }}
          //fieldMargin="normal"
          //parentStateChanger={props.parentStateChanger}
          //parentErrorChanger={props.parentErrorChanger}
          parentChanger={props.parentChanger}
          {...props.fieldSetting[i]}
          //fieldDefaultValue={props.fieldDefaultValue && props.fieldDefaultValue[i]? props.fieldDefaultValue[i]:null}
        />
      );
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  return (
    <form style={{ display: "flex", flexWrap: "wrap" }}>
      {fieldArrayComponent}
      {/* <MyDefaultButton onClick={props.parentLineDeleter} raised primary>Delete Line</MyDefaultButton> */}
    </form>
  );
};
