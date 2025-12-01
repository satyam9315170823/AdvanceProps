import './App.css'
import BasicProps from "./components/BasicProps"
import Childrenprops from "./components/ChildrenProps"
import ComplexProps from './components/ComplexProps'
import ThemeToggler,{ThemeProvider} from './components/ThemeToggler'
import RefProps from "./components/RefProps"

function Navigation(){
  // const isDark = true
  const sections = [
    {id:'basic', label:'basic props', icon:'🩼'},
    {id:'ref', label:'ref props', icon:'💊'},
    {id:'children', label:'children props', icon:'🔬'},
    {id:'complex', label:'complex props', icon:'💉'},
    {id:'theme', label:'theme props', icon:'😶‍🌫️'},
  ]

  return (
    <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md shadow-lg border-b border-white/10">
      <div className="max-w-5xl mx-auto px-4 py-3 flex gap-4 flex-wrap justify-center">
        {sections.map((section) => (
          <button
            key={section.id}
            className="flex items-center gap-2 px-4 py-2 rounded-xl border-amber-100 border
            hover:border-amber-300 
            bg-white/10 hover:bg-white/20
                       transition-all text-white font-medium shadow-md"
          >
            <span className="text-xl">{section.icon}</span>
            {section.label}
          </button>
        ))}
      </div>
    </nav>
  )
}

function AppContent() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      <div className="container mx-auto px-4 py-12">
        <header className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-linear-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent drop-shadow-md">
            React Props Explained
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            A comprehensive guide to understanding props in React
          </p>

          <div className="w-28 h-1 bg-linear-to-r from-purple-400 to-pink-400 mx-auto rounded-full animate-pulse"></div>
        </header>

        {/* Content Sections */}
        <div className="space-y-16">
          {/* Basic Props Section */}
          <section
            id="basic"
            className="scroll-mt-28 rounded-2xl p-6 bg-white/5 border border-white/10 shadow-xl backdrop-blur-xl hover:bg-white/10 transition-all"
          >
            <h2 className="text-2xl font-bold mb-4 text-purple-300">
              Basic Props
            </h2>
            <BasicProps />
          </section>
          <section
            id="basic"
            className="scroll-mt-28 rounded-2xl p-6 bg-white/5 border border-white/10 shadow-xl backdrop-blur-xl hover:bg-white/10 transition-all"
          >
            <h2 className="text-2xl font-bold mb-4 text-purple-300">
              Children Props
            </h2>
            <Childrenprops />
          </section>
          <section
            id="basic"
            className="scroll-mt-28 rounded-2xl p-6 bg-white/5 border border-white/10 shadow-xl backdrop-blur-xl hover:bg-white/10 transition-all"
          >
            <h2 className="text-2xl font-bold mb-4 text-purple-300">
              Ref Props
            </h2>
            <RefProps />
          </section>
          <section
            id="basic"
            className="scroll-mt-28 rounded-2xl p-6 bg-white/5 border border-white/10 shadow-xl backdrop-blur-xl hover:bg-white/10 transition-all"
          >
            <h2 className="text-2xl font-bold mb-4 text-purple-300">
              Complex Props
            </h2>
            <ComplexProps />
          </section>
          <section
            id="basic"
            className="scroll-mt-28 rounded-2xl p-6 bg-white/5 border border-white/10 shadow-xl backdrop-blur-xl hover:bg-white/10 transition-all"
          >
            <h2 className="text-2xl font-bold mb-4 text-purple-300">
             Theme props
            </h2>
            <ThemeToggler />
          </section>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <>
    <ThemeProvider><AppContent/></ThemeProvider>
      
    </>
  )
}

export default App
