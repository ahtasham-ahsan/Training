const mongoose = require("mongoose");

const uri = "mongodb+srv://muhammadahtasham:ThtYfE25MVtmmIvw@cluster0.vv2zn.mongodb.net/playground?retryWrites=true&w=majority&appName=Cluster0";

// Define a simple schema
const playgroundSchema = new mongoose.Schema({
  name: String,
  createdAt: { type: Date, default: Date.now },
});

// Create a model (this creates the "playground" collection)
const Playground = mongoose.model("Playground", playgroundSchema);

async function connectDB() {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB (playground) successfully!");

    // // Insert a test document (MongoDB auto-creates the collection)
    // const doc = new Playground({ name: "Test Entry" });
    // await doc.save();
    console.log("Document inserted into 'playground' collection:");
  } catch (err) {
    console.error("Could not connect to MongoDB:", err);
  } finally {
    // Close the connection (optional)
    await mongoose.disconnect();
    console.log("MongoDB connection closed.");
  }
}

// Run the function
connectDB().catch(console.error);
