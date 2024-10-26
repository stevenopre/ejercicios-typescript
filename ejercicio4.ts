// Definir la estructura de un estudiante
type Student = {
    name: string;
    grade: number;
  };
  
  // Array para almacenar los estudiantes
  let students: Student[] = [];
  
  // Función para agregar un estudiante
  function addStudent(name: string, grade: number): void {
    const newStudent: Student = { name, grade };
    students.push(newStudent);
    console.log(`Estudiante '${name}' agregado con nota: ${grade}`);
  }
  
  // Función para buscar un estudiante por nombre
  function searchStudentByName(name: string): Student | undefined {
    const student = students.find((s) => s.name.toLowerCase() === name.toLowerCase());
    if (student) {
      console.log(`Estudiante encontrado: ${student.name}, Nota: ${student.grade}`);
    } else {
      console.log(`No se encontró ningún estudiante con el nombre '${name}'.`);
    }
    return student;
  }
  
  // Función para calcular el promedio de notas de todos los estudiantes
  function calculateAverageGrade(): number {
    if (students.length === 0) {
      console.log("No hay estudiantes en la lista.");
      return 0;
    }
  
    const totalGrades = students.reduce((sum, student) => sum + student.grade, 0);
    const averageGrade = totalGrades / students.length;
    console.log(`El promedio de notas de todos los estudiantes es: ${averageGrade.toFixed(2)}`);
    return averageGrade;
  }