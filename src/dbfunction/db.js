import {connectToDatabase} from './dbconnection';


const dbcollection = connectToDatabase.db("webinarform").collection("participants");
// const dbCollection = client.db("test").collection("agents");

// await client.connect();


// const dbName = "webinar";

// const main = async () => {m
// //     await client.connect();

// // await listDatabases(client);

// //     const db = client.db("webinar");
// //     const collection = db.collection("participants");

// //         return "Done";
// }

// main()
//     .then(res => console.log(res))
//     .catch(err => console.log(err));

const registerParticipants = async (participantDetails) => {
    const participant = await dbcollection.insertOne(participantDetails)
    return participant;
};

const listAllParticipants = async () => {
    let allParticipants = dbcollection.find({});
    allParticipants = await allParticipants.toArray();
    return allParticipants;
  };


  export  { registerParticipants, listAllParticipants};