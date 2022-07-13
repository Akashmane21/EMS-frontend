import React from 'react'

export default function BredNav({name}) {
  return (
    <div>
        <ul>
            <li>
              <a href="/Admin_Dashboard">
                Admin Dashboard >
              </a>
            </li>
            <li style={{ paddingLeft:6 }}>
                {name}
            </li>
        </ul>
        
    </div>
  )
}
