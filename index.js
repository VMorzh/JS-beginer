/*  Урок 22 JSON / URL Просунуті тип данних ********/
 const roleField = "roleName";

 const data = {
   id: 1043,
   login: "user3431",
   password: "123451we@",
   [roleField]: "Admin",
   go() {
     console.log("go");
   },
   test1: {
     test2: 123,
   },
 };

 const jsonData = JSON.stringify(
   data,
   (key, value) => {
     if (key === roleField) {
       return null;
     }
     if (typeof value === "string") {
       return value.toUpperCase();
     }

     if (typeof value === "number") {
       return value * 10;
     }
     return value;
   },
   4
 );

 console.log(jsonData);

 const parseData = JSON.parse(jsonData, (key, value) => {
   if (key === roleField) {
     return "Admin";
   }
   if (typeof value === "string") {
     return value.toLowerCase();
   }

   if (typeof value === "number") {
     return value / 10;
   }
   return value;
 });
 console.log(parseData);
 ......

 const url = new URL("https:www.example.com/path/info#how-to-do").hash;

 console.log(url.slice(1));

 const url = new URL("https:admin:12345@example.com:8080/path");
 console.log(url.password);

 const url = new URL("https:example.com/path?param=value#section")
   .searchParams;
 console.log(url);
 console.log(url.has("q"));
 console.log(url.get("name"));

 console.log(url.getAll("q"));

const url = new URL("https:google.com/search");
url.searchParams.append("q", "cat photo");
console.log(url.href);
