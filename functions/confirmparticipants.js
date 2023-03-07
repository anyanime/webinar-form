import * as db from '../src/dbfunction/db.js';

const handler = async (event, context) => {
    let participantExists = await db.confirmParticipants(
        event.queryStringParameters.email
    );
        if (participantExists) {
            return {
                statusCode: 200,
                body: JSON.stringify({message: "Participants already registered!"})
            }        
        } else {
            return {
                statusCode: 404,
                body: JSON.stringify({message: "Agent does not exits!"})
            }
        }
    };



export { handler };