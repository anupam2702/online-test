import React, { useState } from "react"
// import onlineTestApp from "./onlineTestApp";
const RegisterForm = ({ changeState }) => {
    const [userRegistration, setuserRegistration] = useState({
        username: "",
        email: "",
        phone: "",
        language: ""
    });
    const [records, setRecords] = useState([]);


    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value)
        setuserRegistration({ ...userRegistration, [name]: value })

    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const newRecord = { ...userRegistration, id: new Date().getTime().toString() }

        setRecords([...records, newRecord])

    }

    console.log(records)
    return (

        <>
            <form action="" className="mainform" onSubmit={handleSubmit}>
                <div className="userStyle" >
                    <div>

                        <label htmlFor="username"> username</label>
                    </div>
                    <div>

                        <input type="text" placeholder="Name" value={userRegistration.username} onChange={handleInput} name="username" id="username" />
                    </div>
                </div>

                <div className="userStyle" >
                    <div>

                        <label htmlFor="email">   Email  </label>
                    </div>

                    <div>

                        <input type="email" placeholder="Enter Email" value={userRegistration.email} onChange={handleInput} name="email" id="email" />
                    </div>

                </div>

                <div className="userStyle" >
                    <div>

                        <label htmlFor="phone"> Phone</label>
                    </div>

                    <div>

                        <input type="Number" placeholder="contact number" value={userRegistration.phone} onChange={handleInput} name="phone" id="phone" />
                    </div>

                </div>
                <div className="userStyle" >
                    <div>

                        <label htmlFor="Language"> Language</label>
                    </div>

                    <div>

                        <select name="Language" onChange={handleInput} id="Language">
                            <option value="english" selected>English</option>
                            <option value="hindi">Hindi</option>
                            <option value="bengali" >Bengali</option>

                        </select>
                    </div>

                </div>
                <button
                    onClick={() => changeState(2)}
                    disabled={userRegistration.username === "" || userRegistration.email === "" || userRegistration.phone === "" ? true : false} type="submit"
                >
                    Start Test
                </button>


            </form>
        </>
    )
}
export default RegisterForm