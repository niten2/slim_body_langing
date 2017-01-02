// get UIStore.validate

// import { Form } from 'formsy-react'
// import FormInput from 'validate/input'

// // validate form
// handleKeyDown = (target) => {
//   if (target.charCode == 13) {
//     this.onSubmit()
//   }
// }
// onSubmit = (data) => {
//   let name = data.name
//   this.handleCreateUpdate({name})
// }
// componentWillUnmount() {
//   UIStore.validate.setDefault()
// }

// <Form
//   onSubmit={ this.onSubmit }
//   onValid={ UIStore.validate.setEnableButton }
//   onInvalid={ UIStore.validate.setDisableButton }
// >

// <FormInput
//   type="text"
//   name='name'
//   required
//   value={ this.state.setName }
//   onKeyPress={ this.handleKeyDown }
// />

// <Button
//   type="submit"
//   className="btn btn-primary btn-lg"
//   disabled={ !UIStore.validate.canSubmit }
// >{this.state.loading ? 'Saving' : 'Ok'}</Button>

// </Form>

'use strict';
var React = require('react');
var Formsy = require('formsy-react');
var ComponentMixin = require('./component');

var Input = React.createClass({

    mixins: [Formsy.Mixin, ComponentMixin],

    propTypes: {
        type: React.PropTypes.oneOf([
            'color',
            'date',
            'datetime',
            'datetime-local',
            'email',
            'hidden',
            'month',
            'number',
            'password',
            'range',
            'search',
            'tel',
            'text',
            'time',
            'url',
            'week'
        ]),
        addonBefore: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.node
        ]),
        addonAfter: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.node
        ]),
        buttonBefore: React.PropTypes.node,
        buttonAfter: React.PropTypes.node
    },

    getDefaultProps: function() {
        return {
            type: 'text',
            addonBefore: null,
            addonAfter: null,
            buttonBefore: null,
            buttonAfter: null
        };
    },

    changeValue: function(event) {
        var value = event.currentTarget.value;
        this.setValue(value);
        this.props.onChange(this.props.name, value);
    },

    render: function() {
        var element = this.renderElement();

        if (this.props.type === 'hidden') {
            return element;
        }

        if (this.props.addonBefore || this.props.addonAfter || this.props.buttonBefore || this.props.buttonAfter) {
            element = this.renderInputGroup(element);
        }

        if (this.getLayout() === 'elementOnly') {
            return element;
        }

        let isRequired = this.showRequired() ? "isRequired" : null
        let renderErrorIsRequired = this.isPristine() ? null : isRequired


        return (
          <div>
          <div className="form-group input-down">
            <div className="input-group input-group-lg">
              <div className="input-group-addon">
                <span className={this.props.icon} />
              </div>
              {element}
          </div>
          <div>
              { this.showRequired() ? this.renderHelp() : null}
              <div className="auth-errors-validate">{this.renderErrorMessage()}</div>
              <div className="auth-errors-validate">{renderErrorIsRequired}</div>
            </div>
          </div>
          </div>
        );
    },

    renderElement: function() {
        if (['range'].indexOf(this.props.type) !== -1) {
            className = null;
        }
        // console.log(this.props)
        let {type, className, name, placeholder, required, validatePristine} = this.props
        return (
            <input

              name={name}
              className={className}
              placeholder={placeholder}
              required={required}
              type={type}

              ref={(c) => this.element = c}
              id={this.getId()}
              label={null}
              value={this.getValue()}
              onChange={this.changeValue}
              disabled={this.isFormDisabled() || this.props.disabled}
            />
        );
    },

    renderInputGroup: function(element) {
        return (
            <div className="input-group">
                {this.renderAddon(this.props.addonBefore)}
                {this.renderButton(this.props.buttonBefore)}
                {element}
                {this.renderAddon(this.props.addonAfter)}
                {this.renderButton(this.props.buttonAfter)}
            </div>
        );
    },

    renderAddon: function(addon) {
        if (!addon) {
            return false;
        }
        return (
            <span className="input-group-addon">{addon}</span>
        );
    },

    renderButton: function(button) {
        if (!button) {
            return false;
        }
        return (
            <span className="input-group-btn">{button}</span>
        );
    }

});

module.exports = Input;
