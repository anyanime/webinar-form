exports.handler = async function (event, context) {
    //hello endpoint
    return {
        statusCode: 200,
        body: JSON.stringify({message: "Your registration was successful"})
    }
}