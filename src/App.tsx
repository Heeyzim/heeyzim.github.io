
import { ThemeProvider } from './components/theme-provider'
import { Button } from './components/ui/button'

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className='h-screen w-full flex flex-col gap-4 items-center justify-center'>
        <h1>Luigi Zampieri =)</h1>
        
        <Button asChild>
          <a href="https://github.com/heeyzim" target='_blank'>GitHub</a>
        </Button>
        </div>
    </ThemeProvider>
  )
}

export default App
