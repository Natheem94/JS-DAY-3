let json_obj = [{id : "1", name : "xxx", age : "11"}, {id : "2", name : "yyy", age : "13"},
{id : "3", name : "zzz", age : "11"}];
for (const i of json_obj) {
    console.log(`Student ID: ${i.id} Student Name: ${i.name} Student Age: ${i.age}`);
}