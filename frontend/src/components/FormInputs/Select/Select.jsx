import React from 'react'

export default function Select({label, name, value, handleChange, placeholder, required, options}) {
    return (
    <>
        <label htmlFor={name}>{label}</label>
        <select name={name} id={name} value={value} onChange={handleChange} required={required}>
            <option value=''>{placeholder}</option>
            {options.map(option => (
                <option key={option} value={option}>{option}</option>
            ))}
        </select>
    </>
  )
}
