import * as db from '../src/dbfunction/db.js';

const handler = async (event, context) => {
    

    if (event.httpMethod === "POST") {
        const body = JSON.parse(event.body);
        console.log(body)

    const newBody = {
        fname: body.fname,
        lname: body.lname,
        email: body.email
    };

        await db.registerParticipants(newBody)
        .then((res) => {
            console.log(res)
        } )
        .catch(error => error);
    
        return {
            statusCode: 201,
            body: JSON.stringify({message: "Participants successfully registered!"})
        }        
    } else {
        return {
            statusCode: 200,
            body: JSON.stringify({message: "This is a POST Endpoint. You shouldn't be accessing it via GET."})
        }
    }
};



export { handler };