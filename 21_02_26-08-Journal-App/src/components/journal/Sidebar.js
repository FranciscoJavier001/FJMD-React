import React from 'react'

export const Sidebar = () => {
    return (
        <aside className="journal__sidebar"> {/* El aside indica que esto esta en un costado y le asignamos una clase para ponerla con scss */}
            
            <div className="journal__sidebar-navbar">
                <h3>
                    <span>Francisco</span>
                </h3>
            </div>
        </aside>
    )
}
