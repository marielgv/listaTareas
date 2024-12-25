const tareas = [
    { id: 1, nombre: "Aprender JavaScript", completada: false },
    { id: 2, nombre: "Hacer desafío", completada: false }, 
    { id: 3, nombre: "Hacer despensa", completada: false }, 
    { id: 4, nombre: "Descansar", completada: false }
    ];

const input=document.querySelector("input");
const btnAgregar=document.querySelector(".btnAgregar");
const listado=document.querySelector(".listado");
const total=document.querySelector(".total");
const realizadas=document.querySelector(".realizadas");
const pendientes=document.querySelector(".pendientes");

function mostrarTareas(tareas) {
    listado.innerHTML = "";
    tareas.forEach((tarea) => { listado.innerHTML += `
    <div class="listadoTarea">
        <li>${tarea.id }-. </li> <li> ${tarea.nombre } </li> <button class="btnEliminar" onclick="borrarTarea(${tarea.id})"> Eliminar </button>
        <button class="btnCompletar" onclick="completarTarea(${tarea.id})"> ${tarea.completada ? "Realizada" : "Pendiente"} </button>
        </div>`; });
    total.innerHTML = tareas.length;
    realizadas.innerHTML = tareas.filter((tarea) => tarea.completada).length;
    pendientes.innerHTML = tareas.filter((tarea) => !tarea.completada).length;   
    
    }
    mostrarTareas(tareas);
    //Agregar nueva tarea
    btnAgregar.addEventListener("click", () => {
    const nuevaTarea = { id: tareas.length + 1, nombre: input.value, completada: false };
    tareas.push(nuevaTarea);
    mostrarTareas(tareas);
    input.value = "";
    
    });

    //Eliminar tarea
    function borrarTarea(id) {        
        const index = tareas.findIndex((tarea) => tarea.id === id);
        tareas.splice(index, 1);
        mostrarTareas(tareas);
    }         


    //Marcar tarea como completada      
    function completarTarea(id) {        
        const index = tareas.findIndex((tarea) => tarea.id === id);
        tareas[index].completada = !tareas[index].completada;
        mostrarTareas(tareas);
        }   


       


        
    
    