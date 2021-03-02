const getExpiryTime = () => {
    return Date.now() + 3600000
}

const getGender = () => {
    return ["male", "female", "other"]
}
export { getExpiryTime, getGender }
