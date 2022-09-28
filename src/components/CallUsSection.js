import React from 'react';
import PhoneIcon from '@mui/icons-material/Phone';

export default function CallUsSection({ contactUsNumber }) {
    return (
        <div className="call-us-section">
            <div className="call-us-section-container">
                <div className="call-us-section-row1">
                    Or Click to Call For Immediate Assistance:
                </div>
                <div className="call-us-section-row2">
                    <a rel="" href={"tel:" + contactUsNumber}> <PhoneIcon className="phone-icon1" />&nbsp; Call Us Today and Save Money!</a>
                </div>
            </div>
        </div>
    )
}
