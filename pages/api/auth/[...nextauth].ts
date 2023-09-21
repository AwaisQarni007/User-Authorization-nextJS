
import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

export default NextAuth({
  providers: [
    Credentials({
      credentials: {
        username: { label: "Username", type: "text" },
        password: {  label: "Password",  type: "password" },
      },
      authorize: async (credentials) => {
        // Add your authentication logic here (e.g., check credentials against a database).
        if (credentials.username === 'Awais' && credentials.password === 'Awais@123') {
          return Promise.resolve({ id: 1, name: 'Awais', email: 'Awais@gmail.com' })
        } else {
          return Promise.resolve(null)
        }
      },
    }),
  ],
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout',
    error: '/auth/error',
  },
  session: {
    jwt: true,
  },
})
