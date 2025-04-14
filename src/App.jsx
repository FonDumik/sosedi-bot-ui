import { useEffect } from "react";
import WebApp from "@twa-dev/sdk";

function App() {
    useEffect(() => {
        WebApp.ready();
    }, []);

    const user = WebApp.initDataUnsafe?.user;

    return (
        <div style={{ padding: 20 }}>
            <h1>Привет, {user?.first_name || "гость"} 👋</h1>
            <p>Добро пожаловать в сервис "Соседи"!</p>
        </div>
    );
}

export default App;
