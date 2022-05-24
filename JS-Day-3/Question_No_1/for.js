let json_obj = [{id : "1", name : "xxx", age : "11"}, {id : "2", name : "yyy", age : "13"},
{id : "3", name : "zzz", age : "11"}];
for(i=0; i<json_obj.length; i++) {
    console.log(`Student ID: ${json_obj[i].id} Student Name: ${json_obj[i].name} Student Age: ${json_obj[i].age}`);
}
