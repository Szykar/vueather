const TEMP_UNIT = '°C'
const PRESSURE_UNIT = 'hPa'
const WIND_UNIT = 'kph'
const HUMIDITY_UNIT = '%'

const formatTemperature = function (value: number) {
  return `${Math.floor(value)}${TEMP_UNIT}`
}

function formatPressure(value: number) {
  return `${Math.floor(value)} ${PRESSURE_UNIT}`
}

function formatWind(value: number) {
  return `${value.toFixed(1)} ${WIND_UNIT}`
}

function formatHumidity(value: number) {
  return `${value} ${HUMIDITY_UNIT}`
}

function formatTime(time: number, timezone: number): string {
  const date = new Date(time * 1000)

  const localTime = new Date(date.getTime() + timezone * 1000)

  const hours = localTime.getUTCHours().toString().padStart(2, '0')
  const minutes = localTime.getUTCMinutes().toString().padStart(2, '0')

  return `${hours}:${minutes}`
}

export { formatTemperature, formatPressure, formatWind, formatHumidity, formatTime }
