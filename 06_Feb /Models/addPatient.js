const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    petName: String,
    petType: String,
    ownerName: String,
    ownerAddress: String,
    ownerPhone: String,
    appointments: [
        {
            startTime: {type: Date},
            endTime: Date,
            description: String,
            feePaid: { type: String, enum: ['USD', 'EUR', 'Bitcoin', 'Unpaid'], default: 'Unpaid' },
            amount: Number
        }
    ]
});

const Patient = mongoose.model('Patient', patientSchema);
module.exports = Patient;
