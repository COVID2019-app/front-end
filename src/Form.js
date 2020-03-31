import React from 'react';
import Form, {
  ButtonItem,
  GroupItem,
  SimpleItem,
  Label,
  CompareRule,
  EmailRule,
  PatternRule,
  RangeRule,
  RequiredRule,
  StringLengthRule,
  AsyncRule,
} from 'devextreme-react/form';
import notify from 'devextreme/ui/notify';
import 'devextreme-react/autocomplete';
import { getCountryList } from './store/actions/index';
import './index.css';
class EditForm extends React.Component {
  constructor(props) {
    super(props);

    this.buttonOptions = {
      text: 'Register',
      type: 'success',
      useSubmitBehavior: true,
    };
    this.checkBoxOptions = {
      text: 'I agree to the Terms and Conditions',
      value: false,
    };
    this.casesEditorOptions = {
      dataSource: getCountryList(),
      minSearchLength: 5,
    };
    this.countryEditorOptions = {
      dataSource: getCountryList(),
    };

    this.maxDate = new Date().setYear(new Date().getYear() - 21);
    this.dateBoxOptions = {
      invalidDateMessage: 'The date must have the following format: MM/dd/yyyy',
    };
    this.state = {
      country: this.props.country,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    const { cases } = this.state;
    return (
      <React.Fragment>
        <form action="your-action" onSubmit={this.handleSubmit}>
          <Form
            formData={cases}
            readOnly={false}
            showColonAfterLabel={true}
            showValidationSummary={true}
            validationGroup="countryData"
          >
            <GroupItem caption="Add Cases">
              <SimpleItem dataField="Email" editorType="dxTextBox">
                <RequiredRule message="Email is required" />
                <EmailRule message="Email is invalid" />
                <AsyncRule
                  message="Email is already registered"
                  validationCallback={asyncValidation}
                />
              </SimpleItem>
            </GroupItem>
            <GroupItem caption="Case  Data">
              <SimpleItem dataField="Type">
                <RequiredRule message="Name is required" />
                <PatternRule
                  message="Do not use digits in the Name"
                  pattern={/^[^0-9]+$/}
                />
              </SimpleItem>
              <SimpleItem
                dataField="Date"
                editorType="dxDateBox"
                editorOptions={this.dateBoxOptions}
              >
                <Label text="Date of report" />
                <RequiredRule message="Report Date Required" />
              </SimpleItem>
            </GroupItem>
            <GroupItem caption="Territory">
              <SimpleItem
                dataField="Country"
                editorType="dxSelectBox"
                editorOptions={this.countryEditorOptions}
              >
                <RequiredRule message="Country is required" />
              </SimpleItem>
              <SimpleItem
                dataField="Region"
                editorType="dxAutocomplete"
                editorOptions={this.cityEditorOptions}
              >
                <PatternRule
                  pattern={/^[^0-9]+$/}
                  message="Do not use digits in the City name"
                />
                <StringLengthRule
                  min={2}
                  message="City must have at least 2 symbols"
                />
                <RequiredRule message="City is required" />
              </SimpleItem>
              <SimpleItem dataField="URL">
                <RequiredRule message="Please enter source url" />
              </SimpleItem>

              <SimpleItem
                dataField="Accepted"
                editorType="dxCheckBox"
                editorOptions={this.checkBoxOptions}
              >
                <Label visible={false} />
                <CompareRule
                  message="You must certify this report is accurte and your source was validated"
                  comparisonTarget={this.checkComparison}
                />
              </SimpleItem>
            </GroupItem>
            <ButtonItem
              horizontalAlignment="center"
              buttonOptions={this.buttonOptions}
            />
          </Form>
        </form>
      </React.Fragment>
    );
  }

  checkComparison() {
    return true;
  }

  handleSubmit(e) {
    notify(
      {
        message: 'You have submitted the form',
        position: {
          my: 'center top',
          at: 'center top',
        },
      },
      'success',
      3000
    );
    e.preventDefault();
  }
}

function sendRequest(value) {
  const validEmail = 'test@test.com';
  return new Promise(resolve => {
    setTimeout(function() {
      resolve(value === validEmail);
    }, 1000);
  });
}

function asyncValidation(params) {
  return sendRequest(params.value);
}

export default EditForm;
