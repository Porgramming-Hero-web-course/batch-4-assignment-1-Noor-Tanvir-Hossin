{
    //
    interface profile {
        name:string;
        age:number;
        email:string
    }

    function updateProfile(prof: profile, updates: Partial<profile>):profile{
        return{
            name:updates.name?? prof.name,
            age:updates.age?? prof.age,
            email:updates.email?? prof.email
        }
    }

//     const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
// console.log(updateProfile(myProfile, { age: 26 }));



    //
}