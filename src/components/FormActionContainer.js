import React from 'react'

export default function FormActionContainer({ previousButtonVisibility, nextButtonVisibility, previousButtonOnclick, nextButtonOnclick }) {
    return (
        <div className="form-action-container">
            {previousButtonVisibility === true ? (<button className="form-action-button" onClick={previousButtonOnclick}> Previous</button>) : null}
            {nextButtonVisibility === true ? (<button className="form-action-button" onClick={nextButtonOnclick}> Next</button>) : null}
        </div>
    )
}
