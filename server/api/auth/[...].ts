// import CredentialsProvider from 'next-auth/providers/credentials'
// import { NuxtAuthHandler } from '#auth'

// export default NuxtAuthHandler({
//   // A secret string you define, to ensure correct encryption
//   secret: 'your-secret-here',
//   providers: [
//     // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
//     CredentialsProvider.default({
//       credentials: {
//         username: { label: 'Username', type: 'text', placeholder: '(hint: jsmith)' },
//         password: { label: 'Password', type: 'password', placeholder: '(hint: hunter2)' },
//       },
//       authorize(credentials: any) {
//         const user = { id: '1', name: 'J Smith', username: 'jsmith', password: 'hunter2' }

//         if (credentials?.username === user.username && credentials?.password === user.password) {
//           // Any object returned will be saved in `user` property of the JWT
//           return user
//         }
//         else {
//           console.error('Warning: Malicious login attempt registered, bad credentials provided')

//           return null
//         }
//       },
//     }),
//   ],
// })
