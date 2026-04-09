import db from "#db/client";
import { createEmployee } from "#db/queries/employees";

await db.connect();
await seedEmployees();
await db.end();
console.log("🌱 Database seeded.");

async function seedEmployees() {
  await createEmployee({name: 'Joe Smith', birthday: '1990-06-07', salary: '50000'});
  await createEmployee({name: 'George Fork', birthday: '1992-08-03', salary: '49000'});
  await createEmployee({name: 'Jeff Heff', birthday: '1990-12-10', salary: '60000'});
  await createEmployee({name: 'Mary Gary', birthday: '1994-02-12', salary: '65000'});
  await createEmployee({name: 'Peter Liter', birthday: '1998-07-23', salary: '54600'});
  await createEmployee({name: 'Ben Glenn', birthday: '1993-05-08', salary: '55000'});
  await createEmployee({name: 'Zach Bach', birthday: '1991-09-07', salary: '70000'});
  await createEmployee({name: 'Regetable Vegetable', birthday: '1998-03-03', salary: '58000'});
  await createEmployee({name: 'Gordie Bordie', birthday: '1999-09-09', salary: '68000'});
  await createEmployee({name: 'Victor Rictor', birthday: '1996-11-14', salary: '62000'});
}
