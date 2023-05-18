export function checkEnvVariables() {
    // ensure all the required environment variables are correct
    // console.log("Will check env variables...");
    return (
        process.env.MONGODB_URI &&
        process.env.MONGODB_NAME &&
        process.env.NEXTAUTH_SECRET &&
        process.env.NEXTAUTH_URL &&
        process.env.PASSWORD_SALT_ROUNDS
    )
}