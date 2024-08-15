// work-date.ts

export interface Period {
    start: number; // Fecha de inicio en milisegundos
    end: number;   // Fecha de fin en milisegundos
}

// Define y exporta el array de períodos
export const periods: Period[] = [
    { start: new Date('2021-05-01').getTime(), end: new Date('2021-10-01').getTime() },
    { start: new Date('2022-04-01').getTime(), end: new Date('2022-10-01').getTime() },
    { start: new Date('2022-12-28').getTime(), end: Date.now() } // Período actual en curso
];