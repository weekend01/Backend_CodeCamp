
const asyncHandler = (requestHandler) => {
    (req, res, next) => {   /* an arrow function that acts as middleware */
        Promise.resolve(requestHandler()).catch((err) =>
            next(err))
    }
}
// If the promise resolves successfully, nothing happens. 
// If the promise is rejected (e.g., an error occurs in requestHandler), 
// the .catch() block handles it.

export { asyncHandler }







// const asyncHandler = () => {}
// const asyncHandler = (func) = () => {}
// const asyncHandler = (func) = async () => {}

// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// }