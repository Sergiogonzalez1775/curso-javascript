const readline = require('readline');
const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
  });

//Tarea: valos booleano y descripcion

/*let tarea = {
    done: false,
    description: 'Sacar la basura'
}*/

let tasklist = [];

//añadir tarea a la lista
function addtask(tasklist, taskdescription){
    tasklist.push({done: false, description: taskdescription});
}

//imprimir en pantalla la lista de tareas
function printtasklist(tasklist){
    //[ ] Sacar la basura
    //[x] Lavar los platos

    for (let i = 0; i < tasklist.length; ++i)
        if (tasklist[i].done){
            //tarea realizada
            console.log((i+1) + '. [x] ' + tasklist[i].description);
        } else{
            //tarea no realizada
            console.log((i+1) + '. [ ] ' + tasklist[i].description);
        }
}

//Marcar la tarea como realizada
function MarktaskAsDone (tasklist, index){
    if (index >= 0 && index <= tasklist.length){
        tasklist[index].done = true;
    }else{
        console.log('Numero de tarea no valido')
    }
}

//Comprobar si todas las tareas estan realizadas
function checkAllDone(tasklist){
    for (let task of tasklist){
        if (!task.done) return false;
    }
    return true;
}

//Primer modo: insert de tareas necesarias

function asktouser(tasklist){
    rl.question('Introduce una nueva tarea [utilice X para salir]: ', function(taskdesc) {
        switch(taskdesc){
            case 'X':
                console.log('No se añadiran mas tareas')
                mode2(tasklist)
                break;
    
            case 'exit':
                rl.close();
                break;
                
            default:
                addtask(tasklist,taskdesc);
                console.log('Elemento añadido correctamente')
                asktouser(tasklist);
        }
    });
}

asktouser(tasklist);


//Segundo modo: marcar tareas realizadas
function mode2(tasklist){
    console.log('La lista de tareas es:')
    printtasklist(tasklist)
    rl.question('¿Qué tarea deseas completar? (1-N) [utilice X o exit para salir]: ', function(tasknumber){
        switch(tasknumber){
            case 'X':
            case 'exit':
                console.log('Bye Bye')
                rl.close();
                break;
                
            default:
                MarktaskAsDone(tasklist,tasknumber - 1);
                //comprobar si todas las tareas estan hechas
                if (checkAllDone(tasklist)){
                    printtasklist(tasklist)
                    console.log('Todas las tareas estan realizadas')
                    rl.close();
                } else {
                    mode2(tasklist)
                }    
        }
    });
}
