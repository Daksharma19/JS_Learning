let myArray = ["flash", "superman", "batman", "wonderwoman"]
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(element)
}

// break and continue

for (let i = 0; i <= 20; i++) {
    if(i === 5) {
        console.log("Detected 5");
        continue;
    }
    console.log(`value of i is ${i}`);
}