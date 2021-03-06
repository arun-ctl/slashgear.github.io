import React from 'react'
import useDarkMode from 'use-dark-mode'
import useSound from 'use-sound'
import { trackCustomEvent } from 'gatsby-plugin-google-analytics'
import Toggle from './toggle'
import sun from '../assets/sun.png'
import moon from '../assets/moon.png'

export const SwitchTheme = () => {
  const darkMode = useDarkMode()

  const [lightOn] = useSound('/switch-on.mp3')
  const [lightOff] = useSound('/switch-off.mp3')

  return (
    <Toggle
      icons={{
        checked: (
          <img
            src={moon}
            width="16"
            height="16"
            role="presentation"
            style={{ pointerEvents: 'none' }}
          />
        ),
        unchecked: (
          <img
            src={sun}
            width="16"
            height="16"
            role="presentation"
            style={{ pointerEvents: 'none' }}
          />
        ),
      }}
      checked={darkMode.value}
      onChange={() => {
        if (darkMode.value) {
          lightOff()
        } else {
          lightOn()
        }

        trackCustomEvent({
          category: 'SwitchTheme',
          action: 'Click',
          label: darkMode.value ? 'light' : 'dark',
        })

        darkMode.toggle()
      }}
    />
  )
}
