import React from 'react'

export default function BredNav({name}) {
  return (
    <div className='brednav'>
        <ul >
            <li>
              <a href="/Admin_Dashboard">
                Employee Dashboard >
              </a>
            </li>
            <li style={{ paddingLeft:20 }}>
                {name}
            </li>
        </ul>
        
    </div>
  )
}
