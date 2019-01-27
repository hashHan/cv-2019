import React, { Component } from "react";
import { Map, List, Record, fromJS, toJS } from "immutable";

import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { myCheckValidity } from "../../../../lib/check-validity";
import { loggerDev } from "../../../../lib/logger";

export class MytextField extends Component {
  state = {
    data: fromJS({
      defaultString: "",
      valueString: "",
      valid: false,
      touched: false,
      errorArray: []
    })
  };

  handleChange = (rule, valueString) => {
    // add it to fetch process!
    const eachCheck = myCheckValidity(valueString, rule);
    loggerDev(eachCheck);
    const eachValid = eachCheck.isValid;
    const eachErrorArray = fromJS(eachCheck.errorArray);
    const valueList = fromJS(["dummyelem", valueString]);
    loggerDev(eachErrorArray);
    this.setState({
      data: this.state.data
        .set("valueString", valueString)
        .set("valid", eachValid)
        .set("touched", true)
        .set("errorArray", eachErrorArray)
    });

    loggerDev("value:", valueString);
    loggerDev("valueList: ", valueList);
    loggerDev("eachErrorArray:", eachErrorArray);

    this.props.parentChanger(this.props.fieldName, valueList, eachErrorArray);
  };

  // componentDidMount = () => {
  //     //Since this setIn is called almost simultaneously when components mounted,
  //     //every children call empty this.state.data.
  //     //then every children setState independently, just final child call with one field overwritte every previous setState.
  //     loggerDev('Mytextfield componentDidMount this.props.fieldDefaultValue: ',this.props.fieldDefaultValue);
  //     let valueString = this.state.data.get('valueString');
  //     const touched = this.state.data.get('touched');
  //     if(this.props.fieldDefaultValue && !touched){
  //         valueString = this.props.fieldDefaultValue;
  //         loggerDev('value string: ', valueString)
  //         this.setState({
  //             data: this.state.data
  //                     .set('valueString', valueString)
  //         },()=>{
  //             loggerDev('my-textfield state values in componentWillReceiveProps: ', this.state.data.get('valueString'))
  //             // const valueList = fromJS(['dummyelem', valueString]);
  //             // const eachErrorArray = fromJS([]);
  //             //this.props.parentChanger(this.props.fieldName, valueList, eachErrorArray);
  //         });
  //     }
  // }

  static getDerivedStateFromProps(props, state) {
    // Any time the current sorteddata changes,
    // Reset any parts of state that are tied to that sorteddata.
    // In this simple example, these are just sorteddata, orderBy and selected.
    if (props.fieldDefaultValue !== state.data.get("defaultString")) {
      return {
        data: state.data
          .set("defaultString", props.fieldDefaultValue)
          .set("valueString", props.fieldDefaultValue)
          .set("valid", false)
          .set("touched", false)
          .set("errorArray", List())
      };
    }
    return null;
  }

  render() {
    const valid = this.state.data.get("valid");
    const touched = this.state.data.get("touched");
    const errorArray = this.state.data.get("errorArray").toJS();
    const valueString = this.state.data.get("valueString");
    loggerDev("this.props.fieldStyle: ", this.props.fieldStyle);
    return (
      <TextField
        style={this.props.fieldStyle}
        id={this.props.fieldId}
        type={this.props.fieldType}
        label={this.props.fieldLabel}
        value={valueString}
        disabled={this.props.fieldDisabled}
        error={!valid && touched ? true : null}
        helperText={!valid && touched ? errorArray : null}
        onChange={event =>
          this.handleChange(this.props.fieldRule, event.target.value)
        }
        margin={this.props.fieldMargin}
        multiline={this.props.fieldMultiline}
        fullWidth={this.props.fieldFullWidth}
        select={this.props.fieldSelect}
        SelectProps={this.props.fieldSelectProps}
      >
        {/* {this.props.fieldChildren
                    ?this.props.fieldDefaultValue
                        ?this.props.fieldDefaultValue
                        :this.props.fieldChildren
                    :null}                 */}
        {/* test children */}
        {this.props.fieldChildren}
      </TextField>
    );
  }
}
