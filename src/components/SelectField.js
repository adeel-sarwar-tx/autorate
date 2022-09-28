
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectField({ options = [], option, setOption, label }) {


    return (
        <div className="select-field-container">
            <div className="form-section">
                <div className="select-field-label">
                    {label}
                </div>
                <FormControl fullWidth sx={{ margin: 0, height: "42px", }} >
                    <Select
                        className="select-field"
                        sx={{ margin: 0, height: "42px", }}
                        value={option}
                        onChange={(e) => { setOption(e.target.value) }}
                        displayEmpty
                    >
                        {options.map((op) => { return (<MenuItem key={op.value} value={op.value}>{op.text}</MenuItem>) })}
                    </Select>
                </FormControl>
            </div>
        </div>
    )
}
