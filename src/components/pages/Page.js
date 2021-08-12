import React from 'react'
import { useSelector } from 'react-redux';

const Page = ({children}) => {
  const shrink = useSelector(state => state.Shrink);

  return (
    <div className={`page ${shrink ? "shrink" : ""}`}>
      {children}
    </div>
  )
}

export default Page
