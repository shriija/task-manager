import { useRef, useEffect } from "react"

function SearchBar({onSearch}) {

  let inputRef = useRef()
  let timerRef = useRef()

  // autofocus when page loads
  useEffect(()=>{
    inputRef.current.focus()
  },[])

  const handleChange = (event)=>{

    clearTimeout(timerRef.current)

    timerRef.current = setTimeout(()=>{
      onSearch(event.target.value)
    },500)

  }

  return (

    <div>

      <input
        ref={inputRef}
        type="text"
        placeholder="Search country..."
        className="border p-2 mb-6"
        onChange={handleChange}
      />

    </div>

  )
}

export default SearchBar