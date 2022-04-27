console.log("Twitter: ");
const repo = {
    name: "launchX",
    author: "carlogilmar",
    language: "Javascript",
    numberOfCommits: 100,
    stars: 199,
    forks: 299,
    issues_open: 10,
    issues_close: 10,
    getTotalIssues: function(){
        return this.issues_open + this.issues_close
    },
    getGeneralInfo: function(){
        return `this repository ${this.name} was created by ${this.author}`
    }

}
console.log("Nombre del repo" + repo.name);
console.log("Issues totales: " + repo.getTotalIssues());
console.log(repo.getGeneralInfo());

// ISSUE
const issue = {
    title:  "Hola_mundo",
    repositoryNameAssociated : "from CristopherSandoval/otros-cambios",
    status : "ACTIVE",
    numberOfComments: 1,
    labels : 2,
    author: "Cristopher Sandoval",
    dateCreated : new Date(),
    lastUpdated : "Yesterday",
    getTitleAndAuthor: function(){
        return `The title is ${this.title} and the author is ${this.author}`
    },
    getGeneralInfo: function(){
        return `Author: ${this.author}, title: ${this.title} from ${this.repositoryNameAssociated}`
    }


}
console.log("Título de issue:" + issue.title);
console.log(issue.getTitleAndAuthor());
console.log(issue.getGeneralInfo());

// PULL REQUEST
const pullresquest = {
    url : "https://github.com/pulls",
    status: "Open",
    title: "Una",
    author: "Cristopher Sandoval",
    archived: "False",
    branch_name: "main",
    repositoryNameAssociated : "from CristopherSandoval/otros-cambios",
    getStatus: function(){
        return `Status is...${this.status}`
    },
    getTitleandAuthor: function(){
        return `the title is: ${this.title} and the author is ${this.author}`
    }

}
console.log("PULL REQUEST");
console.log(pullresquest.getStatus());
console.log(pullresquest.getTitleandAuthor());