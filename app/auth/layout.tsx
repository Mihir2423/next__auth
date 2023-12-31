import React from 'react'

type Props = {
    children: React.ReactNode
}

const AuthLayout = ({ children }: Props) => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-500 to-zinc-900'>{children}</div>
  )
}

export default AuthLayout