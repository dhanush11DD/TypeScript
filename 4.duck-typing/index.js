var complexType = { id: 2, name: "dhanush" };
// error TS2741: Property 'name' is missing in type '{ id: number; }'
// complexType = {id : 3}
// error TS2741: Property 'id' is missing in type '{ name: string; }'
// complexType = {name : "Tom"}
// error TS2353: Object literal may only specify known properties, and 'address' does not exist in type
// complexType = {address : " I'm here"}
console.log(complexType);
