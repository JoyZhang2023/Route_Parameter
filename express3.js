import express from "express";

const app = express();
app.set('port', process.env.PORT || 3000);

app.get('/user/:username', (req, res) => {
    res.send("Hello "+req.params.username);
});

app.use((req,res) => {
    res.type('text/plain');
    res.status(404);
    res.send("404-Not Found");
});

app.listen(app.get('port'), ()=> {
    console.log("Express Server is running");
});