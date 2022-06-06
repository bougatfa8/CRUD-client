import React from 'react'
import classnames from 'classnames'

function InputGroup({label, type, name, onChangeHandler, errors, value}) {
  
  return (
    <div className="mb-3">
    <label for="Email" className="form-label">
      {label}
    </label>
    <input type={type} value={value} className={(classnames("form-control", {"form-control": errors}))}  name={name} onChange={onChangeHandler}/>
    {
     (<div class="invalid-feedback">
    
    </div>)
    }
  </div>
  )
}

export default InputGroup