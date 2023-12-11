import React from 'react'

const Buttion = ({
    children,
    type="button",
    bg="bg-blue-600",
    classname="",
    px="px-3",
    py="py-2",
    text="text-white",
    ...props
}) => {
  return (
    <button className={`${bg} ${classname} ${px} ${py} ${text} rounded-full shadow`} type={type} {...props}>{children} </button>
  )
}

export default Buttion