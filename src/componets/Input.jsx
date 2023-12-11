import React, {useId} from 'react'

const Input =React.forwardRef(({
    label,
    type="text",
    className="",
    ...props
},ref)=>{
    const Id = useId()
    return (
        <div className=''>
            {
                label && <label
                className='px-1 py-1 inline-block'
                    htmlFor={Id}
                >{label}</label>
            }
            <input type={type} className={`px-2 py-2  ${className}` }{...props} ref={ref} id={Id}></input>
        </div>
    )
})
export default Input