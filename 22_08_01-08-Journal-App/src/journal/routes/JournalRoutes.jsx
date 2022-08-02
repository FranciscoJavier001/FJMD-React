import React from 'react'

export const JournalRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={ <JournalPage />} />

        <Route path="/*" element={ <Navigate to="/" />} />
    </Routes>
  )
}
