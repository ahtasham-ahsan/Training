// Using Noramalizaiton (using references) -> Consistency

let aurthors = {
  name: "Mosh",
};

let courses = {
  author: "id",
  course: "course",
};

// Using Embedded Documents (Denormalization) -> Performance

let courses_Embedded = {
  author: {
    name: "Mosh",
  },
};

// Hybrid
let author_Hybrid = {
    name: "Mosh",
    // 50 other properties
    };
    
    let courses_Hybrid = {
        author_Hybrid: {
            id: "ref",
            name: "Mosh",
        },
    };