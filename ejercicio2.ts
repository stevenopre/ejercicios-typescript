// Definir la estructura de un empleado
type Employee = {
    name: string;
    position: string;
    salary: number;
  };
  
  // Array para almacenar los empleados
  let employees: Employee[] = [];
  
  // Función para agregar un empleado
  function addEmployee(name: string, position: string, salary: number): void {
    const newEmployee: Employee = { name, position, salary };
    employees.push(newEmployee);
    console.log(`Empleado '${name}' agregado a la empresa.`);
  }
  
  // Función para buscar un empleado por nombre
  function searchEmployeeByName(name: string): Employee | undefined {
    const employee = employees.find((e) => e.name.toLowerCase() === name.toLowerCase());
    if (employee) {
      console.log(`Empleado encontrado: ${employee.name}, ${employee.position}, Salario: ${employee.salary}`);
    } else {
      console.log(`No se encontró ningún empleado con el nombre '${name}'.`);
    }
    return employee;
  }
  
  // Función para calcular el salario promedio
  function calculateAverageSalary(): number {
    if (employees.length === 0) {
      console.log("No hay empleados en la empresa.");
      return 0;
    }
  
    const totalSalary = employees.reduce((sum, employee) => sum + employee.salary, 0);
    const averageSalary = totalSalary / employees.length;
    console.log(`El salario promedio es: ${averageSalary.toFixed(2)}`);
    return averageSalary;
  }