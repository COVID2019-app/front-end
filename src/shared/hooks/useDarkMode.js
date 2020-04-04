import {useLocalStorage} from './useLocalStorage'
import {useEffect} from 'react'
 const useDarkMode = () => {
  
    const [darkMode, setDarkMode] = useLocalStorage("isDark")
  
    useEffect(()=>{

        if(darkMode === true) return  document.querySelector('body').classList.add('dark-mode')

    else return document.querySelector('body').classList.remove('dark-mode')

    },[darkMode])

    return [darkMode,setDarkMode]

}
export default useDarkMode