import React, {Component} from "react"

export class ResetPassword extends Component {
    state = { password: ""};

    handleInputChange = e => {
        const { value: password } = e.target;
        this.setState({
            password
        });
    };
    render() {
        const {email} = this.state;
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
                    <button className="invalid-feedback btn btn-primary">
                        Go!
                    </button>
                </div>
            </form>
        )

    }
}
