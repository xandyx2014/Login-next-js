# ☕🚀 Auth Login and register Next Js & JWT, Hexagonal Architecture, DDD
## 🏁  Getting Started

First, run the development server:

```bash
npm i
npm run dev
# or
yarn dev
```
##  🎯 Hexagonal ARchitecturte
```scala
core
├── shared // Common infrastructure and domain shared between the different Bounded Contexts
│   └── value-object
│       ├── Bcrypt.ts
│       ├── InvalidArgumentError.ts
│       ├── InvalidEmailError.ts
│       ├── NotAuthorizedError.ts
│       ├── StringValueObject.ts
│       ├── Uuid.ts
│       └── jwt.ts
└── user // Some Module inside the context
    ├── application
    │   ├── login // Inside the application layer all is structured by actions
    │   │   ├── userLogin.ts
    │   │   └── userLoginRequest.ts
    │   └── register // Inside the application layer all is structured by actions
    │       ├── userRegister.ts
    │       └── userRegisterRequest.ts
    ├── domain
    │   ├── User.ts // Model
    │   ├── UserEmail.ts // Value Object
    │   ├── UserEmailAlreadyExists.ts
    │   ├── UserEmailIsRequired.ts
    │   ├── UserEmailNotExists.ts
    │   ├── UserId.ts
    │   ├── UserInvalidCredentials.ts
    │   ├── UserIsRequired.ts
    │   ├── UserName.ts
    │   ├── UserNameMinLeght.ts
    │   ├── UserPassword.ts
    │   ├── UserPasswordRequired.ts
    │   └── userRepository.ts
    └── infraestructure_persistence // The infrastructure of our module
        └── PostgresUserRepository.ts
```

## ☕ Models DB

| User  | 
| ----------- | 
| id      | 
| name   | 
| email   | 
| password   | 

## Api Routes

- `/api/login POST`
- `/api/register POST`
- `/api/private GET`
    - required Header `Authorization: my-token`
- `/api/public GET`


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.
[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.
The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More
To learn more about Next.js, take a look at the following resources:
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.
Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
