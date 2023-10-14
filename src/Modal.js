import React, { useState } from "react";

function FormComponent({ onSubmit }) {
    const [modal, setModal] = useState(true);
    const [modals, setModals] = useState();
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        instagram: "",
        youtube: "",
        phone: "",
    });
    const handleModal1 = () => {
        setModal(true);
        setModals(false)
    }
    const handleModal2 = () => {
        setModal(false);
        setModals(true)
    }
    const handleInput = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const formSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <div className="modalForm">
            <h6 className="modalHeading">Add New Profile</h6>
            <hr />
            <div className="modalFormSection">
                <nav className="navList">
                    <li className="modalNav" onClick={handleModal1}>Basic</li>
                    <li className="modalNav" onClick={handleModal2}>Social</li>
                </nav>
                <form onSubmit={formSubmit} action="../Landing/transaction.js" method="get">
                    {modal === true && <div>
                        <div className="modalformInput">
                            <label htmlFor="name">Enter  Name*</label>
                            <input type="text" id="name" placeholder="Eg. John Doe" name="username" value={formData.username} onChange={handleInput} />
                        </div>
                        <div className="modalformInput">
                            <label htmlFor="email">Enter Email*</label>
                            <input type="mail" id="email" placeholder="Eg. John@xyz.com" name="email" value={formData.email} onChange={handleInput} />
                        </div>
                        <div className="modalformInput">
                            <label htmlFor="email">Enter Phone*</label>
                            <input type="mail" id="email" placeholder="Eg.  9123456789" name="phone" value={formData.phone} onChange={handleInput} />
                        </div>
                        <div className="modalNext">
                            <button htmlType="submit" onClick={handleModal2} className="next">Next</button>
                        </div>
                    </div>}
                    {modals === true && <div>
                        <div className="modalformInput">
                            <label htmlFor="insta">Instagram Link (Optional)</label>
                            <input type="text" id="insta" placeholder="Eg. ..instagram.com/username" name="instagram" value={formData.instagram} onChange={handleInput} />
                        </div>
                        <div className="modalformInput">
                            <label htmlFor="youtube">Youtube Link (Optional)</label>
                            <input type="text" id="youtube" placeholder="Eg. ..youtube/username" name="youtube" value={formData.youtube} onChange={handleInput} />
                        </div>
                        <div className="modalNext">
                            <button className="back" onClick={handleModal1}>Back</button>
                            <button htmlType="submit" className="next">Done</button>
                        </div>
                    </div>}

                </form>

            </div>
        </div>

    );
}

export default FormComponent;