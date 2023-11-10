import { pacientes, Pacientes, NumeroPacientesPorEspecialidad} from "./modelo";

// Apartados obligatorios

console.log("Apartado 1 - A");

  const obtenPacientesAsignadosAPediatria = (
    pacientes: Pacientes[]
  ): Pacientes[] => {
    return pacientes.filter(
    (pacientes) => pacientes.especialidad === "Pediatra")
  };

console.log("Pacientes asignados a pediatría", obtenPacientesAsignadosAPediatria(pacientes));

console.log("Apartado 1 - B");

const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (
  pacientes: Pacientes[]
): Pacientes[] => {
    return pacientes.filter(
    (pacientes) => pacientes.especialidad === "Pediatra" && pacientes.edad < 10
    );
};

console.log("Pacientes asignados a pediatría y menores de 10 años", 
obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes));

// --------------------------------------------------------------------

console.log("Apartado 2");

const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  return pacientes.some(
  (pacientes) => pacientes.frecuenciaCardiaca > 100 && pacientes.temperatura > 39
  );
};

console.log("Hay que activar el protocolo de urgencia:", activarProtocoloUrgencia(pacientes));

// --------------------------------------------------------------------

console.log("Apartado 3");

  const reasignaPacientesAMedicoFamilia = (pacientes: Pacientes[]): Pacientes[] => 
  pacientes.map((pacientes: Pacientes) => {
    if (pacientes.especialidad === "Pediatra") {
      return {
        ...pacientes,
        especialidad: "Medico de familia",
      };
    }
    return pacientes;
  });

console.log("Reasignación de pacientes", reasignaPacientesAMedicoFamilia(pacientes));

// --------------------------------------------------------------------

console.log("Apartado 4");

  const hayPacientesDePediatria= (pacientes: Pacientes[]): boolean =>
  pacientes.some((pacientes) => pacientes.especialidad === "Pediatra");

console.log("Hay pacientes de pediatría:", hayPacientesDePediatria(pacientes));

// --------------------------------------------------------------------

console.log("Apartado 5");

const cuentaPacientesPorEspecialidad = (
  pacientes: Pacientes[]
): NumeroPacientesPorEspecialidad => {
  const numeroPacientes: NumeroPacientesPorEspecialidad = {
    medicoDeFamilia: pacientes.filter(
      (pacientes) => pacientes.especialidad === "Pediatra"
    ).length,
    pediatria: pacientes.filter(
      (pacientes) => pacientes.especialidad === "Medico de familia"
    ).length,
    cardiologia: pacientes.filter(
      (pacientes) => pacientes.especialidad === "Cardiólogo"
    ).length,
  };
  return numeroPacientes;
};

console.log("Nº de pacientes asignados a cada especialidad: ", cuentaPacientesPorEspecialidad(pacientes));