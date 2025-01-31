const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost:27017/Customers', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const Customer = mongoose.model('Customer', new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    phone: {
        type: Number,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    isGold: {
        type: Boolean,
        default: false
    }
}));

app.use(express.json());
app.get('/api/customers', async (req, res) => {
    const customers = await Customer.find().sort('name');
    res.send(customers);
});

app.post('/api/customers', async (req, res) => {
    const customer = new Customer({
        name: req.body.name,
        phone: req.body.phone,
        isGold: req.body.isGold
    });
    try {
        await customer.save();
        res.send(customer);
    } catch (err) {
        res.status(400).send(err.message);
    }
});

app.put('/api/customers/:id', async (req, res) => {
    const customer = await Customer.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        phone: req.body.phone,
        isGold: req.body.isGold
    }, { new: true });
    if (!customer) return res.status(404).send('The customer with the given ID was not found');
    res.send(customer);
});

app.delete('/api/customers/:id', async (req, res) => {
    const customer = await Customer.findByIdAndRemove(req.params.id);
    if (!customer) return res.status(404).send('The customer with the given ID was not found');
    res.send(customer);
});


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});