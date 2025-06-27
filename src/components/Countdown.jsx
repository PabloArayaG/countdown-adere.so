import { useState, useEffect } from 'react'
import './countdown.css'

const Countdown = () => {
  // Fecha objetivo: 9 de julio de 2025 a las 8:30 AM hora chilena
  const targetDate = new Date('2025-07-09T08:30:00-03:00').getTime()
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  const timeUnits = [
    { label: 'Días', value: timeLeft.days },
    { label: 'Horas', value: timeLeft.hours },
    { label: 'Minutos', value: timeLeft.minutes },
    { label: 'Segundos', value: timeLeft.seconds }
  ]

  return (
    <div className="w-full max-w-4xl mx-auto px-2">
      <div className="countdown-single-card">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
          {timeUnits.map((unit, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-thin text-white mb-1">
                {String(unit.value).padStart(2, '0')}
              </div>
              <div className="text-xs md:text-sm text-white/80 uppercase tracking-wide font-medium">
                {unit.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Countdown 