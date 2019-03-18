(
    () => {

        const getUser = e => {
            let spinner = document.getElementById('spinner')
            spinner.classList.remove("hide");
            let detail = document.getElementById('detail')
            detail.innerHTML=""
            axios.get('https://jsonplaceholder.typicode.com/todos/'+e.currentTarget.id)
            .then(response=>{
                let data = response.data
                const div = document.createElement('div')
                Object.keys(data).forEach(key => {
                    let value = data[key];
                    let p = document.createElement('p')
                    p.innerText= key+':'+value
                    div.appendChild(p)
                });
                detail.appendChild(div)
                spinner.classList.add("hide");
            })
            .catch(error=>{
                console.log('error: '+error)
                spinner.classList.add("hide");
            })
        }
        
        const addOnClickEvent = ()=>{
            let liNodes = document.querySelectorAll('li')
            
            liNodes.forEach((node)=>{
                node.addEventListener('click', getUser)
            })
        }


        document.addEventListener('DOMContentLoaded',()=>{
            console.log("ya cargamos")

            axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(response => {
                response.data.map(data =>{
                    const li = document.createElement('li')
                    li.id=data['id']
                    Object.keys(data).forEach(key => {
                        let value = data[key];
                        let p = document.createElement('p')
                        p.innerText= key+':'+value
                        li.appendChild(p)
                    });
                    document.getElementById('todos').appendChild(li)
                })
            })
            .then(()=>{
                addOnClickEvent()
            })
            .catch(error=>{
                console.log('error: '+error)
            })
        })
    }
)()
