const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;


app.use(cors())
app.use(express.json())


app.get('/', (req, res) => {
    res.send('Look mama I can do  smart node server')
});


const users = [
    { id: 1, name: 'Sabana', email: 'sabana@gmail.com', phone: '0178888888' },
    { id: 2, name: 'sabnur', email: 'sabnur@gmail.com', phone: '0178888888' },
    { id: 3, name: 'katrina', email: 'katrina@gmail.com', phone: '0178888888' },
    { id: 4, name: 'nurafethi', email: 'nurafethi@gmail.com', phone: '0178888888' },
    { id: 5, name: 'denideals', email: 'denideals@gmail.com', phone: '0178888888' },
    { id: 6, name: 'porimoni', email: 'porimoni@gmail.com', phone: '0178888888' },
    { id: 7, name: 'kajol', email: 'kajol@gmail.com', phone: '0178888888' },
]

app.get('/users', (req, res) => {
    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(matched)
    } else {
        res.send(users) 
    }

});



app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user)
});

app.post('/user', (req, res) => {
    console.log(req.body)
    const user = req.body;
    user.id = users.length + 1;
    users.push(user)
    res.send(user)
})

app.listen(port, () => {
    console.log('listening fot this port', port)
})