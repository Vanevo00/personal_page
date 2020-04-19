const saveTomorrowToLocalStorage = () => {
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  localStorage.setItem('repeatMainPageAnimation', tomorrow.getTime().toString())
}

export default saveTomorrowToLocalStorage
