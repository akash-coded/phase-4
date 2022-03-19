interface Account {
  id: number;
  displayName: string;
  phoneNumber?: string;
}

function welcome(user: Account) {
  console.log(`Welcome trainer no. ${user.id} - ${user.displayName}`);
  if (user.phoneNumber) {
    console.log("Contact No.: " + user.phoneNumber);
  }
  console.log();
}

let accountObj1 = { id: 101, displayName: "Akash" };
welcome(accountObj1);

let accountObj2 = { id: 102, displayName: "Bikash", phoneNumber: "987665363" };
welcome(accountObj2);
