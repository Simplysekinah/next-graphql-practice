// "use client"
import React from "react";
import { ChangeEvent } from "react";

type InputProps= {
    inputname?:string;
    inputValue?:string;
    inputClass?:string;
    placeholder?:string;
    inputType:string;
    changeInput: (e:ChangeEvent<HTMLInputElement>)=>void
}

const Input = ({inputname,changeInput,inputValue,inputClass,placeholder,inputType}:InputProps) => {
    return (
        <>
            <div>
                <input
                name={inputname}
                onChange={changeInput}
                value={inputValue}
                className={inputClass}
                placeholder={placeholder}
                 type={inputType} />
            </div>
        </>
    )
}

export default Input