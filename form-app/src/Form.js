import React, { useState } from "react";

function Form() {
    const [phoneBook, setPhoneBook] = useState([])

    function handleSubmit(e) {
        e.preventDefault();
        let newPhoneBook = phoneBook;
        let spliceIndex = newPhoneBook.length;
        let newestEntry = {
            firstName: e.target[0].value,
            lastName: e.target[1].value,
            phoneNumber: e.target[2].value,
        }
        if (newPhoneBook.length === 0) {
            setPhoneBook([
                newestEntry
            ])
        } else {
            for (let i = newPhoneBook.length - 1; i >= 0; i--) {
                if (newPhoneBook[i].lastName.toLowerCase() >= newestEntry.lastName.toLowerCase()) {
                    spliceIndex = i
                }
            }
            newPhoneBook.splice(spliceIndex, 0, newestEntry)
            setPhoneBook([
                ...newPhoneBook
            ])
        }
    }

    return (
        <div className="col-md-6 col-md-offset-3">
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                    name="firstName"
                    placeholder="First Name"
                    ></input>
                </div>
                <div>
                    <input
                    name="lastName"
                    placeholder="Last Name"
                    ></input>
                </div>
                <div>
                    <input
                    name="phoneNumber"
                    placeholder="Phone Number"
                    ></input>
                </div>
                <div>
                    <button
                    type="submit"
                    ></button>
                </div>
            </form>
            <div>
                <table>
                    <tbody>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Phone Number</th>
                        </tr>
                        {phoneBook.map((pb, i) => (
                        <tr key={i}>
                            <td>{pb.firstName}</td>
                            <td>{pb.lastName}</td>
                            <td>{pb.phoneNumber}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Form;