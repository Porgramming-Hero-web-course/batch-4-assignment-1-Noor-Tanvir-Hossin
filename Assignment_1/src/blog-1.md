## Blog-1 : The significance of union and intersection types in Typescript.

## Significance of UNION

**Union:** Union types let a variable hold one of multiple possible types, like this value can be either type A or type B. It's gives us flexibility by allowing us to handle multiple types in a single varible and accepts only certain types.

**Example:** let id : string | number

# Significane of INTERSECTION

**Intersection :** Intersection types allows us to combine multiple types into one. It's ensure that this variable or object should have all properties of type A and type B.  

**Example:** 
type Person={ name:string, age:number };
type Employee = {empId:number};

type EmployeePerson = Person & Employee;

const worker: EmployeePerson = { name:"tanvir", age: 23, empId:2315 };

