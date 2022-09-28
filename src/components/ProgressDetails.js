import React from 'react';
import Slider from '@mui/material/Slider';

export default function ProgressDetails({ percentage, cityName, savingsAmount }) {

    return (
        <div className="progress-container">
            <div className="progress-container-row1">
                Drivers In {cityName} Can Save Up To ${savingsAmount} Per Year!
            </div>
            <div className="progress-container-row2">
                <Slider aria-label="Process Completed" value={percentage} min={0} max={100} valueLabelDisplay="off" sx={{
                    color: "yellow", overflow: "hidden", borderRadius: "5px", '& .MuiSlider-thumb': { display: "none" }, '& .MuiSlider-rail': { color: "#e9e9e9;", height: "30px", opacity: 1, overflow: "hidden", borderRadius: "5px" }, '& .MuiSlider-track': { color: "#09bb8a", height: "30px", border: "none", borderRadius: "0px", borderTopLeftRadius: "5px", borderBottomLeftRadius: "5px" }
                }} />
            </div>
            <div className="progress-container-row3">
                {percentage}% Complete
            </div>

        </div>
    )
}
