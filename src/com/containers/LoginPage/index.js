import React, {Component, PropTypes} from 'react';
import styles from './index.less';
import './index.css';
import {AutoComplete, RaisedButton, Paper, TextField} from 'material-ui';
import {connect} from 'react-redux';
import {formChange, operation} from './actions'
import {selector} from './selectors';
import {validateEmail} from '../../utils/validateUtils'
class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.displayName = 'LoginPage';
    }

    componentDidMount() {
       // this.props.formChange({form: {password: "111", email: ""}})
    }

    render() {
        return (
            <div className={styles.login_back}>
                <div className={styles.form_wrapper}>
                    <Paper zDepth={1} className={styles.form_container}>
                        <h1 className={styles.login_title}>Login</h1>
                        <div className={styles.input_wrapper}>
                            <TextField
                                floatingLabelText="Email"
                                className={styles.auto_wrapper}
                                style={{width: 100 + "%"}}
                                value={this.props.form.get('email')}
                                onChange={this.handleEmailChange}
                                onBlur={this.handleValidateEmail}
                                errorText={this.props.form.get('errorEmailHintText')}
                                disabled={this.props.isRequesting}
                                autoComplete="off"
                            />
                        </div>

                        <div className={styles.input_wrapper}>
                            <TextField
                                floatingLabelText="Password"
                                className={styles.auto_wrapper}
                                style={{width: 100 + "%"}}
                                type="password"
                                value={this.props.form.get('password')}
                                onChange={this.handlePwdChange}
                                errorText={this.props.form.get('errorPasswordHintText')}
                                disabled={this.props.isRequesting}
                                onBlur={this.handleValidatePassword}
                                autoComplete="off"
                            />
                        </div>
                        <RaisedButton
                            label='Login'
                            fullWidth={true}
                            primary={true}
                            className={styles.login_button}
                            onClick={this.handleSubmit}
                            disabled={this.props.isRequesting}
                        />
                    </Paper>
                </div>
            </div>
        )
    }

    handleEmailChange = (e, value) => {
        let field = {
            form: {
                errorEmailHintText: '',
                email: value
            }
        };
        console.log('handleEmail')
        this.props.formChange(field);
    }
    handlePwdChange = (e, value) => {
        let field = {
            form: {
                errorPasswordHintText: '',
                password: value
            }
        };
        this.props.formChange(field);
    };
    handleSubmit = (e) => {
        let submitdata = {};
        submitdata.email = this.props.form.get('email');
        submitdata.password = this.props.form.get('password');
        console.log(submitdata);
        this.props.login(submitdata);
    };
    handleValidateEmail = (e) => {
        if (validateEmail(this.props.form.get('email'))) {
            console.log('this is a valid email')


        }
        else {
            let field = {
                form: {
                    errorEmailHintText: "this is an invalid email"
                }
            };

            console.log('this is an invalid email');
            this.props.formChange(field);
        }
    }
    handleValidatePassword = (e) => {
        let field = {
            form: {
                errorPasswordHintText: ''
            }
        }
        if (this.props.form.get('password')) {
            if (this.props.form.get('password').length < 9) {
                field.form.errorPasswordHintText = 'pass word can\'t less than 9 word'
            }
        }
        else {
            field.form.errorPasswordHintText = 'please input your password'
        }
        this.props.formChange(field);
    }
}

export default connect(selector, {
    formChange,
    login: operation.request
})(LoginPage)