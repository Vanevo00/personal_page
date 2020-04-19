const timeToRepeatAnimation = () => {
  const todayTimestamp = new Date().getTime()
  const repeatAnimationTimestamp = parseInt(localStorage.repeatMainPageAnimation)
  return (!localStorage.repeatMainPageAnimation || todayTimestamp > repeatAnimationTimestamp)
}

export default timeToRepeatAnimation
