import Elm from '../CountdownTimer'

document.addEventListener('DOMContentLoaded', () => {
  const target = document.getElementById('countdown-timer')

  Elm.CountdownTimer.embed(target, {
    deadline: "May 30 2021 14:05:00"
  })
})
