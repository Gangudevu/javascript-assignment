function getAllStudents(event)
{
    fetch('http://localhost:3000/students')
    .then((response)=>{
        if(response.status == 200)
        {
            return Promise.resolve(response.json());
        }
        else
        {
            return Promise.reject(new Error('Unable to fetch the data'));
        }
    }).then((StudentList)=>{

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
    }).catch((err)=>{
        console.log(err);
    })
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

    fetch('http://localhost:3000/students',{
        method:'POST',
        body:JSON.stringify(stdobj),
        headers:{
            'Content-Type':'application/json'
        }
    }).then((response)=>{

        alert("Records Added !!!!");

    }).catch((err)=>{
        console.log(err);
    })
    getAllStudents();
}


function removeStudent(id)
{
    const name = document.getElementById('name').value;
    const contactno = document.getElementById('contactno').value;
    const email = document.getElementById('email').value;

    obj.id = obj.id.toString();
    const stdobj =
    {
        "id":id,
        "name":name,
        "contactno":contactno,
        "email":email
    }
    
    fetch('http://localhost:3000/students/${id}',{
        method:'DELETE',
        body:JSON.stringify(obj),
        headers:{
            'Content-Type':'application/json'
        }
    }).then((response)=>{

        alert("Record Deleted !!!!");

    }).catch((err)=>{
        console.log(err);
    })
    getAllStudents();
}  




    

  


function updateStudent(id)
{
    const stdobj =
    {
        "name":"nameUpdated",
        "contactno":"contactupdated",
        "email":"emailupdated"
    }
}


// Various Methods Supported from Rest API 
// GET (Fetching the data)
// POST (Adding new Data)
// PUT (Updating the data)
// DELETE (Deleting the Data)