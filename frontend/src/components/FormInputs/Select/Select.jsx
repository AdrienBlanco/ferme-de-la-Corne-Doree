import React, { useEffect, useRef } from 'react'

export default function Select({ label, name, value, handleChange, placeholder, required, options }) {
    const selectRef = useRef();

    useEffect(() => {
        const handleFocus = () => {
            selectRef.current.parentElement.classList.add('open');
            selectRef.current.parentElement.classList.remove('close');
        }
        const handleBlur = () => {
            selectRef.current.parentElement.classList.remove('open');
            selectRef.current.parentElement.classList.add('close');
        }

        const selectElement = selectRef.current;
        selectElement.addEventListener('focus', handleFocus);
        selectElement.addEventListener('blur', handleBlur);

        return () => {
            selectElement.removeEventListener('focus', handleFocus);
            selectElement.removeEventListener('blur', handleBlur);
        }
    }, []);

    return (
    <>
        <label htmlFor={name}>{label}</label>
        <div className='select-wrapper'>        
            <select ref={selectRef} name={name} id={name} value={value} onChange={handleChange} required={required}>
                <option value=''>{placeholder}</option>
                {options.map(option => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>
        </div>
    </>
  )
}
