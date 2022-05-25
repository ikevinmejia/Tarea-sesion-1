// Valores a usar

const nombre = prompt('¿Cuál es tu nombre?');
const horasTrabajo = Number(prompt('¿Cuántas horas ha trabajado?'));
const valorHora = Number(prompt('¿Cuánto es el valor de una hora de trabajo?'));

// Calculando resultado
const calcularSalario = (horasTrabajadas, valor) => {
    return horasTrabajadas * valor;
};

// Imprimiendo el nombre y sueldo
document.write(`<h2>El sueldo de ${nombre} es de ${calcularSalario(horasTrabajo,valorHora)}</h2>`)

