import React, { useState } from "react";
import FormComponent from "./Modal";
import DoughnutChart from "./DoughnutChart";
function BottomCard() {
    const [modalOpen, setModalOpen] = useState(false);
    const [formData, setFormData] = useState(null);

    const handleFormSubmit = (data) => {
        setFormData(data);
        setModalOpen(false);
    };
    return (
        <div className="bottomCard">
            <div className=" chartSection doughnutChart">
                <h3 className="chartHeading">Top products</h3>
                {/* <DoughnutChart /> */}
            </div>
            
                {formData ? (
                    <div className=" chartSection ">
                    <div className="formOutput">
                        <h2 className="username">{formData.username}</h2>
                        <div className="details">
                            <div className="contact">
                                <ul>
                                    {formData.phone &&<li><img src="Button.png"/>{formData.phone}</li>}
                                    {formData.email && <li><img src="email.png"/>{formData.email}</li>}
                                </ul>
                            </div>
                            <div className="contact">

                                <ul>
                                    {formData.instagram && <li><img src="insta.png"/>{formData.instagram}</li>}
                                    {formData.youtube &&  <li><img src="youtube.png"/>{formData.youtube}</li>}
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                    </div>
                ) : (
                    <div className=" chartSection addProfile">
                    <div className="controls">
                        <button className="modalBtn" onClick={() => setModalOpen(true)}><img src="Controls.png" /></button>
                    </div>
                    </div>
                )}
            
            {modalOpen && (
                <div className="modal" onClose={() => setModalOpen(false)}>
                    <FormComponent onSubmit={handleFormSubmit} />
                </div>
            )}
        </div>
    );
}

export default BottomCard;
