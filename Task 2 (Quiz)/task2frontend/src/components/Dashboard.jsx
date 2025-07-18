import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ThemeContext } from "../context/ThemeContext";

function Dashboard() {

    const { user } = useContext(AuthContext);
    const { theme } = useContext(ThemeContext);

    const navigate = useNavigate();
    const [history, setHistory] = useState([]);

    useEffect(() => {
        const fetchHistory = async () => {
            try {
                const response = await axios.get("http://localhost:3000/users/user/quiz-history", {
                    headers: {
                        Authorization: "Player " + localStorage.getItem("token")
                    }
                });
                setHistory(response.data);
            } catch (err) {
                console.error("There was an error fetching the history: ", err);
            }
        }

        fetchHistory();
    }, [])

    return (
        <div className={`font-mono mt-[10vh] min-h-[90vh] transition-all ${theme === "light" ? "bg-white text-black" : "bg-gray-700 text-white"}`}>
            <div className="flex flex-col items-center mb-5">
                <div className={`w-[100px] h-[100px] ${theme === "light" ? "bg-gray-700 text-white" : "bg-gray-300 text-gray-900"}  flex items-center justify-center font-extrabold text-5xl rounded-full my-5`}>
                    {user?.username[0].toUpperCase()}
                </div>
                <h1 className="text-center text-2xl font-extrabold">{user?.username}</h1>
                <h1>Total quizes attempted: {history?.length}</h1>
            </div>
            <hr className="w-[90%] m-auto" />
            <div className="text-center max-w-[90vw] m-auto mt-5">
                <h1 className="font-bold text-2xl">Quiz History</h1>
                <div className="grid grid-cols-3 gap-5 my-5">
                    {
                        history ? (
                            history.map((q, index) => (
                                <div key={index} className="border-2 rounded-md p-5 bg-gray-200 text-black">
                                    <h1 className="text-xl font-bold mb-2">{q.category} Quiz - {q.difficulty}</h1>
                                    <p>Score Obtained: {q.score} out of 10</p>
                                    <p>Questions attempted: {q.questionsAttempted}</p>
                                    <p>Incorrect questions: {q.questionsAttempted - q.score}</p>
                                </div>
                            ))
                        ) : (<p>You have not taken any quiz.</p>)
                    }
                </div>
            </div>
            <div>
                <button className="bg-white text-xl text-blue-500 rounded px-3 py-1 border-2 mt-5 border-blue-500 hover:shadow-2xl hover:bg-blue-500 hover:text-white transition-all absolute bottom-5 right-15" onClick={() => navigate('/home')}>Take a Quiz</button>
            </div>
        </div>
    );
}

export default Dashboard;