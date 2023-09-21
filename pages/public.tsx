// pages/public.tsx
import { useState } from 'react'
import Image from 'next/image'
import { signIn } from 'next-auth/react'
import '../styles/globals.css'  // Import a global CSS file
import 'bootstrap/dist/css/bootstrap.min.css';
import { submitToSalesforce } from '../services/salesforce';


function PublicPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
   const [formData, setFormData] = useState({
    FirstName: '',
    LastName: '',
  });


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Sign in using NextAuth.js credentials provider
    const result = await signIn('credentials', {
      username,
      password,
      redirect: false, // Prevent automatic redirection
    })

    if (result.error) {
      // Handle authentication error
      console.error('Authentication failed:', result.error);
      alert("Wrong Username or password")
    } else {
      // Redirect to protected page on successful login
      // await submitToSalesforce(formData);
      window.location.href = '/protected'
    }
  }

  return (

    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
      <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
        Code Done By : M Awais Qarni&nbsp;
      </p>
      <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
        <a
          className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          By{' '}
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            className="dark:invert"
            width={100}
            height={24}
            priority
          />
        </a>
      </div>
    </div>

    <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
      <Image
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />
    </div>

    <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">    
    <div className="fixed left-0 top-0 w-full justify-center border-b font-mono border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
      <h1>Public Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            className="form-control"
            placeholder="Enter User Name"
            value={username}
            onChange={
              (e) =>{
                setFormData({ ...formData, FirstName: e.target.value })
                setUsername(e.target.value)
              }
              }
            />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="form-control"
            name="password"
            value={password}
            placeholder="Enter Password"
            onChange={
              (e) => {
                setFormData({ ...formData, LastName: e.target.value })
                setPassword(e.target.value)
              }
            }
            />
        </div>
        <div>
          <button type="submit"className="m-3 btn btn-primary">Login</button>
        </div>
      </form>
    </div>
    </div>

  </main>
  )
}

export default PublicPage
