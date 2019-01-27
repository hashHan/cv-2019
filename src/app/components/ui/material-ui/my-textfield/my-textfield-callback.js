//from general-setting.js

// Example
// onChildrenCallback = (name, value, error) => { //this returns function(text)... to children
//     loggerDev('onChildrenErrorCallback name: ', name);
//     loggerDev('onChildrenErrorCallback value: ', value);
//     const data =  this.state.data.setIn(['errorObj', name], error).setIn(['userObj', name], value.get(1));
//     //Since this setIn is called almost simultaneously when components mounted,
//     //every children call empty this.state.data.
//     //then every children setState independently, just final child call with one field overwritte every previous setState.
//     loggerDev('onChildrenErrorCallback data:',data.toJS())
//      this.setState({
//         data
//     },()=>loggerDev('after onChildrenCallback: ', this.state.data.toJS()));
// }

// Example
// submitHandler = (event) => {
//     event.preventDefault();

//     if (this.errorCheck()){
//         const newSetting = this.state.data.get('userObj')
//         loggerDev('Send user info to server',newSetting.toJS());
//         loggerDev('Send user info to server2222222222',newSetting.toJS());
//         this.props.dispatch(updateGenerals(newSetting))
//     }else{
//         alert('Please check the validity of your input fields.');
//     }
// }

// Example
// defaultvalueSetting = () => {
//     loggerDev('this.state.defaultValueFlag : ', this.state.defaultValueFlag)
//     if(!this.state.defaultValueFlag){
//         loggerDev('this.state.data.get(fieldSetting): ', this.state.data.get('fieldSetting'));
//         loggerDev('this.props.generals.toJS()', this.props.generals.toJS());
//         //const defaultUserObj = this.state.data.get('userObj')
//         //const defaultUserObj =
//         const newfieldSetting = this.state.data.get('fieldSetting').map(eachField => {
//             //default value setting
//             const fieldId = eachField.get('fieldId')
//             loggerDev('fieldId: ', fieldId)
//             let eachDefaultValue = this.props.generals.get(fieldId);
//             loggerDev('defaultValue: ', eachDefaultValue)
//             if(eachDefaultValue=== "admin_default" ){
//                 if(fieldId==="Email"){
//                     eachDefaultValue = defaultValue.Email
//                 }else if(fieldId==="slackIntro"){
//                     eachDefaultValue = defaultValue.slackIntro
//                 }else if(fieldId==="emailIntro"){
//                     eachDefaultValue = defaultValue.emailIntro
//                 }else if(fieldId==="emailSignature"){
//                     eachDefaultValue = defaultValue.emailSignature
//                 }
//             }
//             let newEachField = eachField.set('fieldDefaultValue',eachDefaultValue);
//             loggerDev('newEachField: ', newEachField)

//             return newEachField
//         })

//         loggerDev('newfieldSetting: ', newfieldSetting);
//         const defaultUserObj = this.props.generals;
//         const newData = this.state.data.set('fieldSetting', newfieldSetting).set('userObj',defaultUserObj);
//         loggerDev('newData: ', newData);
//         this.setState({
//             data: newData,//.setIn(['fieldSetting','defaultValue'], this.props.editedUsers)
//             defaultValueFlag: true,
//         },()=>{
//             loggerDev('general settings defaultValue: ', this.state.data.toJS())

//         });
//     }
// }
