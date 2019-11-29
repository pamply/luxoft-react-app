import React, {Component} from "react"

export class ResetPassword extends Component {
    state = { password: "" , display: "form"};

    handleInputChange = e => {
        const { value: password } = e.target;
        this.setState({
            password
        });
    };

    validatePassword = () => {
        if(this.state.password.length > 2) {
            this.setState({display: "success"})
        }
    };

    render() {
        const {email , display} = this.state;
        if(display === "form") {
            return (
                <form>
                    <div className="reset-pwd-group form-group d-flex flex-column">
                        <label className="reset-label" htmlFor="reset-pwd">Reset your password</label>
                        <input
                            id="reset-pwd"
                            type="password"
                            className="reset-input"
                            placeholder="******"
                            value={email}
                            onChange={this.handleInputChange}
                        />
                        <button onClick={this.validatePassword}
                            className="invalid-feedback btn btn-primary">
                            Go!
                        </button>
                    </div>
                </form>
            )
        } else if (display === "success") {
            return (
                <div className="alert alert-success" role="alert">Success!</div>
            )
        }
    }
}
