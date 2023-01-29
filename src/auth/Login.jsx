import { useState } from "react";

import validator from "utils/validator";
import loginSchema from "utils/loginSchema";

import Input from "common/Input";
import Button from "common/Button";

function Login() {
    const [data, setData] = useState({
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({});

    const validate = validator(loginSchema);

    const handleChange = (e) => {
        const { name, value } = e.target;
        validate(name, value, { errors, setErrors })
        setData({ ...data, [name]: value });
    }

    const isValid = () => {
        for (const [key, value] of Object.entries(data))
            validate(key, value, { errors, setErrors })

        if (Object.keys(errors).length === 0)
            return true
        else
            return false
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isValid()) {
            console.log("Login Attempt Made");
            console.log(data);
        } else {
            console.log("Form validation failed");
        }
    }

    return (
        <div>
            <div className="container-fluid">
                <div className="row vh-100 justify-content-center align-items-center" style={{ "backgroundColor": "darkgray" }}>
                    <div className="col-5">
                        <div className="row">
                            <div className="col-12 text-center">
                                <h1>Login</h1>
                            </div>

                            <div className="col-12 border rounded-2 p-5 bg-white">
                                <form onSubmit={handleSubmit}>
                                    <Input
                                        label="Email"
                                        type="text"
                                        placeholder="Enter email..."
                                        name="email"
                                        id="email"
                                        value={data.email}
                                        error={errors?.email}
                                        handler={handleChange}
                                    />

                                    <Input
                                        label="Password"
                                        type="password"
                                        placeholder="Enter password..."
                                        name="password"
                                        id="password"
                                        value={data.password}
                                        error={errors?.password}
                                        handler={handleChange}
                                    />

                                    <Button label="Login" type="submit" color="primary" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;