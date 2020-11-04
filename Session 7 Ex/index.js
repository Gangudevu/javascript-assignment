function getAllStudents(event)
{
    const httprequest = new XMLHttpRequest();
    httprequest.open('GET','http://localhost:3000/students');
    httprequest.setRequestHeader('Content-Type','application/json');
    
    httprequest.onreadystatechange = function()
    {
        if(httprequest.readyState === XMLHttpRequest.DONE)
        {
            const StudentList = JSON.parse(httprequest.response);

            const tbody = document.getElementsByTagName('tbody')[0];
            let innerHtmlContent = '';

            StudentList.forEach(stdobj => {
                
                innerHtmlContent = innerHtmlContent + `
                    <tr>
                        <td>
                            ${stdobj.name}
                        </td>
                        <td>
                            ${stdobj.contactno}
                        </td>
                        <td>
                            ${stdobj.email}
                        </td>
                        <td>
                            <button class="btn btn-primary" onclick=updateStudent(${stdobj.id})>Update</button>
                        </td>
                        <td>
                            <button class="btn btn-primary" onclick=removeStudent(${stdobj.id})>Delete</button>
                        </td>
                    </tr>
                `;
                tbody.innerHTML = innerHtmlContent;
            });
        }
    }
    httprequest.send();
}


function addStudentToJSON(event)
{
    event.preventDefault();

    const name = document.getElementById('name').value;
    const contactno = document.getElementById('contactno').value;
    const email = document.getElementById('email').value;

    const stdobj =
    {
        "name":name,
        "contactno":contactno,
        "email":email
    }
    console.log(stdobj);

    const httprequest = new XMLHttpRequest();
    httprequest.open('POST','http://localhost:3000/students');
    httprequest.setRequestHeader('Content-Type','application/json');
    httprequest.send(JSON.stringify(stdobj));

    httprequest.onreadystatechange = function()
    {
        if(httprequest.readyState === XMLHttpRequest.DONE)
        {
            getAllStudents();
        }
    }
}


function removeStudent(id)
{
    const httprequest = new XMLHttpRequest();
    httprequest.open('DELETE',`http://localhost:3000/students/${id}`);
    httprequest.setRequestHeader('Content-Type','application/json');
    httprequest.send();

    httprequest.onreadystatechange = function()
    {
        if(httprequest.readyState === XMLHttpRequest.DONE)
        {
            getAllStudents();
        }
    }
}

function updateStudent(id)
{
    const stdobj =
    {
        "name":"nameUpdated",
        "contactno":"contactupdated",
        "email":"emailupdated"
    }

    const httprequest = new XMLHttpRequest();
    httprequest.open('PUT',`http://localhost:3000/students/${id}`);
    httprequest.setRequestHeader('Content-Type','application/json');
    httprequest.send(JSON.stringify(stdobj));

    httprequest.onreadystatechange = function()
    {
        if(httprequest.readyState === XMLHttpRequest.DONE)
        {
            getAllStudents();
        }
    }
}


// Various Methods Supported from Rest API 
// GET (Fetching the data)
// POST (Adding new Data)
// PUT (Updating the data)
// DELETE (Deleting the Data)