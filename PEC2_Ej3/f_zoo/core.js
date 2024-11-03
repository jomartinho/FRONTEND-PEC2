const data = require("./data");

function entryCalculator(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;

  const prices = data.prices;

  return Object.entries(entrants).reduce((total, [category, count]) => {
    return (
      total +
      prices[category.charAt(0).toUpperCase() + category.slice(1)] * count
    );
  }, 0);
}

function schedule(dayName) {
  const { hours } = data;
  const formattedHours = Object.fromEntries(
    Object.entries(hours).map(([day, { open, close }]) => [
      day,
      open === 0 && close === 0
        ? "CLOSED"
        : `Open from ${open}am until ${close % 12 || 12}pm`,
    ])
  );

  return dayName ? { [dayName]: formattedHours[dayName] } : formattedHours;
}

function animalCount(species) {
  const animalCounts = data.animals.reduce((counts, animal) => {
    counts[animal.name] = animal.residents.length;
    return counts;
  }, {});

  if (species) return animalCounts[species];
  return animalCounts;
}

function animalMap(options = {}) {
  const groupedByLocation = data.animals.reduce((map, animal) => {
    const { location, name, residents } = animal;
    if (!map[location]) map[location] = [];

    if (options.includeNames) {
      const animalWithNames = {
        [name]: options.sex
          ? residents
              .filter((resident) => resident.sex === options.sex)
              .map((resident) => resident.name)
          : residents.map((resident) => resident.name),
      };
      map[location].push(animalWithNames);
    } else {
      map[location].push(name);
    }

    return map;
  }, {});

  return groupedByLocation;
}

function animalPopularity(rating) {
  const popularityGroups = data.animals.reduce((groups, animal) => {
    if (!groups[animal.popularity]) groups[animal.popularity] = [];
    groups[animal.popularity].push(animal.name);
    return groups;
  }, {});

  return rating ? popularityGroups[rating] || [] : popularityGroups;
}

function animalsByIds(ids) {
  if (!ids || ids.length === 0) return [];
  return data.animals.filter((animal) => ids.includes(animal.id));
}

function employeesByIds(...ids) {
  if (!ids || ids.length === 0) return [];
  return data.employees.filter((employee) => ids.includes(employee.id));
}

function animalByName(animalName) {
  for (const animal of data.animals) {
    const resident = animal.residents.find((res) => res.name === animalName);
    if (resident) {
      return { ...resident, species: animal.name };
    }
  }
  return {};
}

function employeesByIds(ids) {
  if (!ids || ids.length === 0) return [];
  return data.employees.filter((employee) => ids.includes(employee.id));
}

function employeeByName(employeeName) {
  if (!employeeName) return {};
  return (
    data.employees.find(
      (emp) => emp.firstName === employeeName || emp.lastName === employeeName
    ) || {}
  );
}

function managersForEmployee(idOrName) {
  const employee = data.employees.find(
    (emp) =>
      emp.id === idOrName ||
      emp.firstName === idOrName ||
      emp.lastName === idOrName
  );

  // If no employee is found, return an empty object
  if (!employee) return {};

  // Find the names of the employee's managers
  const managerNames = employee.managers
    .map((managerId) => {
      const manager = data.employees.find((emp) => emp.id === managerId);
      return manager ? `${manager.firstName} ${manager.lastName}` : null;
    })
    .filter(Boolean); // Filter out any null values in case of missing managers

  // Return the employee object with the expected structure
  return {
    id: employee.id,
    firstName: employee.firstName,
    lastName: employee.lastName,
    managers: managerNames,
    responsibleFor: employee.responsibleFor,
  };
}

function employeeCoverage(idOrName) {
  const getAnimals = (ids) =>
    ids.map((id) => data.animals.find((animal) => animal.id === id).name);

  if (idOrName) {
    const employee = data.employees.find(
      (emp) =>
        emp.id === idOrName ||
        emp.firstName === idOrName ||
        emp.lastName === idOrName
    );
    return {
      [`${employee.firstName} ${employee.lastName}`]: getAnimals(
        employee.responsibleFor
      ),
    };
  }

  return data.employees.reduce((coverage, emp) => {
    coverage[`${emp.firstName} ${emp.lastName}`] = getAnimals(
      emp.responsibleFor
    );
    return coverage;
  }, {});
}

module.exports = {
  entryCalculator,
  schedule,
  animalCount,
  animalMap,
  animalPopularity,
  animalsByIds,
  animalByName,
  employeesByIds,
  employeeByName,
  managersForEmployee,
  employeeCoverage,
};
