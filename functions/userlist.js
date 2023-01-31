exports.handler = async function (event, context) {
    //hello endpoint
    return {
        statusCode: 200,
        body: JSON.stringify({message: "You just requested for the list of registered persons"})
    }
}