console.log("111111");
// get_User(3, get_repositories)
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


// function get_repositories(user){
//     get_repositories(user.gitHubRepoName, get_Commits)
// }


// function display_commits(commits){
//     console.log(commits);
// }

// function get_Commits(respos){
//     get_Commits(repo, display_commits);
// }

// Promises

const p = new Promise((resolve, reject) => {
    // Async Work
    setTimeout(() => {
        resolve(1);
        // reject(new Error('Error Bro'));
    }, 2000);

    // reject(0);
}); 
p.then(
    (res) => {
        return res+2;
    }
)
.then(res => {
    return res + 11;
})
.then(res => console.log(res))
.catch(err => console.log(err.message));