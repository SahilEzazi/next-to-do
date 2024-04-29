
console.log("working")

let container=document.querySelector(".container")
let name=document.getElementById("name")
let mobile=document.getElementById("mobile")
let email=document.getElementById("email")
let city=document.getElementById("city")
let state=document.getElementById("state")
let form=document.querySelector("form")

const taskadd=[];

function showAllTasks(){
   taskadd.forEach((value,index)=>{
           const div=document.createElement("div")
           div.setAttribute("class","taskadd")

           const table=document.createElement("table")
           div.append(table);

           const row=document.createElement("tr")
           table.append(row)

           const col=document.createElement("td")
           col.innerText=value.name
           row.append(col)

           const col1=document.createElement("td")
           col1.innerText=value.mobile
           row.append(col1)

           const col2=document.createElement("td")
           col2.innerText=value.email
           row.append(col2)

           const col3=document.createElement("td")
           col3.innerText=value.city
           row.append(col3)

           const col4=document.createElement("td")
           col4.innerText=value.state
           row.append(col4)

           const btn = document.createElement("button")
           btn.setAttribute("class","delete")
           btn.innerText="-"
           div.append(btn)

           container.append(div)

           btn.addEventListener("click",()=>{
              
               let a=confirm("Are u sure u want to delete")
               console.log(a)
               if(a==true){
                   removeTask();
               taskadd.splice(index,1);
               localStorage.setItem("taskadd",JSON.stringify(taskadd))
               showAllTasks();


               }
               
               // localStorage.setItem("taskadd",JSON.stringify(taskadd))
               // showAllTasks();
           })
           
   })
}

function removeTask(){
   taskadd.forEach(()=>{
       const div=document.querySelector(".taskadd")
       div.remove();
   })
}

form.addEventListener("submit",(e)=>{
   e.preventDefault();
   removeTask();

   taskadd.push({
       name:name.value,
       mobile:mobile.value,
       email:email.value,
       city:city.value,
       state:state.value,
   })
   localStorage.setItem("taskadd",JSON.stringify(taskadd))

   console.log(taskadd)
   showAllTasks()
})


