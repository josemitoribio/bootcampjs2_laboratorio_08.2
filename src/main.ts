import { pacientes, Pacientes, NumeroPacientesPorEspecialidad} from "./modelo";

// Apartados obligatorios

console.log("Apartado 1 - A");

const obtenPacientesAsignadosAPediatria = (
    pacientes: Pacientes[]
    ) : Pacientes[] => {
    let pacientesAsignadosAPediatria : Pacientes[] = [];
    for (let i = 0; i<pacientes.length; i++) {
        if (pacientes[i].especialidad === "Pediatra") {
        pacientesAsignadosAPediatria.push(pacientes[i]);
    }
  };
  return pacientesAsignadosAPediatria;
}; 

console.log("Pacientes asignados a pediatría", 
obtenPacientesAsignadosAPediatria(pacientes));

console.log("Apartado 1 - B");

const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (
    pacientes: Pacientes[]
  ): Pacientes[] => {
    let pacientesAsignadosAPediatriaYMenorDeDiezAnios : Pacientes[] = [];
    for (let i = 0; i < pacientes.length; i++) {
        if (pacientes[i].especialidad === "Pediatra" && pacientes[i].edad<10) {
        pacientesAsignadosAPediatriaYMenorDeDiezAnios.push(pacientes[i]);
        }
    }
    return pacientesAsignadosAPediatriaYMenorDeDiezAnios;
  };

console.log("Pacientes asignados a pediatría y menores de 10 años", 
obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes));


// --------------------------------------------------------------------


console.log("Apartado 2");

const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
    let activarProtocolo = false;
    for (let i = 0; i < pacientes.length; i++) {
        if (pacientes[i].frecuenciaCardiaca > 100 && pacientes[i].temperatura > 39) {
         activarProtocolo = true;   
        }
    }
    return activarProtocolo;
  };


console.log("Hay que activar el protocolo de urgencia:", activarProtocoloUrgencia(pacientes));

// --------------------------------------------------------------------

console.log("Apartado 3");

let pacientesReasignados : Pacientes[] = [];

  const reasignaPacientesAMedicoFamilia = (
    pacientes: Pacientes[]
  ): Pacientes[] => {
    for (let i = 0; i < pacientes.length; i++) {
        if(pacientes[i].especialidad === "Pediatra") {
            let pacienteReasignado : Pacientes = {
            ...pacientes[i],
            especialidad: "Medico de familia",
            };
    pacientesReasignados = [...pacientesReasignados, pacienteReasignado];
        }
    }
    return pacientesReasignados;
  };

  console.log("Reasignación de pacientes", reasignaPacientesAMedicoFamilia(pacientes));

// --------------------------------------------------------------------

console.log("Apartado 4");

  const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
    let pacientesPediatria = false;
    for (let i = 0; i < pacientes.length; i++) {
        if (pacientes[i].especialidad === "Pediatra") {
            pacientesPediatria = true;
            break;
        }
    }
    return pacientesPediatria;
  };

  console.log("Hay pacientes de pediatría: ", HayPacientesDePediatria(pacientes));

  // --------------------------------------------------------------------

console.log("Apartado 5");

const cuentaPacientesPorEspecialidad = (
    pacientes: Pacientes[]
  ): NumeroPacientesPorEspecialidad => {
    let medicoDeFamilia: number = 0;
    let pediatria: number = 0;
    let cardiologia: number = 0;
    let i: number = 0;
    while (i < pacientes.length) {
      switch (pacientes[i].especialidad) {
          case "Medico de familia":
              medicoDeFamilia++;
              break;
          case "Pediatra":
              pediatria++;
              break;
          case "Cardiólogo":
              cardiologia++;
              break;
      }
      i++;
    }
    return {medicoDeFamilia, pediatria, cardiologia};
  };
  
  console.log("Nº de pacientes asignados a cada especialidad: ", cuentaPacientesPorEspecialidad(pacientes));