const express = require('express');
const debug = require('debug')('app:startup');
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT || 3000;
mongoose.connect('mongodb://localhost:27018/hospitalDB', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());

const hospital_Schema = new mongoose.Schema({
    petName: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    petType: {
        type: String,
        enum: ['dog', 'cat', 'bird']
    }, 
    ownerName: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    ownerPhone: {
        type: Number,
        required: true
    },
    ownerAddress: String
});

const hospital_Model = mongoose.model('hospital', hospital_Schema);

const appointment_Schema = new mongoose.Schema({
    patientID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'hospital_Model'
    }, 
    startTime: Date,
    endTime: Date, 
    description: String,
    fee: Number
});


const appointment_Model = mongoose.model('appointment', appointment_Schema);


app.get('/', async (req, res) => {
    const patients = await hospital_Model.find().sort('ownerName');
    res.send(patients);
});

app.post('/addPatient', async (req, res) => {
    const patient = new hospital_Model({
        petName: req.body.petName,
        petType: req.body.petType,
        ownerName: req.body.ownerName,
        ownerPhone: req.body.ownerPhone,
        ownerAddress: req.body.ownerAddress
    });
    try {
        await patient.save();
        res.send(patient);
    } catch (err) {
        res.status(400).send(err.message);
    }
});

app.put('/updatePatient/:id', async (req, res) => {
    const patient = await hospital_Model.findByIdAndUpdate(req.params.id, {
        petName: req.body.petName,
        petType: req.body.petType,
        ownerName: req.body.ownerName,
        ownerPhone: req.body.ownerPhone,
        ownerAddress: req.body.ownerAddress
    }, { new: true });
    if (!patient) return res.status(404).send('The patient with the given ID was not found');
    res.send(patient);
});


app.delete('/deletePatient/:id', async (req, res) => {
    const patient = await hospital_Model.findByIdAndRemove(req.params.id);
    if (!patient) return res.status(404).send('The patient with the given ID was not found');
    res.send(patient);
});


app.get('/appointments', async (req, res) => {
    const appointments = await appointment_Model.find().sort('startTime');
    res.send(appointments);
});

app.get('/appointments/:id', async (req, res) => {
    const appointment = await appointment_Model.findById(req.params.id);
    if (!appointment) return res.status(404).send('The appointment with the given ID was not found');
    res.send(appointment);
});

app.post('/addAppointment', async (req, res) => {
    const appointment = new appointment_Model({
        patientID: req.body.patientID,
        startTime: req.body.startTime,
        endTime: req.body.endTime,
        description: req.body.description,
        fee: req.body.fee
    });
    try {
        await appointment.save();
        res.send(appointment);
    } catch (err) {
        res.status(400).send(err.message);
    }
});

app.put('/updateAppointment/:id', async (req, res) => {
    const appointment = await appointment_Model.findByIdAndUpdate(req.params.id, {
        patientID: req.body.patientID,
        startTime: req.body.startTime,
        endTime: req.body.endTime,
        description: req.body.description,
        fee: req.body.fee
    }, { new: true });
    if (!appointment) return res.status(404).send('The appointment with the given ID was not found');
    res.send(appointment);
});

app.delete('/deleteAppointment/:id', async (req, res) => {
    const appointment = await appointment_Model.findByIdAndRemove(req.params.id);
    if (!appointment) return res.status(404).send('The appointment with the given ID was not found');
    res.send(appointment);
});

app.delete('/deleteUnpaidAppointments', async (req, res) => {
    const appointments = await appointment_Model.find({ fee: 0 });
    res.send(appointments);
});

app.get('/todayAppointments', async (req, res) => {
    const appointments = await appointment_Model.find({ startTime: { $gte: new Date() } }).sort('startTime');
    res.send(appointments);
});








app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});