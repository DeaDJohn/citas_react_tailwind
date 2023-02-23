function Error({children}) {
  return (
    <div className='bg-red-500 text-white  rounded-md mb-3 text-center uppercase font-bold p-3'>
        <p>{children}</p>
    </div>
  )
}

export default Error