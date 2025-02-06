const express = require("express");
const router = express.Router();
const Patient = require("../models/addPatient");
router.use(express.json());

router.get("/", (req, res) => {
  res.send("Hospital Routes");
});

router.post("/addPatient", async (req, res) => {
  try {
    const { petName, petType, ownerName, ownerAddress, ownerPhone } = req.body;
    if (!petName || !petType || !ownerName || !ownerAddress || !ownerPhone) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const newPatient = new Patient({
      petName,
      petType,
      ownerName,
      ownerAddress,
      ownerPhone,
    });
    await newPatient.save();

    res
      .status(201)
      .json({ message: "Patient added successfully!", patient: newPatient });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

router.get("/getPatients", async (req, res) => {
  try {
    const patients = await Patient.find();
    res.status(200).json({ message: "Patients found", patients: patients });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.put("/updatePatient/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const updatedPatient = await Patient.findByIdAndUpdate(id, updates, {
      new: true,
    });

    if (!updatedPatient) {
      return res.status(404).json({ message: "Patient not found" });
    }

    res.status(200).json({
      message: "Patient updated successfully",
      patient: updatedPatient,
    });
  } catch (err) {
    console.error("Error updating patient:", err.message);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

router.delete("/deletePatient/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deletedPatient = await Patient.findByIdAndDelete(id);

    if (!deletedPatient) {
      return res.status(404).json({ message: "Patient not found" });
    }

    res.status(200).json({
      message: "Patient deleted successfully",
      patient: deletedPatient,
    });
  } catch (err) {
    console.error("Error deleting patient:", err.message);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

router.post("/addAppointment/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { startTime, endTime, description, feePaid, amount } = req.body;

    if (
      !startTime ||
      !endTime ||
      !description ||
      !feePaid ||
      (feePaid !== "Unpaid" && !amount)
    ) {
      return res.status(400).json({
        message:
          "All fields are required, and amount is needed if fee is not unpaid",
      });
    }

    const patient = await Patient.findById(id);
    if (!patient) {
      return res.status(404).json({ message: "Patient not found" });
    }

    patient.appointments.push({
      startTime,
      endTime,
      description,
      feePaid,
      amount: feePaid === "Unpaid" ? 0 : amount,
    });

    await patient.save();

    res
      .status(201)
      .json({ message: "Appointment added successfully!", patient });
  } catch (err) {
    console.error("Error adding appointment:", err.message);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

router.get("/getAppointments/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const patient = await Patient.findById(id);

    if (!patient) {
      return res.status(404).json({ message: "Patient not found" });
    }

    res.status(200).json({
      message: "Appointments retrieved successfully",
      appointments: patient.appointments,
    });
  } catch (err) {
    console.error("Error retrieving appointments:", err.message);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

router.put("/updateAppointment/:patientId/:appointmentId", async (req, res) => {
  try {
    const { patientId, appointmentId } = req.params;
    const updates = req.body;

    const patient = await Patient.findById(patientId);
    if (!patient) {
      return res.status(404).json({ message: "Patient not found" });
    }

    const appointment = patient.appointments.id(appointmentId);
    if (!appointment) {
      return res.status(404).json({ message: "Appointment not found" });
    }

    Object.assign(appointment, updates);

    await patient.save();

    res
      .status(200)
      .json({ message: "Appointment updated successfully", appointment });
  } catch (err) {
    console.error("Error updating appointment:", err.message);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

router.delete(
  "/deleteAppointment/:patientId/:appointmentId",
  async (req, res) => {
    try {
      const { patientId, appointmentId } = req.params;

      const patient = await Patient.findById(patientId);
      if (!patient) {
        return res.status(404).json({ message: "Patient not found" });
      }

      const appointmentIndex = patient.appointments.findIndex(
        (app) => app._id.toString() === appointmentId
      );
      if (appointmentIndex === -1) {
        return res.status(404).json({ message: "Appointment not found" });
      }

      patient.appointments.splice(appointmentIndex, 1); 
      await patient.save(); 

      res.status(200).json({ message: "Appointment deleted successfully" });
    } catch (err) {
      console.error("Error deleting appointment:", err.message);
      res.status(500).json({ message: "Server error", error: err.message });
    }
  }
);

router.get("/getUnpaidAppointments", async (req, res) => {
  try {
    const patients = await Patient.find({ "appointments.feePaid": "Unpaid" });

    let unpaidAppointments = [];
    patients.forEach((patient) => {
      const filteredAppointments = patient.appointments.filter(
        (app) => app.feePaid === "Unpaid"
      );
      unpaidAppointments.push(...filteredAppointments);
    });

    res.status(200).json({
      message: "Unpaid appointments retrieved successfully",
      unpaidAppointments,
    });
  } catch (err) {
    console.error("Error retrieving unpaid appointments:", err.message);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

router.get("/getRemainingBill/:patientId", async (req, res) => {
  try {
    const { patientId } = req.params;

    const patient = await Patient.findById(patientId);
    if (!patient) {
      return res.status(404).json({ message: "Patient not found" });
    }

    const remainingBill = patient.appointments
      .filter((app) => app.feePaid === "Unpaid")
      .reduce((total, app) => total + app.amount, 0);

    res.status(200).json({
      message: "Remaining bill retrieved successfully",
      patientId: patient._id,
      patientName: patient.ownerName,
      remainingBill,
    });
  } catch (err) {
    console.error("Error retrieving remaining bill:", err.message);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

router.get("/getPetStatistics", async (req, res) => {
  try {
    const patients = await Patient.find({});

    let petCount = {}; 
    let petEarnings = {}; 

    patients.forEach((patient) => {
      const petType = patient.petType;
      petCount[petType] = (petCount[petType] || 0) + 1;

      patient.appointments.forEach((appointment) => {
        if (appointment.feePaid !== "Unpaid") {
          petEarnings[petType] =
            (petEarnings[petType] || 0) + appointment.amount;
        }
      });
    });

    const mostPopularPet = Object.keys(petCount).reduce(
      (a, b) => (petCount[a] > petCount[b] ? a : b),
      ""
    );

    res.status(200).json({
      message: "Pet statistics retrieved successfully",
      mostPopularPet,
      petEarnings,
    });
  } catch (err) {
    console.error("Error retrieving pet statistics:", err.message);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

module.exports = router;
