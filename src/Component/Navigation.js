import { useNavigate } from "react-router-dom"

const Navigation = () => {
    const navigate = useNavigate();
  return (
    <div className="flex flex-row justify-center gap-5 pt-3 font-bold text-md sm:text-xl">

        <span onClick={() => navigate('/')} 
        className="cursor-pointer hover:underline hover:bg-slate-600/30 py-1 px-3"
        >
          Book Page
        </span>

        <span onClick={() => navigate('/author')} 
        className="cursor-pointer hover:underline hover:bg-slate-600/30 py-1 px-3"
        >
          Author Page
        </span>

    </div>
  )
}

export default Navigation