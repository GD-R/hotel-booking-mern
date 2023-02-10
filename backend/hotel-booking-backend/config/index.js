import dotenv from "dotenv"
dotenv.config()

const config = {
    MONGO_URI: 'mongodb+srv://testaccount:testaccount@cluster0.1ewipgs.mongodb.net/?retryWrites=true&w=majority',
    PORT: 4000,
    v: 'v1',
    JWT_SECRET: 'asdsadasd',
    JWT_EXPIRY: 'qwerttt'
}
export default config
