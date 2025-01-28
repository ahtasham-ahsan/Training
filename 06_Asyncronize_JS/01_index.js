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

