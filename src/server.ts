import app from "./app";
const PORT = 5000;

async function databaseConnection() {
    try {
        console.log("database connect successfully");
        app.listen(PORT, () => {
            console.log(`Server is listening on port ${PORT} \nopen with---------------- http://localhost:${PORT}/ ----------------- or http://127.0.0.1:${PORT}/`)
        })
    } catch (error) {
        console.log("not possible to connect");
        console.error(error);
    }
}
databaseConnection();
