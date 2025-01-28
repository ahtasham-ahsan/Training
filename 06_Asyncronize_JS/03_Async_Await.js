function get_Top_Movies() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["movie1", "Movie2"]);
    }, 5000);
  });
}

function send_emails(email, movies) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        const movie = movies[0];
      resolve(movie);
    }, 4000);
  });
}
async function display() {
  const movies = await get_Top_Movies();
  console.log("Movies", movies);
  const send_email = await send_emails("email", movies)
  console.log(send_email);
  
}
display()