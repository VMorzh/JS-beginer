const userList = [
  { id: 6412, name: "Anton", age: 41, balance: 300 },
  { id: 54, name: "Ivan", age: 35, balance: 0 },
  { id: 1, name: "Dima", age: 19, balance: 1200 },
];

const result = userList.map((user, index, array) => {
  user.balanceLimit = 1000 - user.balance;

  if (user.balanceLimit < 0) {
    user.balanceLimit = 0;
  }

  return user.name;
});
console.log(result.join(", "));

const result = userList.reduce((num, user, userIndex, array) => {
  console.log(num, user.age);
  return user.age > num ? user.age : num;
}, 1);

 let minAge = 30;

 const userBigAge = userList.sort((user1, user2) => {
   return user2.age - user1.age;
 });

 const userBigAge = userList.find(({ age }) => age >= minAge);

 const userBigAge = userList.findIndex(({ age }) => age >= minAge);

 const userBigAge = userList.findLast(({ age }) => age >= minAge);

 console.log(userBigAge);

 console.log(userList.keys());

/*Syper iterator!! 19 */

 const iter = userList.values();
 console.log(iter);

 const result = iter.next();

 console.log(result);

 for (const elem of iter) {
   console.log(elem);
 }

/* Join Sepereator!!!!!!!!!!!!!!!!!!!!!!*/
 const arr = ["Apple", "Hotdog", "Banana", "Milk"];
 console.log(arr.join("..."));
 const arrSmall = arr.splice(1, 0, ...userList);

 const arrSmall = arr.slice(1, 3);
 console.log(arrSmall);

...........................
 const flatArray = [
   [100, 105],
   [200, 205],
   [220, 230],
   [400, 455],
 ];

 console.log(flatArray.flat(2));

 console.log(flatArray.map((el) => [...el, el[0] - el[1]]));

const flatArray = [
  [
    [100, 105],
    [200, 205],
  ],
  [
    [220, 230],
    [400, 455],
  ],
];

const result = flatArray.flatMap((el) => {
  return el.map((it) => {
    return it[0] - it[1];
  });
});
console.log(result);
....

result.forEach((elem, index, array) => {
  console.log(elem);
});
