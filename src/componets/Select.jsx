import React,{useId} from 'react'

const Select = ({
    options,
    label,
    classname="",
    ...props
},ref) => {
    const Id = useId()
  return (
    <div>
       {
        label && <label
            htmlFor={Id}
            className='inline-block px-1 py-1'>
            {label}
        </label> 
       }
       <select {...props} className={`${classname} px-3 py-2 text-black bg-white outline-none border  w-full duration-300 focus:border-gray-500`} id={Id} ref={ref}>
            {
                options?.map((opt)=>{
                    return(
                        <option key={opt} value={opt}>{opt}</option>
                    )
                })
            }
       </select>
    </div>
  )
}

export default React.forwardRef(Select)