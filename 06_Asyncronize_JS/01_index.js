console.log("111111");
get_User(3, function (user) {
  console.log(user);
});

console.log("First");

function get_User(id, call_Back) {
  setTimeout(() => {
    console.log("Reading from database");
    call_Back({
      id: id,
      name: "Sarah",
      gitHubRepoName: "Sarah-Repo",
    });
  }, 2000);
}

