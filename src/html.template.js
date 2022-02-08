function managerHtml(manager) {
    return `
        ${manager.map(data => {
            return `<div class="col-8 col-lg-4 col-xl-3 mt-3">
            <div class="card border border-dark text-center">
                <div class="card-header bg-primary">
                    <h3 class="card-title fs-1">${data.getName()}</h3>
                    <h5 class="card-subtitle fs-3">${data.getRole()}</h5>
                </div>
                <div class="card-body">
                    <div class="card-body border border-secondary m-2">
                        <h5>ID: ${data.getId()}</h5>
                    </div>
                    <div class="card-body border border-secondary m-2">
                        <h5>Email: <a class="card-link" href="mailto:${data.getEmail()}">${data.getEmail()}</a></h5>
                    </div>
                        <div class="card-body border border-secondary m-2">
                        <h5>Number:  ${data.getOfficeNumber()}</h5>
                    </div>
                </div>
            </div>
        </div>`
        }).join('')}`
}

function engineerHTML(engineer) {
    return `
    ${engineer.map(data => {
        return`
        <div class="col-8 col-lg-4 col-xl-3 mt-3">
                    <div class="card border border-dark text-center">
                        <div class="card-header bg-primary">
                            <h3 class="card-title fs-1">${data.getName()}</h3>
                            <h5 class="card-subtitle fs-3">${data.getRole()}</h5>
                        </div>
                        <div class="card-body">
                            <div class="card-body border border-secondary m-2">
                                <h5>ID: ${data.getId()}</h5>
                            </div>
                            <div class="card-body border border-secondary m-2">
                                <h5>Email: <a class="card-link" href="mailto:${data.getEmail()}">${data.getEmail()}</a></h5>
                            </div>
                                <div class="card-body border border-secondary m-2">
                                <h5>Github: <a class="card-link" href="https://www.github.com/${data.getGitHub()}" target="_blank">${data.getGitHub()}"</a></h5>
                            </div>
                        </div>
                    </div>
                </div>`
    }).join('')}
    `
}

function internHTML(intern) {
    return `
    ${intern.map(data => {
        return`
        <div class="col-8 col-lg-4 col-xl-3 mt-3">
                    <div class="card border border-dark text-center">
                        <div class="card-header bg-primary">
                            <h3 class="card-title fs-1">${data.getName()}</h3>
                            <h5 class="card-subtitle fs-3">${data.getRole()}</h5>
                        </div>
                        <div class="card-body">
                            <div class="card-body border border-secondary m-2">
                                <h5>ID: ${data.getId()}</h5>
                            </div>
                            <div class="card-body border border-secondary m-2">
                                <h5>Email: <a class="card-link" href="mailto:${data.getEmail()}">${data.getEmail()}</a></h5>
                            </div>
                                <div class="card-body border border-secondary m-2">
                                <h5>School: ${data.getSchool()} </h5>
                            </div>
                        </div>
                    </div>
                </div>`
    }).join('')} 
    `
}



module.exports = teamData => {
    
    let manager = teamData.filter(manager => manager.getRole() === "Manager");
    let intern = teamData.filter(intern => intern.getRole() === "Intern");
    let engineer = teamData.filter(engineer => engineer.getRole() === "Engineer");
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" />
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <header class="container-fluid">
            <h1 class="p-3 fs-1 text-center">My Team</h1>
        </header>
        <main class="container">
            <div class="row justify-content-center">
                ${managerHtml(manager)}
                ${engineerHTML(engineer)}
                ${internHTML(intern)}
            </div>
        </main>
    </body>
    </html>`

}