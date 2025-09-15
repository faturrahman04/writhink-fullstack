import { Link } from "react-router"
import LandingNavbar from "./components/LandingNavbar"

const App = () => {
  return (
    <>
      <LandingNavbar />
      <div className="px-6 sm:px-10 md:px-14 lg:px-24 h-20 2xl:px-30">
        <section id="home" className="flex flex-col items-center font-ptSans pb-40">
          <h1 className="text-4xl md:text-[2.5rem] lg:text-5xl xl:text-6xl 2xl:text-7xl text-center font-semibold w-full sm:w-[90%] lg:w-[75%] xl:w-[65%] mt-36 2xl:mt-48">Write Your Think and Make Become an Action With <span className="text-blue-500">Writhink</span></h1>
          <p className="text-center mt-1 text-black/80 sm:w-[70%] lg:w-[50%] lg:text-lg xl:text-xl 2xl:text-2xl">A Simple TodoList Web App, pour out your thoughts and make your thoughts become an action and more productive</p>
          <Link className="mt-4 bg-slate-900 text-white px-8 py-2 rounded-sm font-medium font-ptSans tracking-wider xl:px-10 xl:py-3 xl:text-lg" to="/dashboard">
            Try Writhink!
          </Link>
        </section>

        <section id="about" className="flex gap-8 py-8">
          <div className="w-[50rem] hidden sm:block">
            <img className="rounded-md" src="./img/about-1.jpg" alt="" />
          </div>

          <div className="w-[50rem]">
            <h2 className="text-4xl font-medium tracking-wide font-ptSans">Thoughts become an action</h2>
            <p className="font-ptSans text-lg text-black/80 mt-4">"Thoughts become words, words become action, action become habits, habits become character, character becomes destiny". Your thoughts will influence your words, which determine your actions. Your action will define your habits which make up your character. Your caracter will determine your destiny. Learn to master your thoughts. The actions you take will, over time become habits.  Habits are things you do repeatedly and as we have talked about in previous episodes, your habits are influenced by your actions.</p>
          </div>
        </section>

        <footer>
          <p className="font-ptSans font-bold text-xl py-8 text-center text-black/50 tracking-widest">Faturrahman Al Farisi - 2025</p>
        </footer>
      </div>
    </>
  )
}

export default App