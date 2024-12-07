// Create web server
// Create a web server that listens on port 3000 and when it receives a request to the path /comments, it responds with the following JSON object.

// {
//     "comments": [
//         {
//             "username": "Todd",
//             "comment": "lol that is so true!"
//         },
//         {
//             "username": "Skyler",
//             "comment": "I like turtles"
//         },
//         {
//             "username": "Sk8erBoi",
//             "comment": "Plz delete this post."
//         },
//         {
//             "username": "DonaldDrumpf",
//             "comment": "fake news"
//         }
//     ]
// }
// Use the express module. The JSON object should be assigned to the key comments.

const express = require('express');
const app = express();

app.get('/comments', (req, res) => {
    res.json({
        "comments": [
            {
                "username": "Todd",
                "comment": "lol that is so true!"
            },
            {
                "username": "Skyler",
                "comment": "I like turtles"
            },
            {
                "username": "Sk8erBoi",
                "comment": "Plz delete this post."
            },
            {
                "username": "DonaldDrumpf",
                "comment": "fake news"
            }
        ]
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});