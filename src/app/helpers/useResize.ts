import { useState, useEffect } from 'react'

export const SCREEN_SM = 414
export const SCREEN_MD = 896
export const SCREEN_LG = 1080
export const SCREEN_XL = 1200
export const SCREEN_XXL = 1920

type WindowDimentions = number | undefined;

export const useResize = () => {
  const [width, setWidth] = useState<WindowDimentions>(undefined);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWidth(window.innerWidth)
      const handleResize = (event: any) => {
        setWidth(event.target.innerWidth)
      }
      window.addEventListener('resize', handleResize)

      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [])

  return {
    width,
    isScreenSm: width && width> SCREEN_SM,
    isScreenMd: width && width > SCREEN_MD,
    isScreenLg: width && width > SCREEN_LG,
    isScreenXl: width && width > SCREEN_XL,
    isScreenXxl: width && width > SCREEN_XXL,
  }
}